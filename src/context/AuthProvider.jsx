import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(true)

  const signUp = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const google = () => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };

 const forgotPassword =(email)=>{
    sendPasswordResetEmail(auth,email)
  }

  const updateUser = (updateprofile) => {
    setLoading(true)
    return updateProfile(auth.currentUser, updateprofile);
  };
  //signOut 
  const signout =()=>{
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    signUp,
    signIn,
    google,
    user,
    setUser,
    updateUser,
    signout,
    loading,
    forgotPassword
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
