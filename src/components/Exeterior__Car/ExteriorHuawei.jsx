import React from "react";
import { Container, Button, Row, Col, Image } from "react-bootstrap";
import exterior_Huawei1 from "..//../images/exterior_Huawei1.png";
import exterior_Huawei2 from "..//../images/exterior_Huawei2.png";
import exterior_Huawei3 from "..//../images/exterior_Huawei3.png";
import exterior_Huawei4 from "..//../images/exterior_Huawei4.png";
import { Styled } from '../Exeterior__Car/ExteriorZeekr.jsx';

const ExteriorHuawei = () => {
    return (
<Styled>
    <Container>
       <h1>Экстерьер</h1>
       <Container style={{display: "flex"}}>
        <Button>Huawei Aito M9</Button> 
       </Container>
       <Container style={{display: "flex"}}>
        <Row>
            <Col>
                <Image className="img_car1" src={exterior_Huawei1} />
            </Col>
        </Row>
        <Row>
            <Col>
                <Image className="img_car2" src={exterior_Huawei2} />
            </Col>
        </Row>
        <Row>
            <Col>
                <Image className="img_car3" src={exterior_Huawei3} />
            </Col>
        </Row>
        <Row>
            <Col>
                <Image className="img_car4" src={exterior_Huawei4} />
            </Col>
        </Row>
       </Container> 
    </Container>
    </Styled>
    )
};

export default ExteriorHuawei;