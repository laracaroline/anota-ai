import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Pagina from "./components/Pagina";
import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Pagina />
    </div>
  );
};

export default App;
