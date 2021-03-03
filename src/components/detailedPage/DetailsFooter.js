import React from "react";
import { BackButton, NextButton, TitleFooter } from "../../styles/Lib";
import { useHistory } from 'react-router-dom';

function zeroPad(num) {
  return num.toString().padStart(3, "0");
}

function DetailsFooter(props) {

  let history = useHistory();

  const handleBackToWelcome = () => {
    history.push("/welcome");
  }

  return (
    <>
      <BackButton onClick={() => handleBackToWelcome()}>&lt; Powrót </BackButton>
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
  )
};

export default DetailsFooter;
