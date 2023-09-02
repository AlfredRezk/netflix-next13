"use client";
import { initializeApp } from "firebase/app";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  getAuth,
} from "firebase/auth";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyD0IU9M7PlY7yqJTETR_HNy7-3rPJ6KygY",
  authDomain: "next-app-65bc5.firebaseapp.com",
  projectId: "next-app-65bc5",
  storageBucket: "next-app-65bc5.appspot.com",
  messagingSenderId: "683221553313",
  appId: "1:683221553313:web:cc6926b6808f5801a6a0e0",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const router = useRouter();
  useEffect(() => {
    userObserver();
  }, []);


  const createUser = async (email, password, displayName) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: displayName });
      router.push("/profile");
      toast.success("Registered successfully!");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const signIn = async (email, password) => {
    try {
     await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      router.push("/profile");
      toast.success("Logged in successfully!");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const logOut = () => {
    signOut(auth);
    toast.success("Logged out successfully!");
  };

  const userObserver = () => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const { email, displayName, photoURL } = currentUser;
        setCurrentUser({ email, displayName, photoURL });
        sessionStorage.setItem(
          "user",
          JSON.stringify({ email, displayName, photoURL })
        );
      } else {
        setCurrentUser(false);
        sessionStorage.clear();
      }
    });
  };


  const signupProvider = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      router.push("/profile");
      toast.success("Logged in successfully!");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const forgotPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);

      toast.warn("Please check your mail box!");
    } catch (error) {
      toast.error(err.message);
    }
  };

  const values = { currentUser, createUser, signIn, logOut, signupProvider, forgotPassword};
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;