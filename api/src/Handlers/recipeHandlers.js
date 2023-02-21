const { createRecipe, getRecipeById } = require("../controllers/recipeControllers");
const { Diets } = require("../db");
// const axios = require("axios");
// const { API_KEY } = process.env;

const getRecipeHandler = async (req, res) => {
  const { id } = req.params;
  const where = isNaN(id) ? "bdd" : "api";
  try {
    const recipe = await getRecipeById(id, where);
    res.status(201).json(recipe)
  } catch (error) {
    res.status(400).json("Receta no encontrada");
  }
};

const getRecipeNameHandler = (req, res) => {
  res.status(200).send("En getRecipeNameHandler");
};

const cerateRecipeHandler = async (req, res) => {
  const { name, imagen, resumenDelPlato, healthScore, pasoAPaso, diets } =
    req.body;

  try {
    if (!name || !imagen || !resumenDelPlato || !healthScore || !pasoAPaso)
      throw Error("Faltan datos");
    const newRecipe = await createRecipe(
      name,
      imagen,
      resumenDelPlato,
      healthScore,
      pasoAPaso
    );
    const typeDiet = await Diets.findAll({
      where: { Nombre: diets },
    });
    await newRecipe.addDiets(typeDiet);
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  cerateRecipeHandler,
  getRecipeHandler,
  getRecipeNameHandler,
};
