import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { addData } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      password: '',
      email: '',
    };
    this.onInputPasswordChange = this.onInputPasswordChange.bind(this);
    this.onInputUserEmailChange = this.onInputUserEmailChange.bind(this);
  }

  onInputPasswordChange({ target }) {
    const { value } = target;
    this.setState({ password: value });
  }

  onInputUserEmailChange({ target }) {
    const { value } = target;
    this.setState({ email: value });
  }

  render() {
    const { userEmail, history } = this.props;
    const {
      password,
      email,
    } = this.state;
    const minLength = 6;
    return (
      <form>
        <label htmlFor="userEmail">
          E-mail:
          <input
            data-testid="email-input"
            onChange={ this.onInputUserEmailChange }
            id="userEmail"
            type="email"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            data-testid="password-input"
            id="password"
            onChange={ this.onInputPasswordChange }
          />
        </label>
        <button
          type="button"
          disabled={ !(password.length >= minLength
            && email.includes('@')
            && email.includes('.com')) }
          onClick={ () => {
            history.push('/carteira');
            userEmail(this.state);
          } }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  userEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  userEmail: (state) => dispatch(addData(state)),
});

export default connect(null, mapDispatchToProps)(Login);
