import { app } from "../../firebase.config"
import { useSelector, useDispatch } from "react-redux"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { login as userLogin } from "../store/authSlice"
import { logout as userLogout } from "../store/authSlice"

const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export const googleLogin = async (userData, dispatch, navigate) => {
    try {
        if(!userData){
            const response = await signInWithPopup(auth, provider);
            const userData = response.user.providerData[0];
            dispatch(userLogin(userData));
            localStorage.setItem('user', JSON.stringify(userData));
        }
    } catch (error) {
        console.log("Error in googleLogin: ", error)
    }
}

export const googleLogout = async (dispatch, navigate) => {
    try {
        await auth.signOut();
        dispatch(userLogout(null));
        localStorage.removeItem('user');
        navigate('/');
    } catch (error) {
        console.log("Error in googleLogout: ", error)
    }
}