import React from 'react';

class Expense extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="value-input">
          Valor
          <input
            data-testid="value-input"
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <input
            data-testid="description-input"
          />
        </label>
        <label htmlFor="currency-input">
          Moeda
          <input
            data-testid="currency-input"
          />
        </label>
        <label htmlFor="payment">
          Método de Pagamento
          <select name="payment" id="payment" data-testid="method-input">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="expense">
          Despesa com:
          <select name="expense" id="expense" data-testid="tag-input">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          type="button"
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

export default Expense;
