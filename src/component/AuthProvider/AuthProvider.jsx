import { createContext, useEffect, useState } from "react";
import app from "../Firebase/FirebaseData";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

    // ============ sign up with email or password ================
    const createNewAccount = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    
    // ============ sign in with email or password ================
    const loginAccount = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    // ============ sign in with google ================
    const signinGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // ============ sign in with google ================
    const signinGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    
    // ============ sign out account ================
    const logOut = () => {
        return signOut(auth)
    }

    // ============ User set state ================
    useEffect(() => {
        const unSuscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unSuscribe();
        }
    }, [])


    // ============ Auth information pass ================
    const authInfo = {
        user,
        createNewAccount,
        updateUserProfile,
        loginAccount,
        signinGoogle,
        signinGithub,
        logOut,
        loading
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );  
};

export default AuthProvider;