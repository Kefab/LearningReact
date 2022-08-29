import React, { useState } from "react";
import ItemBox from "./ItemBox";

export function ProductList(props) {
  const products = props.products;
  if (products != undefined) {
    return (
      <>
        <div id="container-list">
          {products.map((product) => (
            <>
              <div>
                <ItemBox name={product.NOMBRE_PRODUCTO} marca={product.NOMBRE_MARCA} />
              </div>
            </>
          ))}
        </div>
      </>
    );
  } else {
    return <>Cargando ..</>;
  }
}
