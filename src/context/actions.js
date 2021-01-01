import * as actionTypes from './actionTypes';

export const testAction = () => {
  return {
    type: actionTypes.TEST,
  };
};

export const addUser = (user) => {
  return {
    type: actionTypes.ADD_USER,
    value: user,
  };
};
export const loadAllUsers = () => {
  console.log('loadAllUsers');
  return {
    type: actionTypes.LOAD_All_USERS,
  };
};

