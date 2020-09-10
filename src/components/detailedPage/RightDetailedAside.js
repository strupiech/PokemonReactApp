import React from "react";
import { RightDetailsText, RightDetailsAside } from "../styled/Lib";
import RightDetailsInfo from "./RightDetailsInfo";

const RightDetailedAside = (props) => (
  <RightDetailsAside>
    <RightDetailsText>
      <strong>{props.pokemon.name}</strong> Tutaj powinien znaleźć się opis
      pokemona o id {props.pokemon.id}
    </RightDetailsText>
    <RightDetailsInfo pokemon={props.pokemon} />
  </RightDetailsAside>
);

export default RightDetailedAside;
