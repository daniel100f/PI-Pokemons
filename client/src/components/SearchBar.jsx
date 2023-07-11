import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getName } from "../redux/actions";
import style from "../styles/SearchBar.module.css";

const SearchBar = () => {
  const [searchPokemon, setSearchPokemon] = useState("");
  const dispatch = useDispatch("");

  const handleSearch = () => {
    dispatch(getName(searchPokemon));
  };

  return (
    <div className={style.container}>
      <input
        type="search"
        className={style.input}
        value={searchPokemon}
        onChange={(event) => setSearchPokemon(event.target.value)}
      />
      <button className={style.buscar} onClick={handleSearch}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
