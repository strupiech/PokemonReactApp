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
    const [activePokemonId, setActivePokemonId] = React.useState(1);

    useEffect(() => {
        fetchPokemonById(props.activePokemonId)
            .then(response => response.json())
            .then(response => {
                setPokemon(response);
                setIsLoaded(true);
            }),
            (error) => {
                setError(error);
                setIsLoaded(true);
            };
    }, []);

    const handleActivePokemonChange = (id) => {
        props.activePokemonChange(id);
        setActivePokemonId(id);
    };

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
                    activePokemonChange={handleActivePokemonChange}
                    pokemon={pokemon}
                    activePokemonId={props.activePokemonId}
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