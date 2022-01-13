import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrency, addExpense } from '../actions/index';

class Expense extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: {},
    };
  }

  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency('all');
  }

  handleChance = ({ target }) => {
    const { value, name } = target;
    const { currencies } = this.props;
    this.setState({ [name]: value, exchangeRates: currencies });
  }

  onClickButton = () => {
    const { expenseData, getCurrency } = this.props;
    const { id } = this.state;
    expenseData(this.state);
    getCurrency('all');
    this.setState({
      id: id + 1,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: {},
    });
  }

  render() {
    const { currencies } = this.props;
    const { value, description } = this.state;
    return (
      <form>
        <label htmlFor="value-input">
          Valor
          <input
            name="value"
            value={ value }
            onChange={ this.handleChance }
            data-testid="value-input"
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <input
            name="description"
            onChange={ this.handleChance }
            value={ description }
            data-testid="description-input"
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            onClick={ this.handleChance }
            name="currency"
            id="currency"
            data-testid="currency-input"
          >
            {Object.keys(currencies).map((curr) => (
              curr !== 'USDT' && <option key={ curr } data-testid={ curr }>{curr}</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de Pagamento
          <select
            onClick={ this.handleChance }
            name="method"
            id="method"
            data-testid="method-input"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Despesa com:
          <select
            onClick={ this.handleChance }
            name="tag"
            id="tag"
            data-testid="tag-input"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ this.onClickButton }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

Expense.propTypes = {
  currencies: PropTypes.string.isRequired,
  expenseData: PropTypes.func.isRequired,
  getCurrency: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  expenseData: (state) => dispatch(addExpense(state)),
  getCurrency: (curr) => dispatch(fetchCurrency(curr)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expense);
