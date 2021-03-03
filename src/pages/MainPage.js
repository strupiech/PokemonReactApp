import React from 'react';
import {
    AppWrapper,
    Aside,
    Menu,
    MenuHeader,
} from "../styles/Lib";
import Nav from "../components/mainPage/Nav";

function MainPage(props) {
    return (
        <AppWrapper>
            <Aside />
            <Menu>
                <MenuHeader />
                <Nav
                    pokemons={props.pokemons}
                    attribute={props.attribute}
                    pagenumbers={props.pagenumbers}
                    changePage={props.changePage}
                    activePokemonChange={props.activePokemonChange}
                />
            </Menu>
        </AppWrapper>
    );
}

export default MainPage;