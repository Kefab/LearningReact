import React, { useState } from "react";

export function Layoud(props) {
  const [table, setTable] = useState("product");

  function setTable(name) {
    switch (name) {
      case "category":
        setTable("category");
        break;

      case "brand":
        setTable("brand");
        break;

      case "product":
        setTable("product");
        break;

      case "invoice":
        setTable("invoice");
        break;

      case "user":
        setTable("user");
        break;

      case "payMetho":
        setTable("payMetho");
        break;

      default:
        break;
    }
  }

  return (
    <>
      <div id="top">
        <h1 id="title">PICOLA COSA & CARINA</h1>
        <button
          onClick={() => {
            setTable("category");
          }}
        >
          Categoria
        </button>
        <button
          onClick={() => {
            setTable("brand");
          }}
        >
          Marca
        </button>
        <button
          onClick={() => {
            setTable("product");
          }}
        >
          Producto
        </button>
        <button
          onClick={() => {
            setTable("invoice");
          }}
        >
          Factura
        </button>
        <button
          onClick={() => {
            setTable("user");
          }}
        >
          Usuarios
        </button>
        <button
          onClick={() => {
            setTable("payMetho");
          }}
        >
          Forma de pago
        </button>
      </div>
    </>
  );
}
