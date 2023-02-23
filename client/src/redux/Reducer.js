import { GET_RECIPES, GET_RECIPE } from "./Actions";

const initialState = {
  recipes: [],
  recipe: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return { ...state, recipes: action.payload };
    case GET_RECIPE:
      return { ...state, recipe: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
