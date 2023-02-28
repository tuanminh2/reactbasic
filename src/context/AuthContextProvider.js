import React, { Component, createContext } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../config/fb.js";
export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    user: {},
  };

  changeUser = (newUser) => {
    this.setState({ user: newUser });
  };

  componentDidMount() {
    this.authUnsub = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        this.setState({ user });
        user.getIdToken().then((token) => console.log("idToken", token));
      } else {
        this.setState({ user: null });
      }
    });

    this.authUnsub();
  }
  async googleSignIn() {
    const provider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, provider);

  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          changeUser: this.changeUser,
          googleSignIn: this.googleSignIn,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
