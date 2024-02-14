import React from "react";
import { Container, Button, Image, Carousel } from "react-bootstrap";
import price_car from '../images/price_car.png';
import price_car1 from '../images/price_car1.png';
import price_car2 from '../images/price_car2.png';
import price_car3 from '../images/price_car3.png';
import price_car4 from '../images/price_car4.png';
import styled from "styled-components";

const Styled = styled.div`
background: linear-gradient(to right, gray, white);
transition: background 0.5s ease;

`;

const Price = () => {
return (
    <>
    <Styled>
    <Container>
        <h1>Рассчитать цену</h1>
        <Container>
            <Button>01 Марка</Button>
            <Button>02 Модель</Button>
            <Button>03 Комплектация</Button>
            <Button>04 Дизайн</Button>
            <Button>05 Цена</Button>
        </Container>
        <Container>
            <Image src={price_car} alt="price car"/>
        </Container>
    </Container>
    </Styled>
    </>
)
};

export default Price;