import React from "react";
import {
  AppWrapper,
  Aside,
  Menu,
  MenuHeader,
  DetailsHeader,
  MiddleSectionWrapper,
  MiddleImage,
} from "./styled/Lib";
import LeftDetailedAside from "./detailedPage/LeftDetailedAside";
import RightDetailedAside from "./detailedPage/RightDetailedAside";
import Nav from "./mainPage/Nav";
import DetailsFooter from "./detailedPage/DetailsFooter";

const LISTHEADER = ["Id", "Pokemon", "Nazwa", "Min. LVL", "Typ", "Evolucja"];

const POKESTART = "https://pokeapi.co/api/v2/pokemon/";

class App extends React.Component {
  state = {
    showDetails: false,
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

  handleToggleShowDetails = () => {
    this.setState({ showDetails: !this.state.showDetails });
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
    if (this.state.showDetails)
      return (
        <AppWrapper>
          <DetailsHeader />
          <MiddleSectionWrapper>
            <LeftDetailedAside pokemons={this.state.pokemons} />
            <MiddleImage theme={this.state.bgIm} />
            <RightDetailedAside
              pokemon={this.state.pokemons[this.state.activePokemonId - 1]}
            />
          </MiddleSectionWrapper>
          <DetailsFooter
            toggleShowDetails={this.handleToggleShowDetails}
            activePokemonChange={this.handleActivePokemonChange}
            pokemons={this.state.pokemons}
            activePokemon={this.state.activePokemonId}
          />
        </AppWrapper>
      );
    else
      return (
        <AppWrapper>
          <Aside />
          <Menu>
            <MenuHeader />
            <Nav
              pokemons={this.state.pokemons}
              attribute={LISTHEADER}
              pagenumbers={this.state.pagenumbers}
              changePage={this.handleChangePage}
              toggleShowDetails={this.handleToggleShowDetails}
              activePokemonChange={this.handleActivePokemonChange}
            />
          </Menu>
        </AppWrapper>
      );
  }
}

export default App;
