import React from "react";
import { Container, Button, Image } from "react-bootstrap";
import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.css";
import price_car from '../images/price_car.png';
import price_car1 from '../images/price_car1.png';
import price_car2 from '../images/price_car2.png';
import price_car3 from '../images/price_car3.png';
import price_car4 from '../images/price_car4.png';
import styled from "styled-components";

const Styled = styled.div`
background: linear-gradient(to right, gray, white);
width: 1471px;
height: 730px;
.price-container {
    position: relative;
    top: 5rem;
    left: 6rem 
}
h1 {
    font-size: 40px;
    font-weight: 400;
    padding: 0px 14px 40px;
    color: black;
}
.container_btn {
    display: flex;
    flex-direction: column;
}
span {
    font-weight: bold;
    font-size: 25px;
}
.carousel_btn {
    // padding: 1rem 0 0 0;
}
.price_car {
    position: relative;
    top: -32rem;
    left: 28rem;
}
.btn {
    text-align: left;
    width: 270px;
    height: 53px;
    margin-bottom: 12px;
    background: #8f8e8e00 !important;
    transition: background 0.3s;
    border: 1px solid rgb(165 165 165);
    color: black;
    font-size: 20px;
}
.btn:active {
    background-image: linear-gradient(to right, gray, black) !important;
    color: white;
}
.btn:disabled {
    background-image: none;
    cursor: not-allowed;
}
.container_carousel {
    display: flex;
    justify-content: center;
    position: relative;
    bottom: 34rem;
}
.card_item1 {
    position: relative;
    right: 337px;
}
.card_item2 {
    position: relative;
    bottom: 194px;
    left: -131px
}
.card_item3 {
    position: relative;
    left: 61px;
    bottom: 373px
}
.card_item4 {
    position: relative;
    bottom: 552px;
    left: 254px;
}
.carousel-inner {
    overflow: unset !important;
}
`;

const Price = () => {
    return (
        <>
            <Styled>
                <Container>
                    <div className="price-container">
                        <h1>Рассчитать цену</h1>
                        <div className="container_btn">
                            <Button><span>01</span> Марка</Button>
                            <Button><span>02</span> Модель</Button>
                            <Button><span>03</span> Комплектация</Button>
                            <Button><span>04</span> Дизайн</Button>
                            <Button><span>05</span> Цена</Button>
                        </div>
                        <Image src={price_car} alt="price car" className="price_car" />
                        <div className="container_carousel">
                            <div className="f-carousel" id="myCarousel">
                                <div className="f-carousel__viewport">
                                    <div className="f-carousel__track">
                                        <div className="f-carousel__slide">
                                            <Image src={price_car1} alt="Voyah" className="card_item1" />
                                        </div>
                                        <div className="f-carousel__slide">
                                            <Image src={price_car2} alt="Zeekr" className="card_item2" />
                                        </div>
                                        <div className="f-carousel__slide">
                                            <Image src={price_car3} alt="Li" className="card_item3" />
                                        </div>
                                        <div className="f-carousel__slide">
                                            <Image src={price_car4} alt="Hongqi" className="card_item4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Styled>
        </>
    )
};

export default Price;