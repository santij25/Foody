const { Recipe, Diets } = require("../db");
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

const getRecipesApi = async () => {
  const apiRecipes = await axios(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
  );
  const result = apiRecipes.data.results.map((e) => {
    return {
      id: e.id,
      name: e.title,
      imagen: e.image,
      resumenDelPlato: e.summary,
      healthScore: e.healthScore,
      diets: e.diets,
      pasoAPaso:
        e.analyzedInstructions[0] &&
        e.analyzedInstructions[0].steps.map((s) => {
          return {
            number: s.number,
            step: s.step,
          };
        }),
    };
  });
  return result;
};

const getDbRecipes = async () => {
  const result = await Recipe.findAll({
    include: [
      {
        model: Diets,
        attributes: {
          exclude: ["Recipe-Diets", "ID"],
        },
      },
    ],
  });
  return result;
};

const getAllRecipes = async () => {
  const apiRecipes = await getRecipesApi();
  const dbRecipes = await getDbRecipes();
  const allRecipes = apiRecipes.concat(dbRecipes);
  return allRecipes;
};

module.exports = { createRecipe, getRecipeById, getAllRecipes, getDbRecipes };
