import React from "react";
import Item from "./Item";
import { List } from "../../styles/Lib";

class NavList extends React.Component {

  state = {
    hover: false,
    evolution: this.props.pokemon.evolution,
  };

  toggleEvolution = () => {
    this.setState({ hover: !this.state.hover });
    if (!this.state.hover) {
      this.setState({ evolution: "więcej>" });
    } else {
      this.setState({ evolution: this.props.pokemon.evolution });
    }
  };

  render() {
    return (
      <List
        key={this.props.pokemon.id}
        onMouseLeave={this.toggleEvolution}
        onMouseEnter={this.toggleEvolution}
        onClick={() => {
          this.props.handleShowDetails();
          this.props.activePokemonChange(this.props.pokemon.id);
        }}
      >
        <Item
          id={this.props.pokemon.id}
          image={this.props.pokemon.sprites.front_default}
          name={this.props.pokemon.name}
          minLvl={this.props.pokemon.minLvl}
          type={this.props.pokemon.types[0].type.name}
          evolution={this.state.evolution}
        />
      </List>
    );
  }
}

export default NavList;