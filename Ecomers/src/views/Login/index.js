import React, { useState } from "react";
import "./styles.css";
import userServices from "./../../services/users.service";
import { Link } from "react-router-dom";

export function Login(props) {
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();

  async function login() {
    console.log(mail);
    console.log(password);
    const response = await userServices.isUser(mail, password);
    if (response.NOMBRE_CLIENTE !== undefined) {
      sessionStorage.setItem("username", response.NOMBRE_CLIENTE);
      sessionStorage.setItem("idUser", response.ID_CLIENTE);
      window.location = "http://localhost:3000/home";
    } else {
      alert("Usuario incorrecto");
    }
  }

  return (
    <>
      <div id="main-container-log">
        <h1>PICOLA COSA & CARINA</h1>
        <label>Cedula: </label>
        <input
          onChange={(e) => {
            setMail(e.target.value);
          }}
        ></input>
        <label>Contraseña: </label>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <div>
          <button onClick={login}>Iniciar sesion</button>
          <Link to="createUser">
            <button>Crear suario</button>
          </Link>
        </div>
      </div>
    </>
  );
}
