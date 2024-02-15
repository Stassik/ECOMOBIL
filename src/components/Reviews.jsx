import React from "react";
import { Container, Button, Image } from "react-bootstrap";
import styled from "styled-components";

const Styled = styled.div`
   width: 1471px;
   height: 730px;
    background-color: rgb(24, 24, 24);
    background-image: url('../images/logo/ground_logo.png');
    background-size: 50%;
    background-position: right -25%;
    background-repeat: no-repeat;
.content {
}
.btn {
    position: relative;
    border: none;
    // display: block;
    font-size: 40px;
    font-weight: 400;
    line-height: 25px;
    height: 51px;
    min-width: 173px;
    border-radius: 10px;
    background-color: transparent !important;
}
.btn:hover {
border: 1px solid white !important;
}
.btn svg {
    position: absolute;
    top: 0;
    left: 0; 
}
.btn svg rect {
    fill: transparent;
    stroke-width: 1.5px;
    height: 51px;
    min-width: 173px;
    stroke-dasharray: 400;
}
.content_block1 {
    width:
}
`
const Reviews = () => {
    return (
        <>
            <Styled>
                <Container>
                    <div className="content">
                        <h1 className="content_title">Отзывы</h1>
                        <div className="content_block">
                            <div className="content_title">
                            <span>Имя</span>
                            </div>
                            <div className="content_block1">
                                <p>Прежде всего, разбавленное изрядной долей эмпатии, рациональное мышление представляет собой интересный эксперимент проверки глубокомысленных рассуждений.</p>
                            </div>
                            <div className="content_title">
                            <span>Имя</span>
                            </div>
                            <div className="content_block2">
                                <p>Прежде всего, разбавленное изрядной долей эмпатии, рациональное мышление представляет собой интересный эксперимент проверки глубокомысленных рассуждений.</p>
                            </div>
                            <div className="content_title">
                            <span>Имя</span>
                            </div>
                            <div className="content_block3">
                                <p>Прежде всего, разбавленное изрядной долей эмпатии, рациональное мышление представляет собой интересный эксперимент проверки глубокомысленных рассуждений.</p>
                            </div>
                            <div className="container_btn">
                                <Button>
                                    <svg>
                                        <linearGradient id="linear-gradient"> <stop offset="0%" stop-color="rgba(255, 255, 255, 0)" /> <stop offset="100%" stop-color="rgba(255, 255, 255, 1)" /> </linearGradient> <rect stroke="url(#linear-gradient)" rx="10px" ry="10px" />
                                    </svg>Ещё</Button>
                            </div>
                        </div>
                    </div>

                </Container>

            </Styled>
        </>
    )
};

export default Reviews;