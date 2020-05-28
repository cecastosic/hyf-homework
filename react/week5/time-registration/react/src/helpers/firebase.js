import firebaseConfig from "../config/config";
import * as firebase from "firebase/app";
import "firebase/auth";

function Firebase() {
  const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider()
  };
  return {
    init() {
      firebase.initializeApp(firebaseConfig);
    },
    getAuth() {
      return firebase.auth();
    },
    async signInEmailAndPassword(email, pass) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, pass);
      } catch (err) {
        console.log(err);
      }
    },
    async signInGoogle() {
      try {
        await firebase.auth().signInWithPopup(providers.googleProvider);
      } catch (err) {
        console.log(err);
      }
    },
    async signOut() {
      await firebase.auth().signOut();
    }
  };
}

export default Firebase();
