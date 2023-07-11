
const { Pokemon } = require('../db');
const axios = require('axios');

const getPokemonsByName = async (name) => {
    const dataBasePokemons = await Pokemon.findAll({
      where: Sequelize.where(
        Sequelize.fn('LOWER', Sequelize.col('name')),
        Sequelize.fn('LOWER', name)
      )
    });
  
    const apiPokemons = (
      await axios.get('https://pokeapi.co/api/v2/pokemon?limit=60')
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

  module.exports={getPokemonsByName}
