import React from "react";
import { Container, Button, Image, Row, Col } from "react-bootstrap";
import Exclusive_Car1 from '../images/Exclusive_Car1.png';
import Exclusive_Car1_1 from '../images/Exclusive_Car1_1.png';
import Exclusive_Car2 from '../images/Exclusive_Car2.png';
import Exclusive_Car2_1 from '../images/Exclusive_Car2_1.png';
import styled from "styled-components";

const Styled = styled.div`
background: #1E1E1E;
color: white;
h1 {
   padding: 0 0 50px 22px;
    }
    .text-img1 {
        position: relative;
        top: 57%;
        right: 333%;
    }
    .text-img_1 {
        position: relative;
        top: 13px;
       left: 1px 
    }
    .text-img2 {
        position: relative;
        top: 57%;
        right: 424%;
    }
    .text-img3 {
    position: relative;
    top: 57%;
    right: 663%;
    }
    p {
        position: relative;
        z-index: 1;
    }

    .deskr-text1 {
        bottom: 132px;
        left: 44px;
        font-size: 30px;
        font-weight: 400;
        width: 161%;
    }
    .deskr-text2 {
        top: 32%;
        right: 386%;
        font-size: 30px;
        font-weight: 400;
        width: 111%;
    }
.btn-group_car {
    display: flex;
    position relative;
  }
  .btn {
  position: absolute;
  top: 49px;
  right: 137px;
  width: 270px;
  height: 51px;
  font-size: 20px;
  border: 0.5px solid #ffffff0f;
  background-color: rgb(255 255 255 / 0%)!important;
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
const ExclusiveModels = () => {
return (
    <>
    <Styled>
    <Container>
          <h1>Эксклюзивно в <span style={{ textTransform: "uppercase", fontWeight: "bold" }}>ecomobil</span></h1>
        </Container>
        <Container className="d-flex position-relative" style={{padding:"0 10px 217px 40px"}}>
        <Row>
            <Col xs={6} md={4}>
              <Image src={Exclusive_Car1} className="text-img_1"/>
              <p className="deskr-text1">HONGQI E-HS9</p>
              </Col>
        </Row>
        <Row>
            <Col xs={6} md={4}>
              <Image src={Exclusive_Car1_1} className="text-img1"/>
              </Col>
        </Row>
          <Container class="btn-group_car">
            <Button type="button" className="btn btn-secondary" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Подробнее<span style={{ marginLeft: "10px" }}>&gt;</span>
            </Button>
          </Container>
          <Row>
            <Col xs={6} md={4}>
              <Image src={Exclusive_Car2} className="text-img2" />
              <p className="deskr-text2">TANK 500</p>
              </Col>
        </Row>
        <Row>
            <Col xs={6} md={4}>
              <Image src={Exclusive_Car2_1} className="text-img3" />
              </Col>
        </Row>
        </Container>
    </Styled>
    </>
)
};
export default ExclusiveModels;