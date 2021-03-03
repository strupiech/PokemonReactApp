import React from "react";
import {
  LeftDetailsStats,
  LeftDetailsAside,
  LeftDetailsHeader,
  Stat,
  InStat,
} from "../../styles/Lib";

const LeftDetailedAside = (props) => (
  <LeftDetailsAside>
    <LeftDetailsHeader>przyrosty</LeftDetailsHeader>
    <LeftDetailsStats>
      <Stat>
        <InStat>atak</InStat>
        <InStat>+1</InStat>
      </Stat>
      <Stat>
        <InStat>obrona</InStat>
        <InStat>+1</InStat>
      </Stat>
      <Stat>
        <InStat>sp. atak</InStat>
        <InStat>+1</InStat>
      </Stat>
      <Stat>
        <InStat>sp. obrona</InStat>
        <InStat>+1</InStat>
      </Stat>
      <Stat>
        <InStat>życie</InStat>
        <InStat>+1</InStat>
      </Stat>
    </LeftDetailsStats>
  </LeftDetailsAside>
);

export default LeftDetailedAside;
