import React from "react";
import { Container } from "react-bootstrap";
import main_car from '../images/main_car.png';
import styled from "styled-components";
import Card_1 from '../images/Card _1.png';
import Card_2 from '../images/Card _2.png';
import Card_3 from '../images/Card _3.png';
import Exterior from "./Exterior.jsx";
import Choice from '../components/Choice.jsx';


const Styled = styled.div`
background: #181818;
.container {
    display: flex;
.card_01 {
    width: 390px;
    height: 366px;
    position: relative;
    top: 140px;
}
.card_02 {
    width: 386px;
    height: 435px;
    position: relative;
    top: 220px;
}
.card_03 {
    width: 512px;
    height: 430px;
    position: relative;
    top: 306px
}
}
`;
const Home = () => {
return (
    <>
    <Styled>
    <Container style={{maxWidth: "1440px"}}>
        <img src={main_car}/>
        </Container>
   <Container style={{paddingBottom: "26%"}}>
        <img className="card_01" src={Card_1} alt="Card_1"/>
        <img className="card_02" src={Card_2} alt="Card_2" />
        <img className="card_03"src={Card_3}alt="Card_3" />
    </Container>
    </Styled>
    <Exterior />
    <Choice />
    </>
)
};

export default Home;