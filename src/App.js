import React, { useState } from "react";
import { GlobalStyle } from "./Global";

import { ListMatch } from "./components/ListMatch/ListMatch";
import { ListPeople } from "./components/ListPeople/ListPeople";
import { ContainerAstroMatch } from "./Style";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/Header";

export default function App() {
  const [onScreen, setOnScreen] = useState("ListPeople");

  const chooseScreen = () => {
    switch (onScreen) {
      case "ListPeople":
        return (
          <>
            <Header screenListMatch={screenListMatch} onScreen={onScreen} />
            <ListPeople screenListMatch={screenListMatch} />
          </>
        );
      case "ListMatch":
        return (
          <>
            <Header screenListPeople={screenListPeople} onScreen={onScreen} />
            <ListMatch screenListPeople={screenListPeople} />
          </>
        );
      default:
        return <div>Nada encontrado, tente retornar para o início!</div>;
    }
  };

  const screenListMatch = () => {
    setOnScreen("ListMatch");
  };

  const screenListPeople = () => {
    setOnScreen("ListPeople");
  };

  return (
    <>
      <ToastContainer autoClose={5000} position="bottom-center" />
      <GlobalStyle />
      <ContainerAstroMatch>{chooseScreen()}</ContainerAstroMatch>
    </>
  );
}
