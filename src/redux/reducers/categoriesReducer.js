const SET_CATEGORIES_DATA = 'SET_CATEGORIES_DATA'

const defaultState = {
  categories: [],
}

export default function categoriesReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_CATEGORIES_DATA:
      return {...state, categories: action.payload}
    default:
      return state
  }
}

export const getCategories = (data) => ({type: SET_CATEGORIES_DATA, payload: data})