import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPE = "GET_RECIPE";
export const GET_DIETS = "GET_DIETS";
export const POST_RECIPE = "POST_RECIPE";
export const GET_RECIPE_NAME = "GET_RECIPE_NAME";
export const FILTER_NAME = "FILTER_NAME";
export const FILTER_SCORE = "FILTER_SCORE";
export const FILTER_DIET = "FILTER_DIET";
export const FILTER_DB_API = "FILTER_DB_API";

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

export const postRecipe = (props) => {
  return async function (dispatch) {
    const postRecipe = await axios.post("http://localhost:3001/recipes", props);
    dispatch({ type: POST_RECIPE, payload: postRecipe });
  };
};

export const getRecipeName = (name) => {
  return async function (dispatch) {
    const dataName = await axios(`http://localhost:3001/recipes?name=${name}`);
    const recipeName = dataName.data;
    dispatch({ type: GET_RECIPE_NAME, payload: recipeName });
  };
};

export const filterName = (payload) => {
  return {
    type: FILTER_NAME,
    payload,
  };
};

export const filterScore = (payload) => {
  console.log(payload);
  return {
    type: FILTER_SCORE,
    payload,
  };
};

export const filterDiets = (payload) => {
  return {
    type: FILTER_DIET,
    payload,
  };
};

export const filterDbApi = (payload) => {
  return {
    type: FILTER_DB_API,
    payload,
  };
};
