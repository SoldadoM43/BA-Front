import React from "react";
import { FHeader, FLink } from "./styles";
import { Container, Row, Col } from "react-bootstrap";
import { VscLocation } from "react-icons/vsc";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Container style={{ background: "Black", color: "white" }}>
      <Row bg="dark" variant="dark">
        <Col>
          <FHeader>Começo</FHeader>
          <p>
            Tudo começou com a primeira canção, depois o primeiro poemas, logo o
            primeiro livro, e quando me dei conta já estava no volume 3. Tive
            coragem para "postar" o primeiro livro na plataforma Watppad, e
            assim foi, as pessoas até que gostaram bastante. Bastante tempo
            depois comecei a namorar e dai veio mais dois livros (For My Beloved
            e Uma História de Amor) e depois disso veio o último postado,
            (Poemas Católicos).
          </p>
        </Col>
        <Col>
          <FHeader>Profições do "criador"</FHeader>
          <p>. Criador e Sonhador</p>
          <p>. Programador e Design</p>
          <p>. Gamer e Desenvolvedor</p>
          <p>. Escritor e Desenhista</p>
          <p>. Técnico em Informática</p>
          <p>. Músico compositor e instrumetista</p>
          <p>. Católico Apostólico Romano e Mariano</p>
        </Col>
        <Col>
          <FHeader>Contato do "Criador"</FHeader>
          <p>
            <VscLocation className="mr-2" />
            Rua Tácito Leite de Carvalho e Silva, 657 res. Paineiras
            <br />
            Presidente Venceslau -19400-000 - SP
          </p>
          <p>
            <FaWhatsapp className="mr-2" />
            <FLink
              href="https://api.whatsapp.com/send?phone=5518988173153
            &text=Olá, Gostaria de uma informação."
              target="_blank"
            >
              +55(18)98817-3153
            </FLink>
          </p>
          <p>
            <FaFacebook className="mr-2" />
            <FLink
              href="http://www.fb.com/soldado.de.maria.4.3"
              target="_blank"
            >
              /Soldado.de.Maria.4.3
            </FLink>
          </p>
          <p>
            <AiOutlineTwitter className="mr-2" />
            <FLink
              href="http://www.twitter.com/soldado.de.maria.43"
              target="_blank"
            >
              @soldadodemaria43
            </FLink>
          </p>
          <p>
            <FaInstagram className="mr-2" />
            <FLink href="http://www.instagram.com/soldadom.43" target="_blank">
              @soldadom43
            </FLink>
          </p>
          <p>
            <FaYoutube className="mr-2" />
            <FLink href="" target="_blank">
              Soldado de Maria 43
            </FLink>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
