import React from "react";
import { BackButton, NextButton, TitleFooter } from "../styled/Lib";

function zeroPad(num) {
  return num.toString().padStart(3, "0");
}

const DetailsFooter = (props) => (
  <>
    <BackButton onClick={props.toggleShowDetails}>&lt; Powrót </BackButton>
    <NextButton
      onClick={() => props.activePokemonChange(props.activePokemon + 1)}
    >
      Następny &gt;
    </NextButton>
    <TitleFooter>
      {zeroPad(props.pokemons[props.activePokemon - 1].id)}{" "}
      {props.pokemons[props.activePokemon - 1].name}
    </TitleFooter>
  </>
);

export default DetailsFooter;
