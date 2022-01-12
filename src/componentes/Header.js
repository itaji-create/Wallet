import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, total, currencyField } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">{ email }</span>
          <span data-testid="total-field">{ total === undefined ? 0 : total }</span>
          <span data-testid="header-currency-field">{ currencyField }</span>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  currencyField: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.expense,
  currencyField: state.wallet.exchange,
});

export default connect(mapStateToProps)(Header);
