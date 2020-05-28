import React, { createContext, useState, useEffect } from "react";
import Header from "./components/Header";
import Shifts from "./components/Shifts";
import firebaseInst from "./helpers/firebase";
import "./App.css";

const UserContext = createContext({ userUid: "" });

function App() {
  const [userState, setUserState] = useState(null);
  const [userUid, setUserUid] = useState("");
  const [userType, setUserType] = useState("");

  const fetchUserType = async token => {
    const header = {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    };

    return await fetch("/auth", {
      headers: header,
      method: "GET"
    })
      .then(data => data.json())
      .catch(error => console.log(error));
  };

  useEffect(() => {
    firebaseInst.init();
    firebaseInst.getAuth().onAuthStateChanged(async function(user) {
      if (user) {
        setUserState(user);
        setUserUid(user.uid);
        const token = await user.getIdToken();
        const { userType: type } = await fetchUserType(token);
        setUserType(type);
      } else {
        setUserState(null);
      }
    });
  }, []);
  return (
    <UserContext.Provider
      value={{ userState, setUserState, userUid, setUserUid, userType }}
    >
      <Header />
      <Shifts />
    </UserContext.Provider>
  );
}

export default App;
export { UserContext };
