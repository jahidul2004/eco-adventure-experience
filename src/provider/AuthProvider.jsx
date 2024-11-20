import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    GoogleAuthProvider,
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

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const loginWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                console.log("Google Sign-In Success:", result.user);
            })
            .catch((error) => {
                console.error("Error during Google Sign-In:", error.message);
            });
    };

    const logOut = () => {
        signOut(auth).then(() => {
            setUser(null);
        });
    };

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
    };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
