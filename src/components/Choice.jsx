import React from "react";
import { Container, Button, Row, Col, Image } from "react-bootstrap";
import choice_car1 from '../images/choice_car1.png';
import choice_car2 from '../images/choice_car2.png';
import choice_car3 from '../images/choice_car3.png';
import styled from "styled-components";
import ChoiceCar from "./Choice__car.jsx";

export const Styled = styled.div`
background: #1E1E1E;
h1 {
    color: #FFFFFF;
    padding-bottom: 20px;
    padding-top: 50px;
    }
    .descr-img_black {
        color: black;
        position: absolute;
        bottom: 20px;
        left: 50px;
        font-size: 42px;
        font-weight: 500;
    }
    .descr-img_white {
        position: relative;
        top: 12%;
        right: 103%;
        font-size: 42px;
        font-weight: 400;
  }
  .img_car2 {
  position: relative;
  top: 135px;
  right: 152px;     
    }
  .img_car3 {
  position: relative;
  top: 135px;
  right: 156px;     
}
.btn-group_car {
  display: flex;
  position relative;
}
.btn {
position: absolute;
top: 16px;
right: 170px;
width: 270px;
height: 51px;
font-size: 20px;
border: 0.5px solid #ffffff0f;
background-color: rgb(255 255 255 / 0%)!important;
border-right: 1px solid white;
border-bottom: 1px solid rgb(253 264 277 / 21%);
border-top: 1px solid rgb(253 264 277 / 21%);
border-radius: 10px !important;
}
.btn:active {
 border: 1px solid white;
  color: white!;
}

}
`;


const Choice = () => {
  return (
    <>
      <Styled>
        <Container>
          <h1>Выбор <span style={{ textTransform: "uppercase", fontWeight: "bold" }}>ecomobil</span></h1>
        </Container>
        <Container className="d-flex position-relative">
        <Row>
            <Col xs={6} md={4}>
              <Image src={choice_car1} />
              <span className="descr-img_black">Voyah Free DNA</span>
              </Col>
        </Row>
          <Container class="btn-group_car">
            <span style={{ color: "white", fontSize: "40px" }}>Voyah</span>
            <Button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Все модели<span style={{ marginLeft: "10px" }}>&gt;</span>
            </Button>
          </Container>
          <Row>
            <Col xs={6} md={4}>
              <Image src={choice_car2} className="img_car2" />
              <span style={{ color: "white" }} className="descr-img_white">Zhuiguang</span>
              </Col>
        </Row>
        <Row>
            <Col xs={6} md={4}>
              <Image src={choice_car3} className="img_car3" />
              <span style={{ color: "white" }} className="descr-img_white">Dreamer</span>
              </Col>
        </Row>
        </Container>
      </Styled>
      <ChoiceCar />
    </>
  )
};

export default Choice;