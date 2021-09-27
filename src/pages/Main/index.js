import React from "react";
import { Container, Carousel } from "react-bootstrap";

import Header from "../../components/Header/index";
import Cards from "../../components/Cards/index";
import Footer from "../../components/Footer/index";

import imagem1 from "../../assets/imagem1.jpg";
import imagem2 from "../../assets/imagem2.jpg";
import imagem3 from "../../assets/imagem3.jpg";

const Main = () => {
  return (
    <>
      <Header />
      <Container>
        <Carousel>
          <Carousel.Item className="Carousel" interval={1000}>
            <img className="d-block w-100" src={imagem1} alt="Primeiro Slide" />
            <Carousel.Caption
              style={{
                background: "rgba(52,58,64,0.5)",
                borderRadius: "4px",
                borderStyle: "solid",
                borderWidth: "1px"
              }}
            >
              <h3 style={{ color: "rgba(255, 255, 255, 1)" }}>Bem-Vindo(a)</h3>
              <p>
                "As palavras são umas das melhores formas de se expressar, e
                talvez ler seja a melhor forma de sentir o que lhe é expresso."
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="Carousel" interval={500}>
            <img className="d-block w-100" src={imagem2} alt="Third slide" />
            <Carousel.Caption
              style={{
                background: "rgba(52,58,64,0.5)",
                borderRadius: "4px",
                borderStyle: "solid",
                borderWidth: "1px"
              }}
            >
              <h3>Outra Dimensão</h3>
              <p>
                A leitura pode te transportar para outro universo, mundo ou
                dimensão, é incrível.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="Carousel">
            <img className="d-block w-100" src={imagem3} alt="Third slide" />
            <Carousel.Caption
              style={{
                background: "rgba(52,58,64,0.5)",
                borderRadius: "4px",
                borderStyle: "solid",
                borderWidth: "1px"
              }}
            >
              <h3>Criando um Mundo</h3>
              <p>
                Com a escrita você pode criar um novo mundo e fazer as pessoas
                te compreenderem e sonhar junto com você.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      <Cards />
      <Footer />
    </>
  );
};

export default Main;
