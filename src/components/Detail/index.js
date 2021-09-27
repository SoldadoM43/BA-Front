import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FiUser } from "react-icons/fi";

const Detail = ({ id }) => {
  const [show, setShow] = useState(false);
  const [detail, setDetail] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    let url = `https://7lqd4.sse.codesandbox.io/contatos/${id}`;
    await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDetail(data);
      })
      .catch((err) => {
        setDetail({});
      });

    setShow(true);
  };

  return (
    <>
      <FiUser size={24} onClick={handleShow} />
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Detalhes do Contato</Modal.Title>
        </Modal.Header>
        {console.log(detail)}
        <Modal.Body>
          <h4>Nome</h4>
          <p>{detail?.con_nome}</p>
          <h4>E-mail</h4>
          <p>{detail.con_email}</p>
          <h4>Pais</h4>
          <p>{detail.con_pais}</p>
          <h4>Telefone</h4>
          <p>{detail.con_telefone}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Detail;
