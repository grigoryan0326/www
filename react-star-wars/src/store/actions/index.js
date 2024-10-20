import { SET_FAVORITE, DELETE_FAVORITE } from "../constants/actiontypes"

export const setFavorite = (person) => ({
  type: SET_FAVORITE,
  payload: person,
})

export const deleteFavorite = (personId) => ({
  type: DELETE_FAVORITE,
  payload: personId,
})
