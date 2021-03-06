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
        onClick={() => {
          props.activePokemonChange(props.activePokemonId + 1);
          props.changePage(parseInt(((props.activePokemonId + 1) / 10) + 1));
        }}
      >
        Następny &gt;
    </NextButton>
      <TitleFooter>
        {zeroPad(props.pokemon.id)}{" "}
        {props.pokemon.name}
      </TitleFooter>
    </>
  )
};

export default DetailsFooter;
