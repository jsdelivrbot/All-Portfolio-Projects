import { combineReducers } from "redux";
import { Recieve_Memes, New_Memes } from "../actions";

function memes(state = [], action) {
  switch (action.type) {
    case Recieve_Memes:
      return action.memes;
    default:
      return state;
  }
}

function myMemes(state = [], action) {
  switch (action.type) {
    case New_Memes:
      return [...state, action.meme];
    default:
      return state;
  }
}

const rootReducer = combineReducers({ memes, myMemes });

export default rootReducer;
