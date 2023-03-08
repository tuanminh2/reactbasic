import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginPass from "../components/auth/LoginPass";
import { AuthContext } from "../context/AuthContextProvider";
import { ThemeContext } from "../context/ThemeContextProvider";

import SocialLogin from "../components/auth/SocialLogin";
import { withRouter } from "../components/global/withRouter";
class Login extends React.Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(authContextState) => {
          return (
            <ThemeContext.Consumer>
              {(ThemeContextState) => {
                const { active } = ThemeContextState;
                const theme = ThemeContextState[active];
                return (
                  <div
                    style={{
                      backgroundColor: theme.bodyColor,
                      height: "100vh",
                    }}
                  >
                    <div
                      className="auth_page"
                      style={{
                        backgroundColor: theme.bodyColor,
                        color: "black",
                      }}
                    >
                      <div
                        className="auth_box"
                       
                      >
                        <h3 className="text-uppecase text-center mb-4">
                          LOGIN
                        </h3>
                        <SocialLogin
                          navigate={this.props.router.navigate}
                          googleSignIn={authContextState.googleSignIn}
                        ></SocialLogin>
                        <LoginPass />

                        <small
                          className="row-auto my-2 text-primary"
                          style={{ cursor: "pointer" }}
                        >
                          <Link to="/forgot_password" className="">
                            Forgot password?
                          </Link>
                        </small>

                        <p>
                          You don't have an account?
                          <Link to="/register"> Register now</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }}
            </ThemeContext.Consumer>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default withRouter(Login);
