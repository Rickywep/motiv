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
import Admin from './pages/Admin';
import LoginAdmin from './pages/LoginAdmin';
import NewUser from './pages/NewUser';
import NewMood from './pages/NewMood';

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
        <Route path="/loginAdmin" >
          <LoginAdmin />
        </Route>
        <Route path="/Admin" >
          <Admin />
        </Route>
        <Route path="/NewUser" >
          <NewUser />
        </Route>
        <Route path="/NewMood" >
          <NewMood />
        </Route>
      </Switch>
    </Router>
  );
}



