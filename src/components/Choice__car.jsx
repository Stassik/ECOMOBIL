import React from "react";
import { Container, Button, Row, Col, Image } from "react-bootstrap";
import choice_car4 from '../images/choice_car4.png';
import choice_car5 from '../images/choice_car5.png';
import choice_car6 from '../images/choice_car6.png';
import styled from "styled-components";


const Styled = styled.div`
background: #1E1E1E;
.descr-img_black {
    color: black;
    position: absolute;
    bottom: 80px;
    left: 53px;
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
.img_car5 {
    position: relative;
    top: 30%;
    right: 156px;     
      }
    .img_car6 {
    position: relative;
    top: 30%;
    right: 117%;     
  }
  .btn-group_car {
    display: flex;
    position relative;
  }
  .btn {
  position: absolute;
  top: 68px;
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
const ChoiceCar = () => {
return (
    <>
    <Styled>
    <Container className="d-flex position-relative" style={{padding: "60px 12px"}}>
        <Row>
            <Col xs={6} md={4}>
              <Image src={choice_car4} />
              <span className="descr-img_black">Zeekr X</span>
              </Col>
        </Row>
          <Container class="btn-group_car">
            <span style={{ color: "white", fontSize: "40px" }}>Zeekr</span>
            <Button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Все модели<span style={{ marginLeft: "10px" }}>&gt;</span>
            </Button>
          </Container>
          <Row>
            <Col xs={6} md={4}>
              <Image src={choice_car5} className="img_car5" />
              <span style={{ color: "white" }} className="descr-img_white">001</span>
              </Col>
        </Row>
        <Row>
            <Col xs={6} md={4}>
              <Image src={choice_car6} className="img_car6" />
              <span style={{ color: "white" }} className="descr-img_white">009</span>
              </Col>
        </Row>
        </Container>
        </Styled>
    </>
)
};

export default ChoiceCar;