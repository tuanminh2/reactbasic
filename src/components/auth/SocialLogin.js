import React from "react";

class SocialLogin extends React.Component {
  render() {
    return (
      <div onClick={this.props.googleSignIn} class="google-btn">
        <div class="google-icon-wrapper">
          <img
            class="google-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          />
        </div>
        <p class="btn-text">
          <b>Google SignIn</b>
        </p>
      </div>
    );
  }
}

export default SocialLogin;
