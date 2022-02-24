import "react-bootstrap-typeahead/css/Typeahead.css";
import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import LoginAdmin from "./pages/LoginAdmin";
import Users from "./pages/Users";
import axios from "axios";
import Moods from "./pages/Moods";
import Swal from "sweetalert2";

export default function App() {
  const [user, setUser] = useState({});

  const checkToken = async (token) => {
    try {
      const respuesta = await axios.get("http://localhost:4000/api/auth", {
        headers: { "x-auth-token": token },
      });
      setUser(respuesta.data.usuario);
      return respuesta.data.usuario;
    } catch (error) {
      console.log(error.response.data.msg);
      localStorage.removeItem("token");
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    checkToken(token);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:4000/api/auth", {
        email,
        password,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);

      const userToken = await checkToken(token);

      if (userToken.rol === "usuario") {
        Swal.fire({
          icon: "success",
          title: "Bienvenido Usuario",
          showConfirmButton: false,
          timer: 2000,
        });
        window.location.replace("/");
      } else if (userToken.rol === "admin") {
        Swal.fire({
          icon: "success",
          title: "Bienvenido admin",
          showConfirmButton: false,
          timer: 2000,
        });
        window.location.replace("/Moods");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Datos incorrectos",
      });
    }
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home user={user} />
        </Route>
        <Route path="/Login">
          <Login login={login} user={user} />
        </Route>
        <Route path="/Perfil">
          <Perfil />
        </Route>
        <Route path="/loginAdmin">
          <LoginAdmin />
        </Route>
        <Route path="/Users">
          <Users />
        </Route>
        <Route path="/Moods">
          <Moods />
        </Route>
      </Switch>
    </Router>
  );
}
