import { createStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux-immer";
import produce from "immer";

// Reducers
import { todosReducer } from "./todosReducer";
import { filterReducer } from "./filterReducer";

const reducer = combineReducers(produce, {
  todos: todosReducer,
  visibilityFilter: filterReducer,
});

export const store = createStore(reducer);

