import React, { Component, createContext } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import axios from "axios";
import { auth } from "../config/fb.js";
import { postAPI } from "../utils/fetchData.js";
import { connect } from "react-redux";
export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    user: {},
    accessToken: "",
  };

  changeAuth(user, accessToken) {
    this.setState({ user, accessToken });
  }
  googleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const res = await signInWithPopup(auth, provider);
      const idToken = res.user.accessToken;
      this.props.dispatch({ type: "ALERT", payload: { loading: true } });
      const loginRes = await postAPI("auth/google_login", { idToken });
      const { user, accessToken } = loginRes.data;
      console.log("login response from server", loginRes);
      this.setState({ user, accessToken });
      this.props.dispatch({ type: "ALERT", payload: { loading: false } });
    } catch (err) {
      console.log(err);
    }
  };
  signOut = () => {
    this.setState({ user: {}, accessToken: "" });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          changeAuth: this.changeAuth,
          googleSignIn: this.googleSignIn,
          signOut: this.signOut,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default connect()(AuthContextProvider);
