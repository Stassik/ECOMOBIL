import React from "react";
import { Container, Button, Row, Col, Image } from "react-bootstrap";
import exterior_car1 from "../images/exterior_car1.png";
import exterior_car2 from "../images/exterior_car2.png";
import exterior_car3 from "../images/exterior_car3.png";
import exterior_car4 from "../images/exterior_car4.png";
import Interior from '../components/Interior.jsx';
import styled from "styled-components";

export const Styled = styled.div`
background: linear-gradient(to right, gray, white);
transition: background 0.5s ease;
h1 {
    color: #FFFFFF;
    padding-bottom: 20px;
    padding-top: 50px;
}
.btn {
    width: 25%;
    margin-right: 10px;
    margin-bottom: 30px;
    background: #8f8e8e00 !important;
    transition: background 0.3s;
    border: 1px solid rgb(165 165 165);
    color: black;
}
.btn:active {
    background-image: linear-gradient(to right, gray, black) !important;
    color: white;
}
.btn:disabled {
    background-image: none;
    cursor: not-allowed;
}
.img_car3 {
    position: relative;
    top: 261px;
    right: 166%;
}
.img_car4 {
    position: relative;
    top: 262px;
    right: 252%;
 }
}
`;

const Exterior = () => {
return (
    <>
    <Styled>
    <Container>
       <h1>Экстерьер</h1>
       <Container style={{display: "flex"}}>
        <Button>Zeekr 007</Button>
        <Button>Lotus Eletre</Button>
        <Button>Huawei Aito M9</Button>
       </Container>
       <Container style={{display: "flex"}}>
        <Row>
            <Col>
                <Image className="img_car1" src={exterior_car1} />
            </Col>
        </Row>
        <Row>
            <Col>
                <Image className="img_car2" src={exterior_car2} />
            </Col>
        </Row>
        <Row>
            <Col>
                <Image className="img_car3" src={exterior_car3} />
            </Col>
        </Row>
        <Row>
            <Col>
                <Image className="img_car4" src={exterior_car4} />
            </Col>
        </Row>
       </Container>

    </Container>
    </Styled>
    <Interior />
    </>
)
};

export default Exterior;