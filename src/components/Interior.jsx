import React from "react";
import { Container, Button, Row, Col, Image } from "react-bootstrap";
import interior_car1 from "../images/interior_car1.png";
import interior_car2 from "../images/interior_car2.png";
import interior_car3 from "../images/interior_car3.png";
import interior_car4 from "../images/interior_car4.png";
import { Styled } from "../components/Exterior";


const Interior = () => {
return (
<>
<Styled>
    <Container style={{ paddingBottom: "70px"}}>
        
    <h1>Интерьер</h1>
    <Container style={{display: "flex"}}>
        <Button>Zeekr 007</Button>
        <Button>Lotus Eletre</Button>
        <Button>Huawei Aito M9</Button>
       </Container>
       <Container style={{display: "flex"}}>
        <Row>
            <Col>
                <Image className="img_car1" src={interior_car1} />
            </Col>
        </Row>
        <Row>
            <Col>
                <Image className="img_car2" src={interior_car2} />
            </Col>
        </Row>
        <Row>
            <Col>
                <Image className="img_car3" src={interior_car3} />
            </Col>
        </Row>
        <Row>
            <Col>
                <Image className="img_car4" src={interior_car4} />
            </Col>
        </Row>
       </Container>

    </Container>
</Styled>
</>
)
};

export default Interior;