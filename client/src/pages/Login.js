import React, { Component } from "react";
import Helmet from "react-helmet";

import "./css/Login.css";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Alert } from "reactstrap";

import { login } from "../actions/authActions";
import { clearErrors } from "../actions/errorActions";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
    msg: null,
    redirect: false,
    auth: false
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentWillMount() {
    let auth = JSON.parse(this.props.checkIsAuthenticated);
    if (auth != null) {
      this.setState({
        auth: auth
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === "LOGIN_FAIL") {
        this.setState({
          msg: error.msg.msg
        });
      } else {
        this.setState({ msg: null });
      }
    }

    if (isAuthenticated) {
      this.setState({
        redirect: true
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    const { email, password } = this.state;

    const user = {
      email,
      password
    };
    this.props.login(user);
  };

  render() {
    if (this.state.redirect || this.state.auth) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div>
        <Helmet bodyAttributes={{ style: "background-color :#16222a" }} />
        <div className="wrapper-login">
          <div className="body">
            <div className="container">
              <div className="logo">Kitabaca.com Dashboard</div>

              <div className="login-item">
                {this.state.msg ? (
                  <Alert color="danger">{this.state.msg}</Alert>
                ) : null}
                <div className="form form-login">
                  <div className="form-field">
                    <label className="user">
                      <span className="hidden">Email</span>
                    </label>
                    <input
                      id="login-username"
                      type="text"
                      name="email"
                      className="form-input"
                      placeholder="Email"
                      onChange={this.onChange}
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label className="lock">
                      <span className="hidden">Password</span>
                    </label>
                    <input
                      id="login-password"
                      type="password"
                      name="password"
                      className="form-input"
                      placeholder="Password"
                      onChange={this.onChange}
                      required
                    />
                  </div>

                  <div className="form-field">
                    <input
                      type="button"
                      value="Log in"
                      onClick={this.onSubmit}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  checkIsAuthenticated: state.auth.tokenAuth
});

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({ login, clearErrors }, dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
