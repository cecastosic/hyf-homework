import React from "react";
import firebase from "./../../helpers/firebase";

function GoogleOAuth() {
  return (
    <div>
      <button className="sign-in-google" onClick={() => firebase.signInGoogle()}>
      </button>
    </div>
  );
}

export default GoogleOAuth;
