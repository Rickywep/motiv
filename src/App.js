import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MyNavBar from "./components/MyNavBar";
import Login from "./pages/Login";
import { useState } from "react";
import PerfilUsuario from './pages/Perfil';
import Perfil from './pages/Perfil';
import Home from './pages/Home';

export default function App() {
  const [user, setUser] = useState("");
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Login" >
          <Login />
        </Route>
        <Route path="/Perfil" >
          <Perfil />
        </Route>
      </Switch>
    </Router>
  );
}



