import React from 'react';
import Expense from '../componentes/ADD_Expense';
import Header from '../componentes/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Expense />
      </div>
    );
  }
}

export default Wallet;
