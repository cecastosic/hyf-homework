import firebaseInst from "./firebase.js";

export default async function getPrivateContent() {
  const token = await firebaseInst.getAuth().currentUser.getIdToken();
  const header = {
    "Content-Type": "application/json",
    authorization: `Bearer ${token}`
  };
  const result = await fetch("http://localhost:5000/auth", {
    headers: header,
    method: "POST"
  });

  if (result.status !== 200) {
    throw result.statusText;
  } else {
    return result.json();
  }
}
