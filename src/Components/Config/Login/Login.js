import React, { useContext, useEffect } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import Navbar from '../../Shared/Navbar/Navbar';
import { firebaseConfig } from '../firebaseConfig/firebaseConfig';
import { userContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';
import login from '../../../images/login.jpg'

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
      <div className="container">
        <div className="row">
          
          <div className="col-md-6 p-5">
          {
            loggedInUser.email ? <h2 className="text-success">Your are logged in</h2> : <>
            <input type="text" name="email" placeholder="Enter Your Email" id="" className="mb-4 form-control"/>
            <input type="text" name="password" placeholder="Password" id="" className="mb-4 form-control"/>
            <input disabled type="button" name="password" value="Log In" id="" className="btn btn-success mb-4 form-control"/>
            <h4 className="text-center mb-4">Or</h4>
            <button onClick={handleGoogleSignIn} className="btn btn-danger form-control">Login with gmail</button>
            </>
          }
            
            
          </div>
          <div className="col-md-6">
            <img src={login} alt="" className="img-fluid"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;