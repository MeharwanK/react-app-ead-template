import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import MainLogo from "../assets/images/logo.svg";
import SigninLogo from "../assets/images/signin.png";

export const Header = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" height='40'>
        <Container>
          <Navbar.Brand href="#">
            <img src={MainLogo} alt="Logo" />
          </Navbar.Brand>

          <Nav className="mx-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">How It Works</Nav.Link>
            <Nav.Link href="#">Our Chefs</Nav.Link>
            <Nav.Link href="#">Book</Nav.Link>
          </Nav>

          <Nav className="align-items-center">
            <Nav.Link href="#" className="d-flex align-items-center">
              <img src={SigninLogo} alt="Sign Up" className="me-2" /> 
              Sign Up
            </Nav.Link>
            <div className="vr mx-2" /> 
            <Nav.Link href="#">Log In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
