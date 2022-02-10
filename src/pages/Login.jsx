import React from "react";
import Formulario from "../components/Formulario";

export default function Login({ login, user }) {
  return (
    <div>
      <Formulario login={login} user={user} />
    </div>
  );
}
