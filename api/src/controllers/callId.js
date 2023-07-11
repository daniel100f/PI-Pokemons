const { Pokemon,Types } = require("../db");
const axios = require("axios");


const callId = async (id, source) => {
  let pokemon;

  if (source === "api") {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    pokemon = {
      name: response.data.name,
      weight: response.data.weight,
      height: response.data.height,
      hp: response.data.stats.find(stat => stat.stat.name === 'hp').base_stat,
      attack: response.data.stats.find(stat => stat.stat.name === 'attack').base_stat,
      image: response.data.sprites.other['official-artwork'].front_default,
      type: response.data.types.map(type => type.type.name),
    };
  } else {
    pokemon = await Pokemon.findByPk(id, {
      include: { model: Types },
    });
  }

  return pokemon;
};

module.exports = { callId };








































/* const { Pokemon } = require("../db");
const axios = require("axios");

const callId = async (id, source) => {
  let pokemon;
  if (source === "api") {
    pokemon = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data;
  } else {
    pokemon = await Pokemon.findByPk(id, {
      attributes: ["name", "image", "vida", "ataque"],
    });
  }

  return pokemon;
};

module.exports = { callId }; */






