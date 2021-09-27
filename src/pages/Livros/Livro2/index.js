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
        <table className="mr-auto ml-auto">
          <tr>
            <td>
              <div className="Folha">
                <p class="PT">
                  <b>Anjo</b>
                </p>

                <p class="PE">Espassamento</p>

                <p class="PP">Quero começar agradecendo </p>
                <p class="PP">Por estar comigo neste momento</p>
                <p class="PP">Anjo, você é demais</p>
                <p class="PP">Eu não vou te deixar jamais</p>

                <p class="PE">Espassamento</p>

                <p class="PP">Quando precisar</p>
                <p class="PP">É só chamar</p>
                <p class="PP">Que eu vou estar</p>
                <p class="PP">Ao teu lado para te ajudar</p>

                <p class="PE">Espassamento</p>

                <p class="PP">Não tenho asas </p>
                <p class="PP">Nem vestes brancas</p>
                <p class="PP">Mas tenho um coração</p>
                <p class="PP">Que emana luz</p>
              </div>
            </td>
            <td>
              <div className="Folha">
                <p class="PP">Graças a você</p>
                <p class="PP">Estou feliz</p>
                <p class="PP">Graças a você</p>
                <p class="PP">Estou bem</p>

                <p class="PE">Espassamento</p>

                <p class="PP">Pessoa, tu me ajudou de um tal jeito</p>
                <p class="PP">Que eu nunca pensei</p>
                <p class="PP">Você fez a minha vida mudar</p>
                <p class="PP">Mais uma vez</p>

                <p class="PE">Espassamento</p>

                <p class="PP">Linda garota de cabelos loiros </p>
                <p class="PP">Já parecia um anjo só de olho</p>
                <p class="PP">Quando eu precisei de uma mão</p>
                <p class="PP">Ela estava lá para acalmar o meu coração</p>

                <p class="PE">Espassamento</p>

                <p class="PP">Obrigado por me ajudar</p>
                <p class="PP">Obrigado por me querer bem</p>
                <p class="PP">Por sempre comigo estar</p>
                <p class="PP">Obrigado neném.</p>
              </div>
            </td>
          </tr>
        </table>
      </Container>
      <p class="P">Espassamento</p>
      <Footer />
    </>
  );
};

export default Livro1;
