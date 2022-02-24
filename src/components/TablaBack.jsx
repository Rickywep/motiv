import React from "react";

export default function TablaBack({ user }) {
  const { nombre, email, rol } = user;
  return (
    <tr>
      <td>{nombre}</td>
      <td>{rol}</td>
      <td>{email}</td>
    </tr>
  );
}
