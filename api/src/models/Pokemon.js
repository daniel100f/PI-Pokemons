
 const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
   id:{
    type:DataTypes.UUID,
    primaryKey:true,
    defaultValue:DataTypes.UUIDV4,
    allowNull: false,
   },
   
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
    },
    image: {
      type:DataTypes.STRING,
      defaultValue :"https://images3.alphacoders.com/677/677583.png" // url imagen
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    height: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });
}; 
