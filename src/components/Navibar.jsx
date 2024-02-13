import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../images/logo/logo.png";
import styled from "styled-components";

const Styled = styled.nav `
display:flex;
position: absolute;
top: 0%;
left: 16%;
// background: linear-gradient(to bottom, rgba(0, 0, 0, 0.125) 50%, transparent 100%);
// background-size: 100% 100%;
.container {
}
 .nav-link {
  color: white !important;
  margin-left: 60px
} 
`;

const Navibar = () => {
    return (
        <>
        <Styled>
        <Navbar>
            <Container>
                <Navbar.Brand >
                    <img className="logo" src={logo} alt="logo"/>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#avto">Авто</Nav.Link>
                    <Nav.Link href="#">В наличии</Nav.Link>
                    <Nav.Link href="#">Кредитные программы</Nav.Link>
                    <Nav.Link href="#">О компании</Nav.Link>
                    <Nav.Link href="#">Контакты</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </Styled>
        </>
    )
};

export default Navibar;