import React from "react";
import { ListHeader, ItemListHeader } from "../../styles/Lib";

const NavHeader = ({ attribute }) => (
  <ListHeader>
    {attribute.map((attribute) => (
      <ItemListHeader key={attribute}>{attribute}</ItemListHeader>
    ))}
  </ListHeader>
);

export default NavHeader;
