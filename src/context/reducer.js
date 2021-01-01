import axios from "axios";
import * as actionTypes from "./actionTypes";

const rootReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOAD_All_USERS:
      console.log('LOAD_All_USERS')
      const newState = { ...state };
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          newState.users = response.data;
        });
      console.log("NewState", newState);
      return newState;

    case actionTypes.ADD_USER:
      return {
        posts: [...state.posts],
        users: [...state.users, action.value],
      };
    default:
      return state;
  }
};

export default rootReducer;
