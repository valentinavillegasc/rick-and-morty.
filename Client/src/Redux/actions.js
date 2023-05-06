import { ADD_FAVORITE, REMOVE_FAV, FILTER, ORDER } from "./action-types";
import axios from "axios";

export const addFavorite = (character) => {
  const endpoint = "http://localhost:3000/rickandmorty/favorites/";
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
  const endpoint = "http://localhost:3000/rickandmorty/favorites/" + id;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    });
  };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (order) => {
  return { type: ORDER, payload: order };
};
