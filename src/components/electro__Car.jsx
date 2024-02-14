import React from "react";
import { Container, Button, Image } from "react-bootstrap";
import styled from "styled-components";
import Seetting from '../images/logo/Setting.png';
import img_car from '../images/img_car.png';

const Styled = styled.div`
display: flex;
.img__car {
    position: absolute;
    left: 0;
    width: 127%;
}
.electrocarClass {
    padding: 60px 0 50px 0;
    z-index: 1;
    display flex;

}
.btn {
    position: relative;
    top: 0;
    left: -67px;
    font-size: 40px;
    height: 107px;
    width: 720px;
    border-radius: 28px;
    background-color: transparent !important;
    border-left: transparent;
}
.btn:active {
    border: 1px solid white;
}
.setting {
    position: relative;
    top: -37%;
    left: 150%;
}
.posts1 {
    z-index: 1;
    color: #FFFFFF;
    position: relative;
    top: 251px;
    right: 640px;

}
.posts2 {
z-index: 1;
color: #FFFFFF;
bottom: 168px;
left: 416px;
position: relative;
}
.posts3 {
z-index: 1;
color: #FFFFFF;
position: relative;
top: 524px;
right: 944px;
}
.text-title {
    font-weight: bold;
    width: 127%;
}
.text-title_1 {
font-weight: bold;
width: 262%;
}
p {
    font-size: 20px;
}
`;

const ElectroCar = () => {
return (
    <>
    <Styled>
    <Container style={{paddingBottom: "90px"}}>
        <Image src={img_car} className="img__car" />
    </Container>
    <Container className="electrocarClass">
    <Button variant="secondary">Почему электрокары?</Button>
    <Image src={Seetting} alt="setting" className="setting"/>
    </Container>
    <Container className="posts1">
        <h2 className="text-title">Экологическая дружественность</h2>
        <p style={{ width: "110%", padding: "20px 0 0 0"}}>Предоставление современных и экологически чистых решений в области транспорта</p>
        <Container className="posts2">
        <h2 className="text-title">Экономия ресурсов</h2>
        <p style={{width: "251%"}}>Электро-и гибридные автомобили — шаг в будущее и выгодное вложение в собственные финансы благодаря экономии на топливе и обслуживании</p>
        </Container>
    </Container>
    <Container className="posts3">
        <h2 className="text-title_1">Эколого-экономическая эффективность</h2>
        <p style={{width: "446%"}}>Мы стремимся снизить воздействие на окружающую среду, предлагая клиентам электромобили, которые работают на чистой энергии. Наш выбор транспортных средств способствует уменьшению выбросов вредных веществ и содействует сохранению природы</p>
    </Container>

   
    </Styled>
    </>
)
};

export default ElectroCar;