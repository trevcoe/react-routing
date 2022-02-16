import './App.css';
import React from "react";
import Chips from "./Chips";
import Drink from "./Drink";
import NavBar from "./NavBar";

import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
      <nav>
        <Link to="/Drink">Drink</Link>
        <Link to="/Chips">Chips</Link>
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
