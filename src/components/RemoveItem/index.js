import React, { useState } from "react";
import { Modal, Button, Alert } from "react-bootstrap";
import { FiUserX } from "react-icons/fi";

const RemoveItem = ({ id, onExited, ...props }) => {
  const [show, setShow] = useState(false);
  const [detail, setDetail] = useState({});
  const [removed, setRemoved] = useState(false);
  const [error, setError] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    let url = `https://cwigh.sse.codesandbox.io/contatos/${id}`;
    await fetch(url)
      .then((response) => {
        let status = parseInt(response.status, 10);
        if (status !== 200) throw new Error("Erro ao carregar o item");
        return response.json();
      })
      .then((data) => {
        setDetail(data);
        setError("");
      })
      .catch((err) => {
        setDetail({});
        setError(err.message);
      });

    setShow(true);
  };

  const handleRemove = async () => {
    let url = `https://cwigh.sse.codesandbox.io/contatos/${id}`;
    await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((data) => {
        setRemoved(true);
        setError("");
        setShow(false);
        // setDetail(data);
      })
      .catch((err) => {
        setRemoved(false);
        setError(err.message);
        // setDetail({});
      });
  };

  const handleOnExited = () => {
    if (removed) onExited();
  };

  return (
    <>
      <FiUserX size={24} onClick={handleShow} />
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onExited={handleOnExited}
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
          {error && <Alert variant="danger">{error}</Alert>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleRemove}>
            Excluir Contato
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RemoveItem;
