const { Recipe } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const createRecipe = async (
  name,
  imagen,
  resumenDelPlato,
  healthScore,
  pasoAPaso
) =>
  await Recipe.create({
    name,
    imagen,
    resumenDelPlato,
    healthScore,
    pasoAPaso,
  });

const getRecipeById = async (id, where) => {
  if (where === "api") {
    const apiRecipe = await axios(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
    );
    const resuApi = {
      id: apiRecipe.data.id,
      name: apiRecipe.data.title,
      imagen: apiRecipe.data.image,
      resumenDelPlato: apiRecipe.data.summary,
      healthScore: apiRecipe.data.healthScore,
      diets: apiRecipe.data.diets,
      pasoAPaso:
        apiRecipe.data.analyzedInstructions[0] &&
        apiRecipe.data.analyzedInstructions[0].steps.map((s) => {
          return {
            number: s.number,
            step: s.step,
          };
        }),
    };
    return resuApi;
  } else {
    const resuDb = await Recipe.findByPk(id);
    if (resuDb) {
      let dietsDb = await resuDb.getDiets();
      let diets = dietsDb.map((d) => d.dataValues.Nombre);
      console.log(dietsDb);
      return { ...resuDb.dataValues, diets };
    }
  }
};

module.exports = { createRecipe, getRecipeById };
