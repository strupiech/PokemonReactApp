import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import MainPage from "../pages/MainPage";
import DetailedPage from "../pages/DetailedPage";

const LISTHEADER = ["Id", "Pokemon", "Nazwa", "Min. LVL", "Typ", "Evolucja"];

const POKESTART = "https://pokeapi.co/api/v2/pokemon/";

class App extends React.Component {
  state = {
    pagenumbers: [
      { id: 1, active: true },
      { id: 2, active: false },
      { id: 3, active: false },
      { id: 4, active: false },
      { id: 5, active: false },
      { id: 6, active: false },
    ],
    activePokemonId: 1,
    pokemons: [],
    bgIm: null,
  };

  handleActivePokemonChange = (id) => {
    this.setState(() => {
      return { activePokemonId: id % 10 === 0 ? 10 : id % 10 };
    });
    this.handleBgImChange(id % 10 === 0 ? 10 : id % 10);
  };

  handleBgImChange = (id) => {
    this.setState(() => {
      return {
        bgIm: this.state.pokemons[id - 1].sprites.front_default,
      };
    });
  };

  handleChangePage = (id) => {
    const pagenumbers = this.state.pagenumbers.map((page) => {
      page.active = false;
      if (id === page.id) {
        page.active = true;
      }
      return page;
    });
    this.setState({
      pagenumbers: pagenumbers,
    });
    this.handleDataFetch(id);
  };

  handleDataFetch = (id) => {
    for (var i = 1 + 10 * (id - 1); i < 11 + 10 * (id - 1); i++) {
      this.setState({ pokemons: [] });
      fetch(POKESTART + i)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error(
            "Błąd podczas pobierania danych z Pokemon API " + response.status
          );
        })
        .then((response) => response.json())
        .then((data) => {
          const pokemons = this.state.pokemons;
          this.setState({ pokemons: [...pokemons, data] });
        });
    }

    this.state.pokemons.sort(function (a, b) {
      return a.id - b.id;
    });
  };

  componentDidMount() {
    this.handleDataFetch(1);
  }

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" >
              <Redirect to="/welcome" />
            </Route>
            <Route exact path="/welcome">
              <MainPage
                pokemons={this.state.pokemons}
                attribute={LISTHEADER}
                pagenumbers={this.state.pagenumbers}
                changePage={this.handleChangePage}
                activePokemonChange={this.handleActivePokemonChange} />
            </Route>
            <Route exact path="/details">
              <DetailedPage
                activePokemonChange={this.handleActivePokemonChange}
                pokemons={this.state.pokemons}
                activePokemon={this.state.activePokemonId}
                pokemon={this.state.pokemons[this.state.activePokemonId - 1]}
                theme={this.state.bgIm}
              />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
