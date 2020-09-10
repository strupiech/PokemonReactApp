import React from "react";
import NavList from "./NavList";
import NavHeader from "./NavHeader";
import NavFooter from "./NavFooter";
import { ListWrapper } from "../styled/Lib";

const Nav = (props) => {
  return (
    <ListWrapper>
      <NavHeader attribute={props.attribute} />
      {props.pokemons.map((pokemon) => (
        <NavList
          pokemon={pokemon}
          key={pokemon.id}
          toggleEvolution={props.toggleEvolution}
          toggleShowDetails={props.toggleShowDetails}
          activePokemonChange={props.activePokemonChange}
        />
      ))}
      <NavFooter
        pagenumbers={props.pagenumbers}
        changePage={props.changePage}
      />
    </ListWrapper>
  );
};
export default Nav;
