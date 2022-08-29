import React, { useEffect, useState } from "react";
import usersService from "../../services/users.service";

export function Userstable(props) {
  const [users, setUsers] = useState([]);

  function deleteuser(id) {
    usersService.deleteUser(id);
  }

  useEffect(() => {
    usersService.readUsers().then((result) => {
      setUsers(result);
    });
  }, [deleteuser]);

  if (users.length != 0) {
    return (
      <>
        <tr>
          <th>Nombre</th>
          <th>Direccion</th>
          <th>Telefono</th>
          <th>Correo</th>
          <th>Fecha de nacimiento</th>
          <th>Nacionalidad</th>
          <th>Genero</th>
          <th>Cedula</th>
          <th>Contraseña</th>
          <th>Acciones</th>
        </tr>
        {users.map((user) => (
          <>
            <tr>
              <td>{user.NOMBRE_CLIENTE}</td>
              <td>{user.DIRECCION_CLIENTE}</td>
              <td>{user.TELEFONO_CLIENTE}</td>
              <td>{user.EMAIL_CLIENTE}</td>
              <td>{user.FECHADENACIMIENTO_CLIENTE}</td>
              <td>{user.NACIONALIDAD_CLIENTE}</td>
              <td>{user.SEXO_CLIENTE}</td>
              <td>{user.IDENTIFICACION_CLIENTE}</td>
              <td>{user.CLAVE}</td>
              <td>
                <button
                  onClick={() => {
                    deleteuser(user.ID_CLIENTE);
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
