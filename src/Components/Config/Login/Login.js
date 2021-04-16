import React, { useContext, useEffect } from 'react';
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
  useEffect(()=> {
    fetch('http://localhost:5000/admins')
    .then(res => res.json())
    .then(data => setAdmin(data))
  },[])
  const history = useHistory();
  const location = useLocation();
  const {from} = location.state || {from: {pathname: '/'}}
  const [loggedInUser, setLoggedInUser, admin, setAdmin] = useContext(userContext);
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn =()=> {
        firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        setLoggedInUser(result.user)
        history.replace(from);
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