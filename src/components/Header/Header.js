import React from "react";
import { HeaderContainer } from "./Style";

import axios from "axios";
import { toast } from "react-toastify";
import { baseURL } from "../../constants";

import LogoMarca from "../.././img/logo.png";
import FireMatch from "../.././img/fire-match.svg";
import BtnReload from "../.././img/btn-reload.svg";

export default function Header(props) {
  const profileClear = () => {
    axios
      .put(`${baseURL}/jose-carlos/clear`)
      .then((request) => {
        return toast.success("Perfis vistos e matches removidos!");
      })
      .catch((erro) => {
        return toast.error(erro);
      });
  };

  return (
    <>
      <HeaderContainer>
        {props.onScreen === "ListMatch" ? (
          <button onClick={profileClear} className="btn-match">
            <img src={BtnReload} alt={"Reiniciar Matches e Perfis Vistos"} />
          </button>
        ) : (
          <button className="btn-invisible"></button>
        )}

        <img src={LogoMarca} alt={"Astromatch"} />

        <div>
          <button
            onClick={
              props.onScreen === "ListPeople"
                ? props.screenListMatch
                : props.screenListPeople
            }
          >
            <img src={FireMatch} alt={"Seus Matches"} />
          </button>
        </div>
      </HeaderContainer>
    </>
  );
}
