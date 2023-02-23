import { GET_RECIPES, GET_RECIPE, GET_DIETS } from "./Actions";

const initialState = {
  recipes: [],
  recipe: [],
  diets: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return { ...state, recipes: action.payload };
    case GET_RECIPE:
      return { ...state, recipe: action.payload };
    case GET_DIETS:
      return { ...state, diets: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
