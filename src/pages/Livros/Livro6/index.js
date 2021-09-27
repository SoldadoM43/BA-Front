import React from "react";
import { Container } from "react-bootstrap";

import Header from "../../../components/Header/index";
import Footer from "../../../components/Footer/index";

const Livro1 = () => {
  return (
    <>
      <Header />
      <p class="P">Espassamento</p>
      <Container>
        <div className="Folha">
          <p> 1°Página </p>
        </div>
      </Container>
      <p class="P">Espassamento</p>
      <Footer />
    </>
  );
};

export default Livro1;
