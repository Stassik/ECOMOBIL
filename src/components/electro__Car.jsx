import React from "react";
import { Container, Button, Image } from "react-bootstrap";
import styled from "styled-components";
import Seetting from '../images/logo/Setting.png';
import img_car from '../images/img_car.png';

const Styled = styled.div`
color: #FFFFFF;
.container-img {
    display: flex;
    justify-content: center;
    align-items: center; 
}
.img__car {
    height: 100%;
    width: auto;
}
.container_btn {
    position: relative;
    bottom: 46rem;
    left: -2rem;
}
.content {
    padding: 60px 0 50px 0;
    z-index: 1;
    display flex;
    position: absolute;

}
.btn {
    position: relative;
    border: none;
    // display: block;
    font-size: 40px;
    font-weight: 400;
    line-height: 25px;
    height: 107px;
    min-width: 720px;
    border-radius: 10px;
    background-color: transparent !important;
}
.btn:active {
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
    height: 107px;
    min-width: 720px;
    stroke-dasharray: 400;
}
.setting {
    position: relative;
    left: 23rem;
}

.posts {
    position: relative;
    display: flex;
    flex-direction: column;
}
.posts1 {
    position: relative;
    bottom: 42rem;
    left: 7rem;

}
.posts2 {
    bottom: 50rem;
    left: 34rem;
position: relative;
}
.posts3 {
position: relative;
bottom: 45rem;
left: 6rem;
}

.text-title1 {
    font-weight: bold;
    width: 1%;
}
.text-title2 {
    font-weight: bold;
}

.text-title3 {
font-weight: bold;
width: 46%;
}
p {
    font-size: 20px;
}
`;

const ElectroCar = () => {
    return (
        <>
            <Styled>
                <Container>
                    <div className="container-img">
                        <Image src={img_car} className="img__car" />
                    </div>
                    <div className="content">
                        <div className="container_btn">
                            <Button>
                                <svg>
                                    <linearGradient id="linear-gradient"> <stop offset="0%" stop-color="rgba(255, 255, 255, 0)" /> <stop offset="100%" stop-color="rgba(255, 255, 255, 1)" /> </linearGradient> <rect stroke="url(#linear-gradient)" rx="10px" ry="10px" />
                                </svg>Почему электрокары ?</Button>
                            <Image src={Seetting} alt="setting" className="setting" />
                        </div>

                        <div className="posts">
                            <div className="posts1">
                                <h2 className="text-title1">Экологическая дружественность</h2>
                                <p style={{ width: "27%" }}>Предоставление современных и экологически чистых решений в области транспорта</p>

                            </div>
                            <div className="posts2">
                                <h2 className="text-title2">Экономия ресурсов</h2>
                                <p style={{ width: "46%" }}>Электро-и гибридные автомобили — шаг в будущее и выгодное вложение в собственные финансы благодаря экономии на топливе и обслуживании</p>
                            </div>
                            <div className="posts3">
                                <h2 className="text-title3">Эколого-экономическая эффективность</h2>
                                <p style={{ width: "78%" }}>Мы стремимся снизить воздействие на окружающую среду, предлагая клиентам электромобили, которые работают на чистой энергии. Наш выбор транспортных средств способствует уменьшению выбросов вредных веществ и содействует сохранению природы</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Styled>
        </>
    )
};

export default ElectroCar;