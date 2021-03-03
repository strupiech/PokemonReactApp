import styled from "styled-components";
import asideImg from "../images/warstwa2.png";
import pokelogo from "../images/pokelogo.png";

export const AppWrapper = styled.div`
  margin: 0px;
  padding: 0px;
  color: royalblue;
`;

export const Aside = styled.div`
  background-image: url(${asideImg});
  background-size: cover;
  background-position: center;
  height: 98vh;
  width: 50vw;
  margin: 1vh 0;

  @media only screen and (max-width: 960px) {
    width: 100vw;
  }
`;

export const Menu = styled.div`
  box-sizing: border-box;
  padding: 0 2.5vw;
  position: fixed;
  height: 98vh;
  width: 960px;
  top: 1vh;
  right: 0px;

  @media only screen and (max-width: 960px) {
    width: 100vw;
  }
`;

export const MenuHeader = styled.div`
  background-image: url(${pokelogo});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 20%;
  width: 41%;
  margin: auto;
`;

export const ListWrapper = styled.div`
  width: 100%;
  margin: auto;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin: 2px auto;
  padding: 0;
  line-height: 6vh;
  background-color: #f8f8ff;
  &:hover {
    background-color: royalblue;
    cursor: pointer;
  }
`;

export const Record = styled.li`
  width: 20%;
  box-sizing: border-box;
  overflow: hidden;
  &:nth-child(1) {
    width: 10%;
  }
  &:nth-child(2) {
    background-image: url(${(props) => props.theme.bg});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 6vh;
  }
  &:nth-child(4) {
    width: 10%;
  }
  ${List}:hover & {
    &:nth-child(3) {
      color: gold;
    }
    &:nth-child(6) {
      color: gold;
    }
  }
`;

export const ListHeader = styled.ul`
  background-color: gold;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin: 0.2vh auto;
  padding: 1.5vh 0;
  line-height: 2vh;
`;

export const ItemListHeader = styled.li`
  width: 20%;
  box-sizing: border-box;
  overflow: hidden;
  text-transform: uppercase;
  font-weight: bold;
  font-style: italic;
  &:nth-child(1) {
    width: 10%;
  }
  &:nth-child(4) {
    width: 10%;
  }
`;

export const ListFooter = styled.ul`
  display: flex;
  box-sizing: border-box;
  list-style: none;
  margin: 0.2vh auto;
  padding: 1.5vh 0;
  width: 290px;
  &:hover {
    cursor: pointer;
  }
`;

export const ItemListFooter = styled.li`
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.color};
  box-sizing: border-box;
  margin: 0.2vh auto;
  padding: 10px 16px;
  text-align: center;
  font-weight: bold;
`;

ItemListFooter.defaultProps = {
  theme: {
    bg: "gold",
    color: "royalblue",
  },
};

export const reversedItemListFooter = {
  bg: "royalblue",
  color: "gold",
};

// DETAILS SITE

export const DetailsHeader = styled.div`
  box-sizing: border-box;
  background-image: url(${pokelogo});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: 30px auto 40px;
  height: 15vh;
`;

export const MiddleSectionWrapper = styled.div`
  display: flex;
  height: 60vh;
  @media only screen and (max-width: 960px) {
    display: block;
    height: auto;
  }
`;

export const LeftDetailsAside = styled.aside`
  box-sizing: border-box;
  width: 33.3vw;
  margin: auto;
  @media only screen and (max-width: 960px) {
    margin: auto;
    width: 100%;
  }
`;

export const LeftDetailsHeader = styled.ul`
  box-sizing: border-box;
  background-color: gold;
  width: 60%;
  margin: 30px auto 0;
  line-height: 50px;
  text-transform: uppercase;
  font-weight: bold;
  font-style: italic;
  padding-left: 25px;
  list-style: none;
  @media only screen and (max-width: 960px) {
    line-height: 25px;
  }
`;

export const LeftDetailsStats = styled.ul`
  width: 60%;
  margin: 0 auto 2px;
  padding: 0;
  line-height: 50px;
  text-transform: uppercase;
  @media only screen and (max-width: 960px) {
    line-height: 25px;
  }
`;

export const Stat = styled.ul`
  display: flex;
  box-sizing: border-box;
  list-style: none;
  margin: 0 auto 2px;
  padding: 0;
`;

export const InStat = styled.li`
  background-color: #f8f8ff;
  padding-left: 25px;
  width: 55%;
  &:nth-child(2) {
    margin-left: 3px;
    padding: 0;
    text-align: center;
    width: 45%;
  }
`;

export const MiddleImage = styled.div`
  box-sizing: border-box;
  background-image: url(${(props) => props.theme});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: auto;
  width: 33.3vw;
  height: 100%;
  @media only screen and (max-width: 960px) {
    height: 25vh;
    width: 100%;
    margin-top: 10px;
  }
`;
export const RightDetailsAside = styled.aside`
  box-sizing: border-box;
  margin: auto;
  width: 33.3vw;
  overflow: hidden;
  padding: 0 50px;
  text-align: justify;
  @media only screen and (max-width: 960px) {
    margin: auto;
    height: 43%;
    width: 100%;
  }
`;

export const RightDetailsText = styled.p`
  line-height: 25px;
  @media only screen and (max-width: 960px) {
    line-height: 21px;
  }
`;

export const BackButton = styled.div`
  position: fixed;
  box-sizing: border-box;
  text-align: center;
  text-transform: uppercase;
  padding: 10px;
  left: 25px;
  bottom: 25px;
  font-style: italic;
  background-color: gold;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;
export const NextButton = styled(BackButton)`
  left: auto;
  right: 25px;
`;

export const TitleFooter = styled.div`
  box-sizing: border-box;
  width: 70vw;
  margin: auto;
  text-align: center;
  text-transform: uppercase;
  margin-top: 40px;
  font-size: 50px;
  font-style: italic;
  font-weight: bold;
  @media only screen and (max-width: 960px) {
    margin: 20px auto 70px;
    font-size: 30px;
  }
`;

export const Info = styled.ul`
  list-style: none;
  padding: 0;
  line-height: 25px;
  @media only screen and (max-width: 960px) {
    line-height: 21px;
  }
`;
export const InfoItem = styled.li`
  font-weight: normal;
`;
