import { useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import React from "react";
const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [isEmailUser, setIsEmailUser] = useState(false);
    const [isGoogleUser, setIsGoogleUser] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, initializeUser);
        return Unsubscribe;
    }, [])

    async function initializeUser(user) {
        if (user) {
            setCurrentUser(user)
            const isEmail = user.providerData.some(
                (provider) => provider.providerId === "password"
            );
            setIsEmailUser(isEmail);
            setUserLoggedIn(true);
        }
        else {
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false)
    }

    const value = {
        userLoggedIn,
        isEmailUser,
        isGoogleUser,
        currentUser,
        setCurrentUser
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );

}