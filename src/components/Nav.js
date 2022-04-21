import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"

export default function NavBar(){
    return(
        <>
        <nav className="NavBar">
            <NavLink to="/dogs">Dogs</NavLink>
            <NavLink to="/dogs/perry">Perry</NavLink>
            <NavLink to="/dogs/tubby">Tubby</NavLink>
            <NavLink to="/dogs/whiskey">Whiskey</NavLink>
            </nav>
        </>
    )
}

