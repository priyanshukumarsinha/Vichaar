// Store for authentication
import { createSlice } from '@reduxjs/toolkit'
import { fetchUser } from '../fetchLocalStorageData'

const userInfo = fetchUser()

export const initialState = {
    user : userInfo, // initially no user, hence null
    authStatus : userInfo ? true : false
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        login : (state, action) => {
            state.user = action.payload
            state.authStatus = true;
        },
        logout : (state) => {
            state.user = null
            state.authStatus = false;
        }
    }
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer