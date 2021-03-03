import React from "react";
import {
  ListFooter,
  ItemListFooter,
  reversedItemListFooter,
} from "../../styles/Lib";

const NavFooter = (props) => (
  <ListFooter>
    {props.pagenumbers.map((pagenumber) => {
      if (pagenumber.active)
        return (
          <ItemListFooter key={pagenumber.id} theme={reversedItemListFooter}>
            {pagenumber.id}
          </ItemListFooter>
        );
      else
        return (
          <ItemListFooter
            key={pagenumber.id}
            onClick={() => {
              props.changePage(pagenumber.id);
            }}
          >
            {pagenumber.id}
          </ItemListFooter>
        );
    })}
  </ListFooter>
);

export default NavFooter;
