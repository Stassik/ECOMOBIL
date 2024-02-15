import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../images/logo/logo.png";
import styled from "styled-components";

const Styled = styled.div `
display:flex;
 padding-top: 20px;
 padding-bottom: 20px;
 background: linear-gradient(to bottom, rgb(0 0 0 / 31%) 50%, transparent 100%);
 background-size: 100% 100%;
}
.header {
position: absolute;
top: 0%;
left: 0%;
z-index: 1;
}
 .nav-link {
  color: white !important;
  margin-left: 60px
} 
.navbar>.container {
    justify-content: center !important;
}
`;

const Navibar = () => {
    return (
        <>
         <header className="header" style={{width: "100%"}}>
         <Styled>
            <Container>
        <Navbar>
            <Container>
                <Navbar.Brand>
                    <img className="logo" src={logo} alt="logo"/>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#avto">Авто</Nav.Link>
                    <Nav.Link href="#">О компании</Nav.Link>
                    <Nav.Link href="#">Контакты</Nav.Link>
                    <Nav.Link href="#">Статьи</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </Container>
        </Styled>
        </header>
        </>
    )
};

export default Navibar;