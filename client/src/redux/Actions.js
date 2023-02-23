import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";

export const getRecipes = () => {
  return async function (dispatch) {
    const apiData = await axios("https://jsonplaceholder.typicode.com/users");
    const recipes = apiData.data;
    dispatch({ type: GET_RECIPES, payload: recipes });
  };
};
