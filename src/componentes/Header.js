import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, total, currencyField } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">{ total === undefined ? 0 : total }</p>
          <p data-testid="header-currency-field">{ currencyField }</p>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
  total: PropTypes.number,
  currencyField: PropTypes.string,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.expense,
  currencyField: state.wallet.exchange,
});

export default connect(mapStateToProps)(Header);
