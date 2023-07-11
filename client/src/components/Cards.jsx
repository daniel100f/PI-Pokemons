import Card from "./Card";
import style from "../styles/Cards.module.css"
import { useSelector, useDispatch } from 'react-redux';
import { allPokemons } from '../redux/actions';
import React, { useEffect } from 'react';
import PaginateNew from "./PaginateNew";



  const Cards = () => {
    const allCharacters = useSelector((state) => state.allCharacters);
    const {numPage}=useSelector((state) => state);


    let desde = (numPage-1)*12;
    let hasta = numPage*12;
    let cantPages=Math.floor(allCharacters.length/12)
    let viewCharacters=allCharacters.slice(desde,hasta)
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(allPokemons());
    }, [dispatch]);
  
   
    return (
        <div className={style.body}>
      <div className={style.container}>
        {viewCharacters &&viewCharacters.map((pokemon,index) => (
          <Card
            key={index}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            height={pokemon.height}
            allCharacters={allCharacters}
          />
        ))}
        </div>
        <PaginateNew cantPages={cantPages}></PaginateNew>
      </div>
    );
  };
  
  export default Cards;
  