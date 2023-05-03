import { createContext, useState } from "react";
import app from "../Firebase/FirebaseData";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState([])

    // ============ sign up with email or password ================
    const createNewAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    // ============ sign in with email or password ================
    const loginAccount = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    // ============ sign in with google ================
    const signinGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // ============ sign in with google ================
    const signinGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }

    // ============ Auth information pass ================
    const authInfo = {
        user,
        createNewAccount,
        loginAccount,
        signinGoogle,
        signinGithub
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