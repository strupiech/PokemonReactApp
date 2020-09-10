import React from "react";
import { Record } from "../styled/Lib";

function zeroPad(num) {
  return num.toString().padStart(3, "0");
}

const Item = (props) => {
  const bgImage = {
    bg: props.image,
  };
  return (
    <>
      <Record>{zeroPad(props.id)}</Record>
      <Record theme={bgImage}></Record>
      <Record>{props.name}</Record>
      <Record>{props.minLvl}</Record>
      <Record>{props.type}</Record>
      <Record>{props.evolution}</Record>
    </>
  );
};

export default Item;
