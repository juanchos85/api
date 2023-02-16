import axios from "axios";
require("dotenv").config();
export const GET_RECIPE = "GET_RECIPE";
export const GET_DETAILS = "GET_DETAILS";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const GET_DIETS = "GET_DIETS";
export const SHOW_RECIPES_CREATED = "SHOW_RECIPES_CREATED";
export const DIETS_FILTER = "DIETS_FILTER";
export const SCORE_ORDER_A = "SCORE_ORDER_A";
export const SCORE_ORDER_D = "SCORE_ORDER_D";
export const NAME_ORDER_A = "NAME_ORDER_A";
export const NAME_ORDER_D = "NAME_ORDER_D";
export const DELETE_RECIPE = "DELETE_RECIPE";
export const DELETE_RECIPE_CREATED = "DELETE_RECIPE_CREATED";


const {REACT_APP_API_URL} = process.env;

export function get_recipe(name) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `${REACT_APP_API_URL}/recipes?name=${name}`,
      
      );
      console.log(data, " soy data linea 21");
      return dispatch({ type: GET_RECIPE, payload: data });
    } catch (error) {
      console.log("soy error linea 23 ", error);
      return dispatch({
        type: GET_RECIPE,
        payload: error,
      });
    }
  };
}
export function get_Detail(id) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${REACT_APP_API_URL}/recipes/${id}`);
      console.log("soy details " + data);
      return dispatch({ type: GET_DETAILS, payload: data });
    } catch (error) {
      return dispatch({ type: GET_DETAILS, payload: error });
    }
  };
}

export function create_Recipe(object) {
  return async function (dispatch) {
    try {
      console.log(object, " soy data create")
      const { data } = await axios.post(`${REACT_APP_API_URL}/recipes`, object);
      return dispatch({ type: CREATE_RECIPE, payload: data });
    } catch (error) {
      return dispatch({ type: CREATE_RECIPE, payload: error });
    }
  };
}
export function get_Diets() {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${REACT_APP_API_URL}/diets`);
      return dispatch({ type: GET_DIETS, payload: data });
    } catch (error) {
      return dispatch({ type: GET_DIETS, payload: error });
    }
  };
}

export const deleteRecipe = (id) => {
  return {
    type: DELETE_RECIPE,
    payload: id,
  };
};

export const deleteRecipeCreated = (id) => {
  return {
    type: DELETE_RECIPE_CREATED,
    payload: id,
  };
};

export function showRecipesCreated() {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${REACT_APP_API_URL}/recipesCreated`);
      console.log(data, "soy data");
      return dispatch({ type: SHOW_RECIPES_CREATED, payload: data });
    } catch (error) {
      return dispatch({ type: SHOW_RECIPES_CREATED, payload: error });
    }
  };
}

export function dietsFilter(diet) {
  return async function (dispatch) {
    try {
      return dispatch({ type: DIETS_FILTER, payload: diet });
    } catch (error) {
      return dispatch({ type: DIETS_FILTER, payload: error });
    }
  };
}

export function NameOrderA() {
  return async function (dispatch) {
    try {
      return dispatch({ type: NAME_ORDER_A });
    } catch (error) {
      return dispatch({ type: NAME_ORDER_A, payload: error });
    }
  };
}

export function NameOrderD() {
  return async function (dispatch) {
    try {
      return dispatch({ type: NAME_ORDER_D });
    } catch (error) {
      return dispatch({ type: NAME_ORDER_D, payload: error });
    }
  };
}

export function ScoreOrderD() {
  return async function (dispatch) {
    try {
      return dispatch({ type: SCORE_ORDER_D });
    } catch (error) {
      return dispatch({ type: SCORE_ORDER_D, payload: error });
    }
  };
}

export function ScoreOrderA() {
  return async function (dispatch) {
    try {
      return dispatch({ type: SCORE_ORDER_A });
    } catch (error) {
      return dispatch({ type: SCORE_ORDER_A, payload: error });
    }
  };
}
