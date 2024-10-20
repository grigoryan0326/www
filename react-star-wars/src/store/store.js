import { createStore } from "redux"
import rootReducur from "./reducers"
import { setLocalStorage } from "@utils/localStorage"

const store = createStore(
  rootReducur,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
  setLocalStorage('store', store.getState().favoriteReducer)

})

export default store
