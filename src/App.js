import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./pages/Login";
import Perfil from './pages/Perfil';
import Home from './pages/Home';

export default function App() {
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



