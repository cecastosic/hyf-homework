import React, { useState } from "react";
import firebase from "./../../helpers/firebase";

function EmailPassAuth() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div>
      <form>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={pass}
          onChange={event => setPass(event.target.value)}
        />
        <button
          onClick={event => {
            event.preventDefault();
            firebase.signInEmailAndPassword(email, pass);
          }}
        >
          Sign in
        </button>
      </form>
    </div>
  );
}

export default EmailPassAuth;
