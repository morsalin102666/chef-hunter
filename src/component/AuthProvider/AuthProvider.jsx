import { createContext, useState } from "react";
import app from "../Firebase/FirebaseData";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState([])

    // ============ sign in widt email or password ================
    const createNewAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }



    // ============ Auth information pass ================
    const authInfo = {
        user,
        createNewAccount
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