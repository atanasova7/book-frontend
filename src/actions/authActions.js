import client from './client';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { message } from 'antd'
import { SET_CURRENT_USER } from './types';

export const loginUser = (userData, history) => dispatch => {
  return  client
            .post('/api/auth/login', userData)
            .then(res => {
                // Save to localStorage
                const {access_token} = res.data;
                // Set token to ls
                localStorage.setItem('jwtToken', access_token);
                // Set token to Auth header
                setAuthToken(access_token);
                // Decode token to get user data
                const decoded = jwt_decode(access_token);
                // Set current user
                dispatch(setCurrentUser(decoded));
                history.push('/books')
            })
            .catch(err => {
                message.error('Error!')
            });
};
// Set logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

// Log user out
export const logoutUser = () => dispatch => {
        // Remove token from localStorage
        localStorage.removeItem('jwtToken');
        // Remove auth header for future requests
        setAuthToken(false);
        // Set current user to {} which will set isAuthenticated to false
        dispatch(setCurrentUser({}));
        window.location = '/'
    };
