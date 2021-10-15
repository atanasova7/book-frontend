//import axios from 'axios';
import client from '../actions/client';

const setAuthToken = token => {
  console.log(token)
  if (token) {
    // Apply to every request
    client.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  } else {
    // Delete auth header
    delete client.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
