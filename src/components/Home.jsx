import React from "react";
import { Container, Image } from "react-bootstrap";
import main_car from '../images/main_car.png';
import styled from "styled-components";
import Card_1 from '../images/Card _1.png';
import Card_2 from '../images/Card _2.png';
import Card_3 from '../images/Card _3.png';
import ExteriorTab from "./Exeterior__Car/ExteriorTab.jsx";
import Choice from '../components/Choice.jsx';
import ElectroCar from "./electro__Car.jsx";
import Price from "./Price.jsx";
import Reviews from "./Reviews.jsx";

const Styled = styled.div`
background: #181818;
.main-container {
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center; 
    }
    .main__car {
        height: 100%;
        width: auto;
    }
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
    top: 306px;
}
}
`;
const Home = () => {
return (
    <>
    <Styled>
    <div className="main-container">
        <Image className="main__car" src={main_car}/>
        </div>
   <Container style={{paddingBottom: "26%"}}>
        <Image className="card_01" src={Card_1} alt="Card_1"/>
        <Image className="card_02" src={Card_2} alt="Card_2" />
        <Image className="card_03"src={Card_3}alt="Card_3" />
    </Container>
    </Styled>
    <ExteriorTab />
    <Choice />
    <ElectroCar />
    <Price />
    {/* <Reviews /> */}
    </>
)
};

export default Home;