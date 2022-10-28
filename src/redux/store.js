import {applyMiddleware, combineReducers, createStore} from "redux";
import categoriesReducer from "./reducers/categoriesReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import projectReducer from "./reducers/projectReducer";

const reducers = combineReducers({
  categories: categoriesReducer,
  project: projectReducer,
})

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))