import React from 'react';
import {
    AppWrapper,
    DetailsHeader,
    MiddleSectionWrapper,
    MiddleImage,
} from "../styles/Lib";
import LeftDetailedAside from "../components/detailedPage/LeftDetailedAside";
import RightDetailedAside from "../components/detailedPage/RightDetailedAside";
import DetailsFooter from "../components/detailedPage/DetailsFooter";

function DetailedPage(props) {
    return (
        <AppWrapper>
            <DetailsHeader />
            <MiddleSectionWrapper>
                <LeftDetailedAside pokemons={props.pokemons} />
                <MiddleImage theme={props.theme} />
                <RightDetailedAside
                    pokemon={props.pokemon}
                />
            </MiddleSectionWrapper>
            <DetailsFooter
                activePokemonChange={props.activePokemonChange}
                pokemons={props.pokemons}
                activePokemon={props.activePokemon}
            />
        </AppWrapper>
    );
}

export default DetailedPage;