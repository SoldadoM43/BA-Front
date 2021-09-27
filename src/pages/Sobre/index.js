import React from "react";
import { Container } from "react-bootstrap";

import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";

import diego from "../../assets/diego.jpg";

const Sobre = () => {
  return (
    <>
      <Header />
      <Container className="mt-2 mb-2 pl-0 pr-0">
        <table
          style={{ borderStyle: "solid", borderWidth: "1px;", width: "100%" }}
        >
          <tr>
            <td style={{ width: "50%" }}>
              <img src={diego} alt="diego" width="180px" />
            </td>
            <td style={{ width: "50%" }}>
              <p style={{ color: "black" }}>
                <b>Nome:</b> Diego Novaes{" "}
              </p>
              <p style={{ color: "black" }}>
                <b>Idade:</b> 16 anos (em 2020)
              </p>
            </td>
          </tr>
          <tr style={{ height: "50px" }}>
            <td
              colSpan={2}
              style={{
                textAlign: "right",
                fontWeight: "bold",
                color: "#fff",
                backgroundColor: "#000",
                paddingRight: "10px"
              }}
            >
              Trabalho de PWI/DDW/MDBD/REDES/CPA
            </td>
          </tr>
        </table>
      </Container>
      <Footer />
    </>
  );
};

export default Sobre;
