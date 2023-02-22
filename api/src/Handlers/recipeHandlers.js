const {
  createRecipe,
  getRecipeById,
  getAllRecipes,
} = require("../controllers/recipeControllers");
const { Diets } = require("../db");
// const axios = require("axios");
// const { API_KEY } = process.env;

const getRecipeHandler = async (req, res) => {
  const { id } = req.params;
  const where = isNaN(id) ? "bdd" : "api";
  try {
    const recipe = await getRecipeById(id, where);
    res.status(201).json(recipe);
  } catch (error) {
    res.status(400).json("Receta no encontrada");
  }
};

const getRecipeNameHandler = async (req, res) => {
  const { name } = req.query;
  const allRecipes = await getAllRecipes();
  try {
    if (name) {
      const result = allRecipes.filter((el) =>
        el.name.toLowerCase().includes(name.toLowerCase())
      );
      if (result.length) return res.status(200).json(result);
      return res.status(400).json(`Receta ${name} no encontrada`);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
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
