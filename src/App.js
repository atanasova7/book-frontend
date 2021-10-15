import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { Provider } from 'react-redux';
import store from './store';
import routes from './routes'
import Layout from './components/layout/Layout'
import './App.css';
import 'antd/dist/antd.css';

// Check for token
if (localStorage.jwtToken && localStorage.jwtToken !== 'undefined') {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = '/';
  }
}
function App() {
  return (
    <Provider store={store}>
    <Router>
      <Layout>
          <div className="App" style={{background: 'white'}}>
              {routes}
          </div>
      </Layout>    
    </Router>
   </Provider>
  );
}

export default App;
