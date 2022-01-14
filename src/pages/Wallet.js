import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Expense from '../componentes/ADD_Expense';
import Header from '../componentes/Header';
import ExpenseTable from '../componentes/ExpenseTable';

class Wallet extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <Header />
        <Expense />
        <ExpenseTable
          Description="Descrição"
          Tag="Tag"
          Method="Método de pagamento"
          Value="Valor"
          Currency="Moeda"
          exchange="Câmbio utilizado"
          ConvertedValue="Valor convertido"
          ConversionCurrency="Moeda de conversão"
          Change="Editar/Excluir"
          role="columnheader"
        />
        {expenses.map((expense) => (
          <ExpenseTable
            key={ expense.id }
            Description={ expense.description }
            Tag={ expense.tag }
            Method={ expense.method }
            Value={ expense.value }
            Currency={ expense.exchangeRates[expense.currency].name }
            exchange={ (expense.exchangeRates[expense.currency].ask * 1).toFixed(2) }
            ConvertedValue={
              (expense.exchangeRates[expense.currency].ask * expense.value).toFixed(2)
            }
            ConversionCurrency="Real"
            Change="Editar/Excluir"
            role="cell"
          />
        ))}
      </div>
    );
  }
}

Wallet.propTypes = {
  expenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);
