const { Pokemon } = require('../db');
const axios = require('axios');

const getPokemons = async () => {
  const dataBasePokemons = await Pokemon.findAll();
  const apiPokemons = (
    await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150')
  ).data.results;

  const detailedPokemons = await Promise.all(
    apiPokemons.map(async (pokemon) => {
      const { data } = await axios.get(pokemon.url);
      return {
        name: data.name,
        weight: data.weight,
        height: data.height,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        image: data.sprites.other['official-artwork'].front_default,
        type: data.types.map((type) => type.type.name),
        created: false,
      };
    })
  );

  const pokemons = [...dataBasePokemons, ...detailedPokemons];
  
  return pokemons;
};




 const searchPokemonByName = async (name) => {
  const pokemonsList = await getPokemons();
  const pokeSelect = pokemonsList.filter(
    (poke) => poke && poke.name && poke.name.toLowerCase() === name.toLowerCase()
  );
  
  console.log(pokeSelect);
  return pokeSelect;
}; 

module.exports = { getPokemons, searchPokemonByName };













