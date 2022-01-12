import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, BRL, total } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">{ email }</span>
          <span data-testid="total-field">
            { total === undefined ? 0 : total }
          </span>
          <span data-testid="header-currency-field">{ BRL }</span>
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
