import React, { Component, useEffect, useState } from "react";
import NavList from "./NavList";
import NavHeader from "./NavHeader";
import NavFooter from "./NavFooter";
import { ListWrapper } from "../../styles/Lib";
import { fetchPokemons, fetchPokemonByURL } from "../../fetch/pokemon.fetch"

function Nav(props) {

  const [pokemons, setPokemons] = React.useState([]);
  const [error, setError] = React.useState("");
  const limit = 60;

  const fetchPokemonsData = async () => {
    let pokemonsData = [];

    await fetchPokemons(limit)
      .then((response) => response.json())
      .then((response) => {
        response.results.map(async (pokemon) => {
          await fetchPokemonByURL(pokemon.url)
            .then(response => response.json())
            .then(pokeDetails => {
              pokemonsData.push(pokeDetails);
            });
          if (pokemonsData.length === limit) {
            pokemonsData.sort(function (a, b) {
              return a.id - b.id;
            });
            setPokemons(pokemonsData);
          }
        })
      },
        (error) => {
          setError(error);
        });
  }

  useEffect(() => {
    fetchPokemonsData();
  }, []);

  const renderNavList = (pageId) => {

    if (pokemons.length > 0) {
      let offset = (pageId - 1) * 10;
      const navItems = [];
      let currKey = 0
      for (let i = offset; i < (offset + 10); i++) {
        navItems.push(
          <NavList
            key={currKey++}
            pokemon={pokemons[i]}
            activePokemonChange={props.activePokemonChange}
            handleShowDetails={props.handleShowDetails}
          />
        );
      }
      return navItems;
    }
  }

  const getActivePage = () => {
    for (let i = 0; i < props.pagenumbers.length; i++) {
      if (props.pagenumbers[i].active) return props.pagenumbers[i].id;
    }
  }

  return (
    <ListWrapper>
      <NavHeader />
      {renderNavList(getActivePage())}
      <NavFooter
        pagenumbers={props.pagenumbers}
        changePage={props.changePage}
      />
    </ListWrapper>
  );

}

export default Nav;