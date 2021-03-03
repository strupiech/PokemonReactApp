import React from "react";
import NavList from "./NavList";
import NavHeader from "./NavHeader";
import NavFooter from "./NavFooter";
import { ListWrapper } from "../../styles/Lib";
import { useHistory } from 'react-router-dom';

const Nav = (props) => {
  let history = useHistory();

  const handleShowDetails = () => {
    history.push("/details");
  }

  return (
    <ListWrapper>
      <NavHeader attribute={props.attribute} />
      {props.pokemons.map((pokemon) => (
        <NavList
          pokemon={pokemon}
          key={pokemon.id}
          activePokemonChange={props.activePokemonChange}
          handleShowDetails={handleShowDetails}
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