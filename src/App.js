import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import AddService from './Components/Dashboard/AddService/AddService';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Login from './Components/Config/Login/Login';
import PrivateRoute from './Components/Config/PrivateRoute/PrivateRoute';
import ChosenService from './Components/Home/Home/ChosenService/ChosenService';

export const userContext =  createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [admin, setAdmin] = useState([]);
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser, admin, setAdmin]}>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/addservice'>
          <AddService></AddService>
        </Route>
        <PrivateRoute path='/dashboard'>
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <PrivateRoute path='/placeorder/:id'>
          <ChosenService></ChosenService>
        </PrivateRoute>
      </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
