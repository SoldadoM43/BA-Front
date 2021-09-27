import React from "react";
import { Link } from "react-router-dom";
import { Container, CardDeck, Card, Button } from "react-bootstrap";

import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";

import c1 from "../../assets/c1.jpg";
import c2 from "../../assets/c2.jpg";
import c3 from "../../assets/c3.jpg";
import c4 from "../../assets/c4.jpg";
import c5 from "../../assets/c5.jpg";
import c6 from "../../assets/c6.jpg";

const Menu = () => {
  return (
    <>
      <Header />
      <p class="P">Espassamento</p>
      <Container>
        <CardDeck>
          <Card className="cardContainer">
            <Card.Img variant="top" src={c1} height="222px" />
            <Card.Body>
              <Button className="buttonLivros" as={Link} to="/livros/livro1">
                Ler
              </Button>
            </Card.Body>
          </Card>
          <Card className="cardContainer">
            <Card.Img variant="top" src={c2} height="222px" />
            <Card.Body>
              <Button className="buttonLivros" as={Link} to="/livros/livro2">
                Ler
              </Button>
            </Card.Body>
          </Card>
          <Card className="cardContainer">
            <Card.Img variant="top" src={c3} height="222px" />
            <Card.Body>
              <Button className="buttonLivros" as={Link} to="/livros/livro3">
                Ler
              </Button>
            </Card.Body>
          </Card>
          <Card className="cardContainer">
            <Card.Img variant="top" src={c4} height="222px" />
            <Card.Body>
              <Button className="buttonLivros" as={Link} to="/livros/livro4">
                Ler
              </Button>
            </Card.Body>
          </Card>
          <Card className="cardContainer">
            <Card.Img variant="top" src={c6} height="222px" />
            <Card.Body>
              <Button className="buttonLivros" as={Link} to="/livros/livro5">
                Ler
              </Button>
            </Card.Body>
          </Card>
          <Card className="cardContainer">
            <Card.Img variant="top" src={c5} height="222px" />
            <Card.Body>
              <Button className="buttonLivros" as={Link} to="/livros/livro6">
                Ler
              </Button>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
      <p class="P">Espassamento</p>
      <Footer />
    </>
  );
};

export default Menu;
