import React from "react";
import { Info, InfoItem } from "../../styles/Lib";

const RightDetailsInfo = (props) => (
  <Info>
    <InfoItem>
      <strong>Typ:</strong>{" "}
      {props.pokemon.types.map((pokemon) => {
        return pokemon.type.name + " ";
      })}
    </InfoItem>
    <InfoItem>
      <strong>Płeć:</strong>
    </InfoItem>
    <InfoItem>
      <strong>Region:</strong>
    </InfoItem>
    <InfoItem>
      <strong>Występowanie w dziczy:</strong>
    </InfoItem>
    <InfoItem>
      <strong>Możliwość złapania:</strong>
    </InfoItem>
    <InfoItem>
      <strong>Trudność złapania:</strong>
    </InfoItem>
    <InfoItem>
      <strong>Występowanie Shiny:</strong>
    </InfoItem>
    <InfoItem>
      <strong>Dodawanie do kolekcji przez:</strong>
    </InfoItem>
  </Info>
);

export default RightDetailsInfo;
