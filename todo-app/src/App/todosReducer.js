import * as actionTypes from "./actionTypes.js";

const initialState = [
  { id: 1, text: "Read the book", completed: true },
  { id: 2, text: "Go to the market", completed: false },
  { id: 3, text: "Go for a walk with friend", completed: true },
  { id: 4, text: "Play guitar", completed: false },
];

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NEW_TODO:
      return [...state, action.todo];

    case actionTypes.DELETE_BY_ID:
      return [...state.filter((el) => el.id !== action.id)];

    case actionTypes.SWITCH_COMPLETED:
      const todo = state.find((el) => el.id === action.id);

      todo.completed = !todo.completed;

      return state;
    default:
      return state;
  }
};
