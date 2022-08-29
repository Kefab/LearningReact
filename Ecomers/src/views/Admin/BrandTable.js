import React, { useEffect, useState } from "react";
import brandService from "../../services/brand.service";

export function BrandTable(props) {
  const [brands, setBrands] = useState([]);

  function deleteBrand(id) {
    brandService.deleteBrand(id);
  }

  useEffect(() => {
    brandService.readBrands().then((result) => {
      setBrands(result);
    });
  }, [deleteBrand]);

  if (brands.length != 0) {
    return (
      <>
        <tr>
          <th>Codigo</th>
          <th>Nombre</th>
        </tr>
        {brands.map((brand) => (
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
