import React, { Component, createContext } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import axios from "axios"
import { auth } from "../config/fb.js";
import { postAPI } from "../utils/fetchData.js";
export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    user: {},
    accessToken: ""

  };


  changeAuth(user, accessToken) {
    this.setState({ user, accessToken })
  }
  googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, provider);
    const idToken = res.user.accessToken
    const loginRes = await postAPI("auth/google_login", { idToken })
    const { user, accessToken } = loginRes.data
    this.setState({ user, accessToken })


  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          changeAuth: this.changeAuth,
          googleSignIn: this.googleSignIn,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
