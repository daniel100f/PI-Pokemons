 const { Pokemon } = require("../db");

const createPokemon = (id, name, hp, attack, defense, speed, height, weight, image  = 'default.jpg') => {
  return Pokemon.create({ id, name, hp, attack, defense, speed, height, weight, image  });
};

module.exports = {createPokemon}  

