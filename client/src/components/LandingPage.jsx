import React from "react";
import style from "../styles/Landing.module.css"
import { NavLink } from "react-router-dom";

const LandingPage=()=>{
    return (
        <div className={style.landing}>
            
            <NavLink to="/HomePage">
            <button className={style.boton}>Home</button>
            </NavLink>
        </div>
    );
};

export default LandingPage;