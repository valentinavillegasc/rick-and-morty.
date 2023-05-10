import { ADD_FAVORITE, REMOVE_FAV, FILTER, ORDER } from "./action-types";
import axios from "axios";

export const addFavorite = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/favorites/";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);

      if (!data.length) throw Error("No hay favoritos");

      return dispatch({
        type: ADD_FAVORITE,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const removeFavorite = (id) => {
  const endpoint = `http://localhost:3001/rickandmorty/favorites/${id}`;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);

      if (!data.length) throw Error("No hay favoritos");

      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (order) => {
  return { type: ORDER, payload: order };
};

//Promesas antes de async
/* export const addFavorite = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/favorites/";
  return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: ADD_FAVORITE,
        payload: data,
      });
    });
  };
};

export const removeFavorite = (id) => {
  const endpoint = `http://localhost:3001/rickandmorty/favorites/${id}`;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    });
  };
}; */
