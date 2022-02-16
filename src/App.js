import './App.css';
import React from "react";
import Chips from "./Chips";
import Drink from "./Drink";
import NavBar from "./NavBar";

import { BrowserRouter, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
      <nav>
        <NavLink to="/">Vending Machine</NavLink>
        <NavLink to="/Drink">Drink</NavLink>
        <NavLink to="/Chips">Chips</NavLink>
      </nav>
        <NavBar />
        <Route exact path="/Drink">
          <Drink />
        </Route>
        <Route exact path="/Chips">
          <Chips />
        </Route>
      </BrowserRouter>
    </main>
  );
}

export default App;
