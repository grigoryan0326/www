import { omit } from "lodash"
import { SET_FAVORITE, DELETE_FAVORITE } from "../constants/actiontypes"
import { getLocalStorage } from "@utils/localStorage"

const initialState = getLocalStorage("store")

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVORITE:
      return {
        ...state,
        ...action.payload,
      }
    case DELETE_FAVORITE:
      return omit(state, action.payload)
    default:
      return state
  }
}

export default favoriteReducer
