import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPE = "GET_RECIPE";
export const GET_DIETS = "GET_DIETS";

export const getRecipes = () => {
  return async function (dispatch) {
    const apiData = await axios("http://localhost:3001/recipes");
    const recipes = apiData.data;
    dispatch({ type: GET_RECIPES, payload: recipes });
  };
};

export const getRecipeId = (id) => {
  return async function (dispatch) {
    const apiData = await axios(`http://localhost:3001/recipes/${id}`);
    const recipe = apiData.data;
    dispatch({ type: GET_RECIPE, payload: recipe });
  };
};

export const getDiets = () => {
  return async function (dispatch) {
    const apiDiets = await axios("http://localhost:3001/diets");
    const diets = apiDiets.data;
    dispatch({ type: GET_DIETS, payload: diets });
  };
};
