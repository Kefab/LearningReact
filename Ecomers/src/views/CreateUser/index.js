import React, { useState } from "react";
import "./style.css";

export function CreatUser() {
  const [name, setName] = useState();
  const [addres, setAddres] = useState();
  const [phone, setPhone] = useState();
  const [mail, setMail] = useState();
  const [date, setDate] = useState();
  const [nacionalidad, setNacionalidad] = useState();
  const [gender, setGender] = useState();
  const [dni, setDni] = useState();
  const [pass, setPass] = useState();
  const [passConf, setPassConf] = useState();

  return (
    <>
      <div id="main-c">
        <h1>PICOLA COSA & CARINA</h1>
        <h2>Crear usuario</h2>
        <div>
          <label>Nombre: </label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>

        <div>
          <label>Direccion: </label>
          <input
            onChange={(e) => {
              setAddres(e.target.value);
            }}
          ></input>
        </div>

        <div>
          <label>Telefono: </label>
          <input
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          ></input>
        </div>

        <div>
          <label>Correo: </label>
          <input
            onChange={(e) => {
              setMail(e.target.value);
            }}
          ></input>
        </div>

        <div>
          <label>Fecha de nacimiento: </label>
          <input
            type={"date"}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          ></input>
        </div>

        <div>
          <label>Nacionalidad: </label>
          <input
            onChange={(e) => {
              setNacionalidad(e.target.value);
            }}
          ></input>
        </div>

        <div>
          <label>Sexo: </label>
          <input
            onChange={(e) => {
              setGender(e.target.value);
            }}
          ></input>
        </div>

        <div>
          <label>Cedula: </label>
          <input
            onChange={(e) => {
              setDni(e.target.value);
            }}
          ></input>
        </div>

        <div>
          <label>Contraseña: </label>
          <input
            type={"password"}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          ></input>
        </div>

        <div>
          <label>Confirmar contraseña: </label>
          <input
            type={"password"}
            onChange={(e) => {
              setPassConf(e.target.value);
            }}
          ></input>
        </div>

        <button>Crear cuenta</button>
      </div>
    </>
  );
}
