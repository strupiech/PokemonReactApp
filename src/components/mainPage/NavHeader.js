import React from "react";
import { ListHeader, ItemListHeader } from "../../styles/Lib";

const LISTHEADER = ["Id", "Pokemon", "Nazwa", "Min. LVL", "Typ", "Evolucja"];

const NavHeader = ({ attribute }) => (
  <ListHeader>
    {LISTHEADER.map((attribute) => (
      <ItemListHeader key={attribute}>{attribute}</ItemListHeader>
    ))}
  </ListHeader>
);

export default NavHeader;
