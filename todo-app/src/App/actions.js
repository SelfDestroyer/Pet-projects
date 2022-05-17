import * as actionTypes from "./actionTypes";

export const addTodo = (id, text) => {
  return {
    type: actionTypes.ADD_NEW_TODO,
    todo: {
      id,
      text,
      completed: false,
    },
  };
};

export const switchCompleted = (id) => {
  return {
    type: actionTypes.SWITCH_COMPLETED,
    id,
  };
};

export const deleteTodoById = (id) => {
  return {
    type: actionTypes.DELETE_BY_ID,
    id,
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: actionTypes.SET_VISIBILITY_FILTER,
    filter,
  };
};
