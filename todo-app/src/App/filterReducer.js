import * as actionTypes from "./actionTypes";

const initialState = "all";

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_VISIBILITY_FILTER:
      return (state = action.filter);
    default:
      return state;
  }
};
