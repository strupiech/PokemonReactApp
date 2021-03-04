import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import MainPage from "../pages/MainPage";
import DetailedPage from "../pages/DetailedPage";
import FetchDataService from "../services/FetchDataService"

const LISTHEADER = ["Id", "Pokemon", "Nazwa", "Min. LVL", "Typ", "Evolucja"];
const POKEMONS = FetchDataService.POKEMONS;

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
    bgIm: null,
  };

  handleActivePokemonChange = (id) => {
    this.setState(() => {
      return { activePokemonId: id };
    });
    this.handleBgImChange(id);
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
  };

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
                length={this.state.length}
                attribute={LISTHEADER}
                pagenumbers={this.state.pagenumbers}
                changePage={this.handleChangePage}
                activePokemonChange={this.handleActivePokemonChange} />
            </Route>
            <Route exact path="/details">
              <DetailedPage
                activePokemonChange={this.handleActivePokemonChange}
                activePokemon={this.state.activePokemonId}
                pokemon={POKEMONS[this.state.activePokemonId - 1]}
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
