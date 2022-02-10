import React from "react";
import { Redirect } from "react-router-dom";
import CardUsuario from "../components/CardUsuario";
import MyNavLogin from "../components/MyNavLogin";

const token = localStorage.getItem("token");

export default function Home({ user }) {
  if (!token) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <MyNavLogin user={user} />
      <CardUsuario user={user} token={token} />
    </div>
  );
}
