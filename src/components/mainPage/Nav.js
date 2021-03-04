import React, { Component, useEffect, useState } from "react";
import NavList from "./NavList";
import NavHeader from "./NavHeader";
import NavFooter from "./NavFooter";
import { ListWrapper } from "../../styles/Lib";
import FetchDataService from "../../services/FetchDataService"

const POKEMONS = FetchDataService.POKEMONS;
// const POKESTART = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=60";

function Nav(props) {

  const [pokemons, setPokemons] = React.useState(POKEMONS);
  // useEffect(() => {
  //   const pokemonsData = [];

  //   fetch(POKESTART)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       response.results.map(pokemon => {
  //         fetch(pokemon.url)
  //           .then(response => response.json())
  //           .then(pokeDetails => {
  //             pokemonsData.push(pokeDetails);
  //           });
  //       })
  //     },
  //       (error) => {
  //         ERORR = error;
  //       });

  //   pokemonsData.sort(function (a, b) {
  //     return a.id - b.id;
  //   });
  //   console.log(pokemonsData);
  //   console.log(pokemonsData.length);
  //   setPokemons(pokemonsData);
  // }, []);

  const renderNavList = (pageId) => {
    let counter = pageId - 1 * 10;
    const rows = [];

    if (pokemons.length > 0) {
      for (let i = counter; i < counter + 10; i++) {
        {
          rows.push(
            <NavList
              pokemon={pokemons[i]}
              activePokemonChange={props.activePokemonChange}
              handleShowDetails={props.handleShowDetails}
            />
          );
        }
        return rows;
      }
    }
  }

  return (
    <ListWrapper>
      <NavHeader attribute={props.attribute} />
      {renderNavList(1)}
      <NavFooter
        pagenumbers={props.pagenumbers}
        changePage={props.changePage}
      />
    </ListWrapper>
  );

}

export default Nav;