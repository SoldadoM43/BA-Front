import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import Detail from "../../components/Detail/index";
import RemoveItem from "../../components/RemoveItem/index";

import { FiUsers, FiUserX } from "react-icons/fi";
import React, { useState, useEffect } from "react";
import {
  Container,
  Table,
  Pagination,
  DropdownButton,
  Dropdown
} from "react-bootstrap";

const Dashboard = () => {
  const [contatos, setContatos] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [count, setCount] = useState(-1);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      let urlQuery = query && `&q=${query}`;

      let url = `https://7lqd4.sse.codesandbox.io/contatos?_page=${page}&_limit=${limit}${urlQuery}`;
      await fetch(url)
        .then((response) => {
          setCount(response.headers.get("x-total-count"));
          return response.json();
        })
        .then((data) => {
          setContatos(data);
        })
        .catch((err) => {
          setContatos([]);
        });
      setLoading(false);
    }
    fetchData();
  }, [page, limit, query, loading]);

  const PaginationItens = () => {
    let itens = [];
    for (let i = 1; i <= Math.ceil(count / limit); i++) {
      itens.push(
        <Pagination.Item key={i} active={i === page} onClick={() => setPage(i)}>
          {i}
        </Pagination.Item>
      );
    }

    return (
      <>
        <Pagination.First onClick={() => setPage(1)} />
        <Pagination.Prev
          onClick={() => {
            if (page > 1) setPage(page - 1);
          }}
        />
        {itens}
        <Pagination.Next
          onClick={() => {
            if (page < Math.ceil(count / limit)) setPage(page + 1);
          }}
        />
        <Pagination.Last onClick={() => setPage(Math.ceil(count / limit))} />
      </>
    );
  };

  function doSearch(value) {
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.timeout = setTimeout(() => {
        if (value === "") setQuery("");
        else setQuery(value);
      }, 300);
    }, 300);
  }

  return (
    <>
      <Header />
      <Container className="pl-0 pr-0">
        <div className="d-flex flex-row-reverse mt-3 pr-0 mr-0">
          <input
            placeholder="Digite sua consulta"
            onChange={(e) => doSearch(e.target.value)}
          />
        </div>
        <Table striped bordered hover variant="dark" className="mt-3">
          <thead>
            <tr>
              <th>#(id)</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th className="text-center">Opções</th>
            </tr>
          </thead>
          <tbody>
            {contatos.map((contato) => (
              <tr key={contato.id}>
                <td>{contato.id}</td>
                <td>{contato.con_nome}</td>
                <td>{contato.con_email}</td>
                <td className="text-center">
                  <Detail id={contato.id} />
                  <a href="#">
                    <FiUsers size={20} />
                  </a>{" "}
                  <RemoveItem
                    id={contato.id}
                    onExited={() => setLoading(true)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="d-flex flex-row-reverse">
          <DropdownButton title="Itens por Página" id="dropdown-item-button">
            <Dropdown.Item
              as="button"
              onClick={() => setLimit(5)}
              className="text-right"
            >
              5
            </Dropdown.Item>
            <Dropdown.Item
              as="button"
              onClick={() => setLimit(10)}
              className="text-right"
            >
              10
            </Dropdown.Item>
            <Dropdown.Item
              as="button"
              onClick={() => setLimit(15)}
              className="text-right"
            >
              15
            </Dropdown.Item>
            <Dropdown.Item
              as="button"
              onClick={() => setLimit(20)}
              className="text-right"
            >
              20
            </Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <Pagination>
            <PaginationItens />
          </Pagination>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
