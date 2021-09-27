import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./Main/index";
import Sobre from "./Sobre/index";
import Favoritos from "./Favoritos/index";
import Dashboard from "./Dashboard/index";
import Livros from "./Livros";
import Livro1 from "./Livros/Livro1";
import Livro2 from "./Livros/Livro2";
import Livro3 from "./Livros/Livro3";
import Livro4 from "./Livros/Livro4";
import Livro5 from "./Livros/Livro5";
import Livro6 from "./Livros/Livro6";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/favoritos" component={Favoritos} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/livros" component={Livros} exact />
        <Route path="/livros/livro1" component={Livro1} />
        <Route path="/livros/livro2" component={Livro2} />
        <Route path="/livros/livro3" component={Livro3} />
        <Route path="/livros/livro4" component={Livro4} />
        <Route path="/livros/livro5" component={Livro5} />
        <Route path="/livros/livro6" component={Livro6} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
