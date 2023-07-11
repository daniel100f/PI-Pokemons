import {BUSCAR_NAME_POKEMON,GET_ALL,CREATE_POKEMON,FILTER,ORDER,NEXT_PAGE,PREV_PAGE} from "./action-types"
import axios from "axios";



export const  nextPage=()=>{
  return {type: NEXT_PAGE}
}

export const  prevPage=()=>{
  return {type: PREV_PAGE}
}
export const allPokemons = () => {
    const endpoint = 'http://localhost:3001/pokemons';
    return async (dispatch) => {
      try {
        const { data } = await axios.get(endpoint );
        dispatch({
          type: GET_ALL,
          payload: data,
        });
      } catch (error) {
        console.error(error);
      }
    };
  };


  export const getName = (name) => {
    const endpoint = `http://localhost:3001/pokemons?name=${name}`;
    return async (dispatch) => {
      try {
        const { data } = await axios.get(endpoint);
        dispatch({
          type: BUSCAR_NAME_POKEMON,
          payload: data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  };


  export const createPokemon = () => {
    const endpoint = 'http://localhost:3001/pokemons';
    return async (dispatch) => {
      try {
        const { data } = await axios.post(endpoint );
        dispatch({
          type: CREATE_POKEMON,
          payload: data,
        });
      } catch (error) {
        console.error(error);
      }
    };
  };

  export const filterCards =(gender)=>{
    return {type:FILTER,payload:gender}
}
export const orderCards=(orden)=>{
    return {type:ORDER,payload:orden}
}
  