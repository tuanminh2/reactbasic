import React from "react";
import { connect } from "react-redux";
class SocialLogin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        onClick={() => {
          try {
       
            this.props.googleSignIn();
        
          } catch (err) {
           console.log(err)
          }
        }}
        class="google-btn"
      >
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

export default connect()(SocialLogin);
