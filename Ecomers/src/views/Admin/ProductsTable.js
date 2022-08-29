import React, { useEffect, useState } from "react";
import productService from "../../services/product.service";

export function ProductsTable(props) {
  const [products, setProducts] = useState([]);

  function deleteBrand(id) {
    productService.deleteBrand(id);
  }

  useEffect(() => {
    productService.readBrands().then((result) => {
      setProducts(result);
    });
  }, [deleteBrand]);

  if (products.length != 0) {
    return (
      <>
        <tr>
          <th>Marca</th>
          <th>Categoria</th>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Fecha vencimiento</th>
        </tr>
        {products.map((brand) => (
          <>
            <tr>
              <td>{brand.COD_MARCA}</td>
              <td>{brand.NOMBRE_MARCA}</td>
              <td>
                <button
                  onClick={() => {
                    deleteBrand(brand.COD_MARCA);
                  }}
                >
                  ELIMINAR
                </button>
                <button>EDITAR</button>
              </td>
            </tr>
          </>
        ))}
      </>
    );
  } else {
    return <>Cargando...</>;
  }
}
