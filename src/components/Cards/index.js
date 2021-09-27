import React from "react";
import { useState } from "react";
import { Container, CardDeck, Card, Button, Modal } from "react-bootstrap";

import c1 from "../../assets/c1.jpg";
import c2 from "../../assets/c2.jpg";
import c3 from "../../assets/c3.jpg";
import c4 from "../../assets/c4.jpg";
import c5 from "../../assets/c5.jpg";
import c6 from "../../assets/c6.jpg";

const Cards = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);
  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  return (
    <Container className="pt-2 pb-2 pl-0 pr-0">
      <CardDeck>
        <Card style={{ height: "435px" }}>
          <Card.Header>1º Livro</Card.Header>
          <Card.Img variant="top" src={c1} width="11px" height="222px" />
          <Card.Body>
            <Card.Text className="Cards">Livro de Poemas vl.1</Card.Text>
            <Button className="ButtonCards" onClick={handleShow}>
              Ver Mais
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Mais Informações</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Este é o primeiro livro da série "P.P - Poemas Para".</p>
                <p className="IMGC">
                  <img
                    className="IMGC2"
                    src={c1}
                    alt="imagem"
                    width="125px"
                    height="200px"
                  />
                </p>
                <p>
                  Como esse era o primeiro livro a ser escrito e postado com o
                  intuito de ser um livro, eu não tinha muita noção, mas as
                  pessoas gostaram bastante.
                </p>
                <p>
                  Esse é meio que uma compilação de poemas, não é bem sobre
                  apenas uma coisa, é para todos e tudo. Por isso o simples nome
                  "Livro de Poemas vl. 1".
                </p>
              </Modal.Body>
            </Modal>
          </Card.Body>
        </Card>
        <Card style={{ height: "435px" }}>
          <Card.Header>2º Livro</Card.Header>
          <Card.Img variant="top" src={c2} width="11px" height="222px" />
          <Card.Body>
            <Card.Text className="Cards">For My Beloved</Card.Text>
            <Button className="ButtonCards" onClick={handleShow1}>
              Ver Mais
            </Button>
            <Modal show={show1} onHide={handleClose1}>
              <Modal.Header closeButton>
                <Modal.Title>Mais Informações</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Este é o 2° Livro da série "P.P - Poemas Para".</p>
                <p className="IMGC">
                  <img
                    className="IMGC2"
                    src={c2}
                    alt="imagem"
                    width="125px"
                    height="200px"
                  />
                </p>
                <p>
                  Esse livro é dedicado e escrito para uma pessoa muito especial
                  para mim, minha namorada, Daniele Costa, que no momento
                  escreve junto a mim o livro "Uma História de Amor".
                </p>
                <p>
                  Com atualmente 26 textos, o "Livro de Poemas vl.2 (For My
                  Beloved)" demonstra o amor de uma pessoa expresso por outra
                  muito especial, dentre músicas e poemas, o Livro também conta
                  uma história em suas entrelinhas, com detalhes essências.
                </p>
              </Modal.Body>
            </Modal>
          </Card.Body>
        </Card>
        <Card style={{ height: "435px" }}>
          <Card.Header>3º Livro</Card.Header>
          <Card.Img variant="top" src={c3} width="11px" height="222px" />
          <Card.Body>
            <Card.Text className="Cards">Poemas Católicos</Card.Text>
            <Button className="ButtonCards" onClick={handleShow2}>
              Ver Mais
            </Button>
            <Modal show={show2} onHide={handleClose2}>
              <Modal.Header closeButton>
                <Modal.Title>Mais Informações</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Este é o 3° Livro da série "P.P - Poemas Para".</p>
                <p className="IMGC">
                  <img
                    className="IMGC2"
                    src={c3}
                    alt="imagem"
                    width="125px"
                    height="200px"
                  />
                </p>
                <p>
                  Este livro é dedicado a Deus, Jesus, Nossa senhora e ao Meu
                  Anjo da Guarda.
                </p>
                <p>
                  "Músicas para aqueles que sempre estiveram comigo mesmo antes
                  de eu nascer".
                </p>
              </Modal.Body>
            </Modal>
          </Card.Body>
        </Card>
        <Card style={{ height: "435px" }}>
          <Card.Header>4º Livro</Card.Header>
          <Card.Img variant="top" src={c4} width="11px" height="222px" />
          <Card.Body>
            <Card.Text className="Cards">Uma História de Amor</Card.Text>
            <Button className="ButtonCards" onClick={handleShow3}>
              Ver Mais
            </Button>
            <Modal show={show3} onHide={handleClose3}>
              <Modal.Header closeButton>
                <Modal.Title>Mais Informações</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p className="IMGC">
                  <img
                    className="IMGC2"
                    src={c4}
                    alt="imagem"
                    width="125px"
                    height="200px"
                  />
                  <p>
                    Este livro escrito em conjunto com minha Amada, Daniele
                    Costa, é um romance que fala sobre uma história de amor bem
                    clichê, mas que pode ser real.
                  </p>
                  <p>
                    Retrata a vida de dois jovens que se amam e passam por
                    alguns momentos em que esse amor se mostra e se revela
                    verdadeiro.
                  </p>
                </p>
              </Modal.Body>
            </Modal>
          </Card.Body>
        </Card>
        <Card style={{ height: "435px" }}>
          <Card.Header>5º Livro</Card.Header>
          <Card.Img variant="top" src={c6} width="11px" height="222px" />
          <Card.Body>
            <Card.Text className="Cards">Amor Além do Coração</Card.Text>
            <Button className="ButtonCards" onClick={handleShow4}>
              Ver Mais
            </Button>
            <Modal show={show4} onHide={handleClose4}>
              <Modal.Header closeButton>
                <Modal.Title>Mais Informações</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p className="IMGC">
                  <img
                    className="IMGC2"
                    src={c6}
                    alt="imagem"
                    width="125px"
                    height="200px"
                  />
                  <p>
                    Este livro é um romance que conta a história de amor entre
                    dois jovens que devido a um fenômeno celestial,
                    acidentalmente o garoto se torna um demônio e a garota um
                    anajo, mas eles ainda se amam e vão lutar por esse amor. Um
                    amor que vai "Além do Coração".
                  </p>
                </p>
              </Modal.Body>
            </Modal>
          </Card.Body>
        </Card>
        <Card style={{ height: "435px" }}>
          <Card.Header>6º Livro</Card.Header>
          <Card.Img variant="top" src={c5} width="11px" height="222px" />
          <Card.Body>
            <Card.Text className="Cards">Frases com Amor</Card.Text>
            <Button className="ButtonCards" onClick={handleShow5}>
              Ver Mais
            </Button>
            <Modal show={show5} onHide={handleClose5}>
              <Modal.Header closeButton>
                <Modal.Title>Mais Informações</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p className="IMGC">
                  <img
                    className="IMGC2"
                    src={c5}
                    alt="imagem"
                    width="125px"
                    height="200px"
                  />
                  <p>
                    De todos... O mais simples, este é um livro de frases, como
                    diz o nome: "Frases com Amor".
                  </p>
                </p>
              </Modal.Body>
            </Modal>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  );
};

export default Cards;
