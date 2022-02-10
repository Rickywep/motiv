import 'react-bootstrap-typeahead/css/Typeahead.css';
import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import LoginAdmin from "./pages/LoginAdmin";
import NewMood from "./pages/NewMood";
import Users from "./pages/Users";
import axios from "axios";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});

  useEffect(() => {
    const checkToken = async () => {
      try {
        const respuesta = await axios.get("http://localhost:4000/api/auth", {
          headers: { "x-auth-token": token },
        });
        setUser(respuesta.data.usuario);
      } catch (error) {
        console.log(error.response.data.msg);
        localStorage.removeItem("token");
        setToken("");
      }
    };
    checkToken();
  }, [token]);

  const login = async (email, password) => {
    const response = await axios.post("http://localhost:4000/api/auth", {
      email,
      password,
    });
    const token = response.data.token;
    setToken(token);
    localStorage.setItem("token", token);
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home user={user}  />
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
        <Route path="/Admin">
          <Admin />
        </Route>
        <Route path="/Users">
          <Users />
        </Route>
        <Route path="/NewMood">
          <NewMood />
        </Route>
      </Switch>
    </Router>
  );
}
