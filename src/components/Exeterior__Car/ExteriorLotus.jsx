import React from "react";
import { Container, Button, Row, Col, Image } from "react-bootstrap";
import exterior_Lotus1 from "..//../images/exterior_Lotus1.png";
import exterior_Lotus2 from "..//../images/exterior_Lotus2.png";
import exterior_Lotus3 from "..//../images/exterior_Lotus3.png";
import exterior_Lotus4 from "..//../images/exterior_Lotus4.png";
import { Styled } from '../Exeterior__Car/ExteriorZeekr.jsx';

const ExteriorLotus = () => {

return (
<>
<Styled>
    <Container>
       <h1>Экстерьер</h1>
       <Container style={{display: "flex"}}>
        <Button>Lotus Eletre</Button>
        {/* <Button>Huawei Aito M9</Button>  */}
       </Container>
       <Container style={{display: "flex"}}>
        <Row>
            <Col>
                <Image className="img_car1" src={exterior_Lotus1} />
            </Col>
        </Row>
        <Row>
            <Col>
                <Image className="img_car2" src={exterior_Lotus2} />
            </Col>
        </Row>
        <Row>
            <Col>
                <Image className="img_car3" src={exterior_Lotus3} />
            </Col>
        </Row>
        <Row>
            <Col>
                <Image className="img_car4" src={exterior_Lotus4} />
            </Col>
        </Row>
       </Container> 
    </Container>
    </Styled>
</>
)
};

export default ExteriorLotus;