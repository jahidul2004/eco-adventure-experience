import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    GoogleAuthProvider,
    sendPasswordResetEmail,
    updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateUserProfile = (userData) =>{
        return updateProfile(auth.currentUser, userData);
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                console.log("Google Sign-In Success:", result.user);
            })
            .catch((error) => {
                console.error("Error during Google Sign-In:", error.message);
            });
    };

    const logOut = () => {
        return signOut(auth).then(() => {
            setUser(null);
        });
    };

    const forgetPassword = (email) =>{
        return sendPasswordResetEmail(auth, email);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const data = {
        user,
        setUser,
        createNewUser,
        loginUser,
        logOut,
        loginWithGoogle,
        forgetPassword,
        updateUserProfile,
    };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
