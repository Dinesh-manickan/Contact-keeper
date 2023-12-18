// export default AuthState;
import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import {
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_FAILURE, // Corrected typo in import
    // LOGOUT,
    CLEAR_ERRORS
} from '../types';

const AuthState = (props) => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null
    };

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    // Load User
    const loadUser = () => console.log('loaduser');

    // Register User
    const register = async (formData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        try {
            const res = await axios.post('/api/users', formData, config);

            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: REGISTER_FAILURE,
                payload: error.response.data.msg,
            });
        }
    };

    // Login User
    // const login = async (formData) => {
    //     const config = {
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     };

    //     try {
    //         const res = await axios.post('/api/auth', formData, config);

    //         dispatch({
    //             type: LOGIN_SUCCESS,
    //             payload: res.data,
    //         });

    //         loadUser();
    //     } catch (error) {
    //         dispatch({
    //             type: LOGIN_FAILURE, // Corrected typo here
    //             payload: error.response.data.msg,
    //         });
    //     }
    // };


    const login = async (formData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        try {
            const res = await axios.post('/api/auth', formData, config);

            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data,
            });
            loadUser()
        } catch (error) {
            dispatch({
                type: LOGIN_FAILURE, // Corrected typo here
                payload: error.response.data.msg, 
            });
        }
    };

    // Logout
    const logout = () =>{
       dispatch({ type: CLEAR_ERRORS});
    };

    // Clear Errors
    const clearErrors = () => {
        dispatch({ type: CLEAR_ERRORS });
    };

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                error: state.error,
                register,
                loadUser,
                login,
                logout,
                clearErrors, // Corrected typo in function name
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;
