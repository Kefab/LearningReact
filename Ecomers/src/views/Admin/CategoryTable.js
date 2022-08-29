import React, { useEffect, useState } from "react";
import categoryService from "../../services/category.service";

export function CategoryTable(props) {
  const [categories, setCategories] = useState([]);

  function deleteBrand(id) {
    categoryService.deleteCategory(id);
  }

  useEffect(() => {
    categoryService.getAllCategories().then((result) => {
      setCategories(result);
    });
  }, [deleteBrand]);

  if (categories.length != 0) {
    return (
      <>
        <tr>
          <th>Codigo</th>
          <th>Nombre</th>
        </tr>
        {categories.map((category) => (
          <>
            <tr>
              <td>{category.COD_CATEGORIA}</td>
              <td>{category.NOMBRE_CATEGORIA}</td>
              <td>
                <button
                  onClick={() => {
                    deleteBrand(category.COD_CATEGORIA);
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
