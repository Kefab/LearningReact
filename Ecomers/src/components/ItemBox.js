import React from "react";
import "./styles.css";
import aseo from "./../img/aseo.png";
import avena from "./../img/avena.png";
import cocacola from "./../img/cocacola.png";
import fideos from "./../img/fideos.png";
import galletas from "./../img/galletas.png";
import jabonlux from "./../img/jabonlux.png";
import lacteos from "./../img/lacteos.png";
import pastadental from "./../img/pastadental.png";
import queso from "./../img/queso.png";
import tallarin from "./../img/tallarin.png";
import viveres from "./../img/viveres.png";
import yogurttoni from "./../img/yogurttoni.png";

function ItemMenu(props) {
  function buy() {
    alert("Producto agregado al carrito");
  }
  let imagen;
  switch (props.name) {
    case "Shampoo":
      imagen = aseo;
      break;
    case "Leche":
      imagen = lacteos;
      break;
    case "Desodorante":
      imagen = aseo;
      break;
    case "Avena":
      imagen = avena;
      break;
    case "Tallarin":
      imagen = tallarin;
      break;
    case "Galletas":
      imagen = galletas;
      break;
    case "Pasta dental":
      imagen = pastadental;
      break;
    case "Fideos":
      imagen = fideos;
      break;
    case "Queso":
      imagen = queso;
      break;
    case "Jabon Lux":
      imagen = jabonlux;
      break;
    case "Coca-cola":
      imagen = cocacola;
      break;
    case "Yogurt Toni":
      imagen = yogurttoni;
      break;
    default:
      imagen = viveres;
      break;
  }

  return (
    <>
      <div className="container">
        <img src={imagen} alt="foto" height={150} width="150" />
        <p id="marca">{props.marca}</p>
        <p>{props.name}</p>
        <button onClick={buy}>Comprar</button>
      </div>
    </>
  );
}

export default ItemMenu;
