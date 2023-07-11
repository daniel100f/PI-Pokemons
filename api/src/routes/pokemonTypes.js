const {Router} = require("express")
const {Types} = require ("../db.js")
const {getTypes} = require("../Controllers/pokemonType")
const router = Router()



router.get("/", async (req,res)=>{
    try {
       await getTypes();
    
        const types = await Types.findAll();   
       
        res.status(200).json(types);
      } catch (error) {
        res.status(400).send(error.toString()), console.log(error, "Error en el controlador getTypes");
      }
})
module.exports = router;