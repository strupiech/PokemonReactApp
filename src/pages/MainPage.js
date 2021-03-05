import React from 'react';
import {
    AppWrapper,
    Aside,
    Menu,
    MenuHeader,
} from "../styles/Lib";
import Nav from "../components/mainPage/Nav";
import { useHistory } from 'react-router-dom';

function MainPage(props) {
    let history = useHistory();

    const handleShowDetails = () => {
        history.push("/details");
    }
    return (
        <AppWrapper>
            <Aside />
            <Menu>
                <MenuHeader />
                <Nav
                    pokemons={props.pokemons}
                    pagenumbers={props.pagenumbers}
                    changePage={props.changePage}
                    activePokemonChange={props.activePokemonChange}
                    handleShowDetails={handleShowDetails}
                />
            </Menu>
        </AppWrapper>
    );
}

export default MainPage;