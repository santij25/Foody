const { Router } = require("express");
const {
  getRecipeHandler,
  getRecipeNameHandler,
  cerateRecipeHandler,
} = require("../Handlers/recipeHandlers");

const recipeRoutes = Router();

recipeRoutes.get("/:id", getRecipeHandler);
recipeRoutes.get("/", getRecipeNameHandler);
recipeRoutes.post("/", cerateRecipeHandler);

module.exports = recipeRoutes;
