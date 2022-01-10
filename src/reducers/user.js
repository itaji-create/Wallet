// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ADD_DATA } from '../actions/index';

const INITIAL_STATE = {};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_DATA:
    return action.email;
  default:
    return state;
  }
};

export default user;
