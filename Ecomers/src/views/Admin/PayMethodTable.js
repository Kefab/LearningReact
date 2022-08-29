import React, { useEffect, useState } from "react";
import payMethodService from "../../services/payMethod.service";

export function PayMethodTable(props) {
  const [payMethods, setPayMethods] = useState([]);

  function deleteBrand(id) {
    payMethodService.deleteMethod(id);
  }

  useEffect(() => {
    payMethodService.readMethods().then((result) => {
      setPayMethods(result);
    });
  }, [deleteBrand]);

  if (payMethods.length != 0) {
    return (
      <>
        <tr>
          <th>Codigo</th>
          <th>Nombre</th>
        </tr>
        {payMethods.map((payMethod) => (
          <>
            <tr>
              <td>{payMethod.COD_PAGO}</td>
              <td>{payMethod.NOMBRE_PAGO}</td>
              <td>
                <button
                  onClick={() => {
                    deleteBrand(payMethod.COD_PAGO);
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
