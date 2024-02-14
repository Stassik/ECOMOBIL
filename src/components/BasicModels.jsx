import React from "react";
import { Container, Button, Image, Row, Col } from "react-bootstrap";
import BasicModels1 from '../images/BasicModels1.png';
import BasicModels2 from '../images/BasicModels2.png';
import BasicModels3 from '../images/BasicModels3.png';
import BasicModels4 from '../images/BasicModels4.png';
import BasicModels5 from '../images/BasicModels5.png';
import styled from "styled-components";

const Styled = styled.div`
background: #1E1E1E;
color: white;

h1 {
  padding: 0 0 50px 22px;
    }
.img-car2 {
    position: relative;
    top: 69%;
    right: 344%;     
    }
    .img-car3 {
    position: relative;
    top: 2px;
    right: 341%;     
  }
  .img-car4 {
    position: relative;
    top: 69%;
    right: 685%;
  }
  .img-car5 {
    position: relative;
    top: 69%;
    right: 667%;
  }
  p {
    position: relative;
    z-index: 1;
  }

.deskr-text1 {
  top: -73px;
  left: 44px;
  font-size: 40px;
  font-weight: 400;
  width: 155%;
}
.deskr-text2 {
    top: 45%;
    right: 309%;
    font-size: 40px;
    font-weight: 400;
    width: 154%;
}
.deskr-text3 {
  top: -67px;
  right: 307%;
  font-size: 40px;
  font-weight: 400;
  width: 160%;
}
.deskr-text4 {
  top: 45%;
    right: 634%;
    font-size: 40px;
    font-weight: 400;
    width: 203%;
}
.deskr-text5 {
  top: 45%;
  right: 642%;
  font-size: 38px;
  font-weight: 400;
  width: 138%;
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

const BasicModelsCar = () => {
 return (
<>
<Styled>
<Container>
          <h1>Основные модели</h1>
        </Container>
<Container className="d-flex position-relative"  style={{padding:"0 10px 217px 40px"}}>
        <Row>
            <Col xs={6} md={4}>
              <Image src={BasicModels1} />
              <p className="deskr-text1">Lixiang i7</p>
              </Col>
        </Row>
        <Row>
            <Col xs={6} md={4}>
              <Image src={BasicModels2} className="img-car2"/>
              <p className="deskr-text2">Lixiang i9</p>
              </Col>
        </Row>
        <Row>
            <Col xs={6} md={4}>
              <Image src={BasicModels3} className="img-car3"/>
              <p className="deskr-text3">Zeekr 007</p>
              </Col>
        </Row>
        <Row>
            <Col xs={6} md={4}>
              <Image src={BasicModels4} className="img-car4"/>
              <p className="deskr-text4">HONGQI H5</p>
              </Col>
        </Row>
          <Container class="btn-group_car">
            <Button type="button" className="btn btn-secondary" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Подробнее<span style={{ marginLeft: "10px" }}>&gt;</span>
            </Button>
          </Container>
          <Row>
            <Col xs={6} md={4}>
              <Image src={BasicModels5} className="img-car5" />
              <p className="deskr-text5">Aito M5</p>
              </Col>
        </Row>
        </Container>
</Styled>
</>
 )
};
export default BasicModelsCar;