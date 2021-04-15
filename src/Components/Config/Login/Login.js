import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import Navbar from '../../Shared/Navbar/Navbar';
import { firebaseConfig } from '../firebaseConfig/firebaseConfig';
import { userContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
  if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
  }
  const history = useHistory();
  const location = useLocation();
  const {from} = location.state || {from: {pathname: '/'}}
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn =()=> {
        firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        setLoggedInUser(result.user)
        history.replace(from)
      }).catch((error) => {
        console.log(error)
      });
  }
  return (
    <div>
      <Navbar></Navbar>
      <button onClick={handleGoogleSignIn} className="btn btn-danger">Login with gmail</button>
    </div>
  );
};

export default Login;