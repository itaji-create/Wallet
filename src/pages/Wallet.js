import React from 'react';
import Expense from '../componentes/ADD_Expense';
import Header from '../componentes/Header';
import ExpenseTable from '../componentes/ExpenseTable';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Expense />
        <ExpenseTable
          Description="Descrição"
          Tag="Tag"
          Method="Método de pagamento"
          Value="Moeda"
          Currency="Câmbio utilizado"
          ConvertedValue="Valor convertido"
          ConversionCurrency="Moeda de conversão"
          Change="Editar/Excluir"
        />
      </div>
    );
  }
}

export default Wallet;
