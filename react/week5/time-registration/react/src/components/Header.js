import React, { useContext } from "react";
import { UserContext } from "./../App";
import firebase from "./../helpers/firebase";

import GoogleOAuth from "./HeaderContent/GoogleOAuth";
import EmailPassAuth from "./HeaderContent/EmailPassAuth";

function Header() {
  const { userState, setUserState, setUserUid } = useContext(UserContext);

  return (
    <section className="header">
      <h1>Shift manager app</h1>
      {userState ? (
        <button
          onClick={() => {
            firebase.signOut();
            setUserState("");
            setUserUid("");
          }}
        >
          Sign out
        </button>
      ) : (
        <>
          <GoogleOAuth />
          <p>or sign in with email and password</p>
          <EmailPassAuth />
        </>
      )}
    </section>
  );
}

export default Header;
