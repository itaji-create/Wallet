import { RECEIVE_CURRENCY, ADD_EXPENSE } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  expenses: [],
  BRL: 'BRL',
  currencies: [],
  sum: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_CURRENCY:
    return {
      ...state,
      currencies: action.currency,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
      sum: state.sum
        + ((action.payload.value)
        * (action.payload.exchangeRates[action.payload.currency].ask)),
    };
  default:
    return state;
  }
};

export default wallet;
