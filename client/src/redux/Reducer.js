import {
  GET_RECIPES,
  GET_RECIPE,
  GET_DIETS,
  POST_RECIPE,
  GET_RECIPE_NAME,
  FILTER_NAME,
  FILTER_SCORE,
  FILTER_DIET,
  FILTER_DB_API,
} from "./Actions";

const initialState = {
  recipes: [],
  recipes2: [],
  recipe: [],
  diets: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return { ...state, recipes: action.payload, recipes2: action.payload };
    case GET_RECIPE:
      return { ...state, recipe: action.payload };
    case GET_DIETS:
      return { ...state, diets: action.payload };
    case POST_RECIPE:
      return { ...state };
    case GET_RECIPE_NAME:
      return { ...state, recipes: action.payload };
    case FILTER_NAME:
      let resultado = [];
      if (action.payload === "A-Z") {
        resultado = state.recipes.sort((a, b) => {
          if (a.name > b.name) return 1;
          else if (a.name < b.name) return -1;
          else return 0;
        });
      } else if (action.payload === "Z-A") {
        resultado = state.recipes.sort((a, b) => {
          if (a.name > b.name) return -1;
          else if (a.name < b.name) return 1;
          else return 0;
        });
      }
      return { ...state, recipes: [...resultado] };
    case FILTER_SCORE:
      let result = [];
      if (action.payload === "MAX") {
        result = state.recipes.sort((a, b) => {
          if (a.healthScore > b.healthScore) return -1;
          if (a.healthScore < b.healthScore) return 1;
          return 0;
        });
      } else if (action.payload === "MIN") {
        result = state.recipes.sort((a, b) => {
          if (a.healthScore < b.healthScore) return -1;
          if (a.healthScore > b.healthScore) return 1;
          return 0;
        });
      }
      return { ...state, recipes: [...result] };
    case FILTER_DIET:
      const recipes2 = state.recipes2;
      const filtroDiet =
        action.payload === "All"
          ? recipes2
          : recipes2.filter((e) => e.diets.includes(action.payload));
      return {
        ...state,
        recipes: [...filtroDiet],
      };
    case FILTER_DB_API:
      const recipe2 = state.recipes2;
      let dbApi = [];
      if (action.payload === "DB") dbApi = recipe2.filter((e) => e.created);
      else if (action.payload === "API")
        dbApi = recipe2.filter((e) => !e.created);
      else dbApi = recipe2;
      if (!dbApi.length) dbApi.push("Not Found");
      return { ...state, recipes: dbApi };
    default:
      return { ...state };
  }
};

export default rootReducer;
