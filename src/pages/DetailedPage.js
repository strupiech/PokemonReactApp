import React, { useEffect } from 'react';
import {
    AppWrapper,
    DetailsHeader,
    MiddleSectionWrapper,
    MiddleImage,
} from "../styles/Lib";
import LeftDetailedAside from "../components/detailedPage/LeftDetailedAside";
import RightDetailedAside from "../components/detailedPage/RightDetailedAside";
import DetailsFooter from "../components/detailedPage/DetailsFooter";
import { fetchPokemonById } from "../fetch/pokemon.fetch"

function DetailedPage(props) {

    const [pokemon, setPokemon] = React.useState();
    const [error, setError] = React.useState("");
    const [isLoaded, setIsLoaded] = React.useState(false);

    useEffect(() => {
        const ac = new AbortController();
        fetchPokemonById(props.activePokemonId, ac)
            .then(response => response.json())
            .then(response => {
                setPokemon(response);
                setIsLoaded(true);
            }).catch(ignored => { });

        return () => ac.abort();
    });

    const renderView = () => {
        if (isLoaded) {
            return <>
                <MiddleSectionWrapper>
                    <LeftDetailedAside />
                    <MiddleImage theme={pokemon.sprites.front_default} />
                    <RightDetailedAside
                        pokemon={pokemon}
                    />
                </MiddleSectionWrapper>
                <DetailsFooter
                    activePokemonChange={props.activePokemonChange}
                    pokemon={pokemon}
                    activePokemonId={props.activePokemonId}
                    changePage={props.changePage}
                />
            </>
        }
    }

    return (
        <AppWrapper>
            <DetailsHeader />
            {renderView()}
        </AppWrapper>
    );
}

export default DetailedPage;