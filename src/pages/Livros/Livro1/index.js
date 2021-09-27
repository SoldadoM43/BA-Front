import React from "react";
import { Container, Carousel } from "react-bootstrap";

import Header from "../../../components/Header/index";
import Footer from "../../../components/Footer/index";

import L1P1 from "../../../assets/L1P1.jpg";
import L1P2 from "../../../assets/L1P2.jpg";
import L1P3 from "../../../assets/L1P3.jpg";
import L1P4 from "../../../assets/L1P4.jpg";
import L1P5 from "../../../assets/L1P5.jpg";
import L1P6 from "../../../assets/L1P6.jpg";
import L1P7 from "../../../assets/L1P7.jpg";
import L1P8 from "../../../assets/L1P8.jpg";
import L1P9 from "../../../assets/L1P9.jpg";
import L1P10 from "../../../assets/L1P10.jpg";
import L1P11 from "../../../assets/L1P11.jpg";
import L1P12 from "../../../assets/L1P12.jpg";
import L1P13 from "../../../assets/L1P13.jpg";
import L1P14 from "../../../assets/L1P14.jpg";
import L1P15 from "../../../assets/L1P15.jpg";
import L1P16 from "../../../assets/L1P16.jpg";
import L1P17 from "../../../assets/L1P17.jpg";
import L1P18 from "../../../assets/L1P18.jpg";
import L1P19 from "../../../assets/L1P19.jpg";

const Livro1 = () => {
  return (
    <>
      <Header />
      <p class="P">Espassamento</p>
      <Container fluid class="CTN">
        <Carousel className="mr-auto ml-auto" class="CTN">
          <Carousel.Item class="CTN">
            <img className="d-block" src={L1P1} alt="Poema" />
          </Carousel.Item>
          <Carousel.Item class="CTN">
            <img className="d-block" src={L1P2} alt="Poema" />
          </Carousel.Item>
          <Carousel.Item class="CTN">
            <img className="d-block" src={L1P3} alt="Poema" />
          </Carousel.Item>
          <Carousel.Item class="CTN">
            <img className="d-block" src={L1P4} alt="Poema" />
          </Carousel.Item>
          <Carousel.Item class="CTN">
            <img className="d-block" src={L1P5} alt="Poema" />
          </Carousel.Item>
          <Carousel.Item class="CTN">
            <img className="d-block" src={L1P6} alt="Poema" />
          </Carousel.Item>
          <Carousel.Item class="CTN">
            <img className="d-block" src={L1P7} alt="Poema" />
          </Carousel.Item>
          <Carousel.Item class="CTN">
            <img className="d-block" src={L1P8} alt="Poema" />
          </Carousel.Item>
          <Carousel.Item class="CTN">
            <img className="d-block" src={L1P9} alt="Poema" />
          </Carousel.Item>
          <Carousel.Item class="CTN">
            <img className="d-block" src={L1P10} alt="Poema" />
          </Carousel.Item>
          <Carousel.Item class="CTN">
            <img className="d-block" src={L1P11} alt="Poema" />
          </Carousel.Item>
          <Carousel.Item class="CTN">
            <img className="d-block" src={L1P12} alt="Poema" />
          </Carousel.Item>
          <Carousel.Item class="CTN">
            <img className="d-block" src={L1P13} alt="Poema" />
          </Carousel.Item>
          <Carousel.Item class="CTN">
            <img className="d-block" src={L1P14} alt="Poema" />
          </Carousel.Item>
          <Carousel.Item class="CTN">
            <img className="d-block" src={L1P15} alt="Poema" />
          </Carousel.Item>
          <Carousel.Item class="CTN">
            <img className="d-block" src={L1P16} alt="Poema" />
          </Carousel.Item>
          <Carousel.Item class="CTN">
            <img className="d-block" src={L1P17} alt="Poema" />
          </Carousel.Item>
          <Carousel.Item class="CTN">
            <img className="d-block" src={L1P18} alt="Poema" />
          </Carousel.Item>
          <Carousel.Item class="CTN">
            <img className="d-block" src={L1P19} alt="Poema" />
          </Carousel.Item>
        </Carousel>
      </Container>
      <p class="P">Espassamento</p>
      <Footer />
    </>
  );
};

export default Livro1;
