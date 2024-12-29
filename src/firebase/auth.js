import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from "./firebase";
import { GoogleAuthProvider } from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (EmailAuthCredential, password) => {
    return createUserWithEmailAndPassword(auth, EmailAuthCredential, password);
};

export const doSignInWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    return result
};

export const doSignOut = () => {
    return auth.signOut();
};