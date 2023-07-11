const express=require("express")
const pokemonsRouter=express()
const {createPokemon}=require("../controllers/createPokemon")  
const {callId}=require("../controllers/callId") 
const {getPokemons,searchPokemonByName}=require("../controllers/getPokemon")





pokemonsRouter.get('/', async (req, res) => {

  const {name}=req.query;
  const results=name? await searchPokemonByName(name):await getPokemons();
  res.status(200).json(results)
});






 pokemonsRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? "bdd" : "api";
  try {
    const pokemon = await callId(id, source);
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(400).json({ error: `personaje con este ${id} no existe` });
  }
}); 





    



    
pokemonsRouter.post("/", async (req, res) => {
      try {
    const { id, nombre, vida, ataque, defensa, velocidad, altura, peso } = req.body;
    const newPokemon = await createPokemon(id, nombre, vida, ataque, defensa, velocidad, altura, peso);
    res.status(201).json(newPokemon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
    
    



module.exports=pokemonsRouter;
