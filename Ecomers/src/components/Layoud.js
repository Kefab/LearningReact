import React from "react";
import { Link } from "react-router-dom";
import logo from "./../img/Logo.jpeg";
import icono from "./../img/carritoIcono.png";
import "./layouStyles.css";

function TopLaoud(props) {
  return (
    <>
      <div id="topLayoud">
        <img src={logo} alt="foto" height={125} width="100" />
        <h1 id="title">PICOLA COSA & CARINA</h1>
        <div id="box-space"></div>
        <p>{sessionStorage.getItem('username')}</p>
        <Link to="/">
          <img id="icono" src={icono} width="50px"></img>
        </Link>
        <Link to="/" id="link">
          <button>Salir</button>
        </Link>
      </div>
    </>
  );
}

export default TopLaoud;
