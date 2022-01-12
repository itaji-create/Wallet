// Coloque aqui suas actions
// action user
export const ADD_DATA = 'ADD_DATA';

export const addData = (email) => ({ type: ADD_DATA, email });

// action wallet
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const addExpense = (payload) => ({
  type: ADD_EXPENSE, payload,
});

// request API
export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
export const RECEIVE_CURRENCY = 'RECEIVE_CURRENCY';

const requestCurrency = () => ({ type: REQUEST_CURRENCY });

const receiveCurrency = (currency) => ({
  type: RECEIVE_CURRENCY,
  currency,
});

export const fetchCurrency = (curr) => (dispatch) => {
  dispatch(requestCurrency());
  return fetch(`https://economia.awesomeapi.com.br/json/${curr}`)
    .then((response) => response.json())
    .then((currency) => dispatch(receiveCurrency(currency)));
};
