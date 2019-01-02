export const createStore = (state, storeChange) => {
  const store = state || {};
  const dispatch = (action) => {
    storeChange(state, action)
  }
  return { store, dispatch }
}