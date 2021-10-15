import React, { Component } from 'react';
import { Route, Switch, Redirect, NotFoundRoute } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import Login from './components/auth/Login';
import AccountsBooks from './components/books/AccountsBooks';
import AddBook from './components/books/AddBook';
import NotFound from './components/not-found/NotFound';


export default [
     <Switch key="welcome">   
     <Route exact path="/" component={Login} key="login"/>,
     <PrivateRoute exact path="/books" component={AccountsBooks} key="books"/>
     <PrivateRoute exact path="/add/book" component={AddBook} key="add-book"/>
     <Route exact component={NotFound} key="notFound"/>  
     </Switch> 
];