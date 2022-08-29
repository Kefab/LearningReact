import React from "react";
import "./styles.css";
import golosinas from "./../img/golosinas.png";
import aseo from "./../img/aseo.png";
import lacteos from "./../img/lacteos.png";
import viveres from "./../img/viveres.png";

function ItemMenu(props) {
  let imagen;

  switch (props.name) {
    case "GOLOSINAS":
      imagen = golosinas;
      break;
    case "VIVERES":
      imagen = viveres;
      break;
    case "LACTEOS":
      imagen = lacteos;
      break;
    case "ASEO":
      imagen = aseo;
      break;
    default:
      imagen = viveres;
      break;
  }

  return (
    <>
      <div className="container" onClick={props.onPress}>
        <img src={imagen} alt="foto" height={100} width="100" />
        <p>{props.name}</p>
      </div>
    </>
  );
}

export default ItemMenu;
