import React from "react";

import Routes from "./pages/routes";
import GlobalStyle from "./styles/global";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}
