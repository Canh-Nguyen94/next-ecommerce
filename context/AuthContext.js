import React, { useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase.config";

export const AuthContext = React.createContext({});

export const useAuth = () => useContext(AuthContext);

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userEmail, password) => {
    signInWithEmailAndPassword(auth, userEmail, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser({ name: user.displayName, email: user.email, id: user.uid });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };

  const register = (userEmail, password) => {
    createUserWithEmailAndPassword(auth, userEmail, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        alert("You are signing out");
      })
      .catch((error) => {
        alert("Somthing have gone wrong");
      });
  };
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          name: user.displayName,
          email: user.email,
          id: user.uid,
        });
      } else {
        setUser(null);
      }
    });
    return () => unsubcribe();
  }, []);
  return (
    <AuthContext.Provider value={{ user, login, register, logOut }}>
      { children }
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
