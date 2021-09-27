import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, Button, Modal } from "react-bootstrap";
import {
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineUser,
  AiFillDashboard,
  AiFillRead
} from "react-icons/ai";

import Gif from "../../assets/Gif.gif";
import Borboleta from "../../assets/Borboleta.png";

const Header = () => {
  const [show, setShow] = useState(false);
  const [coracao, setCoracao] = useState(false);

  const handleMarcaCoracao = () => setCoracao(true);
  const handleDesmarcaCoracao = () => setCoracao(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="pr-0 pl-0">
      <Navbar variant="dark" expand="lg" style={{ background: "#1C1C1C" }}>
        <Navbar.Brand>
          <img src={Borboleta} alt="Logo" height="45px" />
        </Navbar.Brand>
        <Navbar.Brand>Biblioteca Autoral</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Início <AiOutlineHome className="icone" />
            </Nav.Link>
            <Nav.Link as={Link} to="/Sobre">
              Sobre <AiOutlineUser className="icone" />
            </Nav.Link>
            <Nav.Link as={Link} to="/dashboard">
              Dashboard <AiFillDashboard className="icone" />
            </Nav.Link>
            <Nav.Link as={Link} to="/livros">
              Livros <AiFillRead className="icone" />
            </Nav.Link>
          </Nav>
          <Navbar.Brand>
            <img src={Gif} alt="Logo" height="45px" />
          </Navbar.Brand>
          <Button
            className="love"
            onClick={handleMarcaCoracao}
            variant="outline-info"
          >
            <AiOutlineHeart />
          </Button>
          <Modal show={coracao} onHide={handleDesmarcaCoracao}>
            <Modal.Header closeButton>
              <Modal.Title>Aviso Importante</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              A função de{" "}
              <span style={{ fontWeight: 500, color: "Blue" }}>Favoritos</span>{" "}
              ainda não foi implementada.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Ok
              </Button>
            </Modal.Footer>
          </Modal>
          <Button onClick={handleShow} variant="outline-info">
            Cadastros
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Aviso Importante</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              A função de{" "}
              <span style={{ fontWeight: 500, color: "Blue" }}>Cadastros</span>{" "}
              ainda não foi implementada.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Ok
              </Button>
            </Modal.Footer>
          </Modal>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
