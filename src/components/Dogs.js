import React from "react";
import { Link } from "react-router-dom";
import duke from "../assets/duke.jpg";
import perry from "../assets/perry.jpg";
import tubby from "../assets/tubby.jpg";
import whiskey from "../assets/whiskey.jpg";
import "./Dogs.css"

export default function Dogs(){
    return (<>

    <Link to="/dogs/duke"><img src={duke} className="dog" alt=""/></Link>
    <Link to="/dogs/perry"><img src={perry} className="dog" alt=""/></Link>
    <Link to="/dogs/tubby"><img src={tubby} className="dog" alt=""/></Link>
    <Link to="/dogs/whiskey"><img src={whiskey} className="dog" alt=""/></Link>
    </>)
}