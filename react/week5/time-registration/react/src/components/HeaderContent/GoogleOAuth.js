import React from "react";
import firebase from "./../../helpers/firebase";

function GoogleOAuth() {
  return (
    <div>
      <button onClick={() => firebase.signInGoogle()}>
        Sign in with Google
      </button>
    </div>
  );
}

export default GoogleOAuth;
