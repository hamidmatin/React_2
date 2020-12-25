import { ADD_USER, LOAD_All_USERS, TEST } from "./actionTypes";

export const testAction = () => {
  return {
    type: TEST,
  };
};

export const addUser = (user)=>{
    return{
        type: ADD_USER,
        value: user
    }
}
export function loadAllUsers() {
  return {
    type: LOAD_All_USERS,
  };
}

async function getAllUsers() {
  const users = await fetch('https://jsonplaceholder.typicode.com/users').then(
    (response) => response.json
  );
  return users;
}
