import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, BRL, total } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">
            E-mail:
            { email }
          </p>
          <p data-testid="total-field">
            Despesa Total:  R$
            { total === undefined ? 0 : total.toFixed(2) }
          </p>
          <p data-testid="header-currency-field">{ BRL }</p>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  BRL: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  BRL: state.wallet.BRL,
  total: state.wallet.sum,
});

export default connect(mapStateToProps)(Header);
