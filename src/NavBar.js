import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className="NavBar">
            <NavLink exact to="/">
                Vending Machine
            </NavLink>
            <NavLink exact to="/Drink">
                Drink
            </NavLink>
            <NavLink exact to="/Chips">
                Chips
            </NavLink>
        </nav>
    );
}

export default NavBar;