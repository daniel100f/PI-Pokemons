import React from "react";
import style from "../styles/Nav.module.css"
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

const Nav=()=>{
    return (
        <div className={style.container}>
          <img src="https://lh3.googleusercontent.com/MxqAAjte5yQsQD0cC73SBVJuH6kX9F-fQ1X97VecyhGHGpixcT1ce7OftVuDufTSVIG_gY233437bOmw1AZFpg1Har4t5sP1jDo4GAX_so38dg=e365-w261" 
          alt="pokebola" className={style.pokebola}/>

  
<div>
     <NavLink to="/HomePage">
      <span className="HomePage">Home</span>
      </NavLink>
  </div>
  
  
  <div>
     <NavLink to="/">
      <span className="LandingPage">LandingPage</span>
      </NavLink>
  </div>


  <div>
     <NavLink to="/FormPage">
      <span className="FormPage">Form Create</span>
      </NavLink>
  </div>

  <div>
     <NavLink to="/DetailPage">
      <span className="DetailPage">Details</span>
      </NavLink>

  </div>

<SearchBar/>

        </div>
    );
};

export default Nav;