import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';

const Navbar = () => {
  const [loggedInUser, setLoggedInUser, admin, setAdmin] = useContext(userContext);
  return (
    <div className='sticky-top bg-dark'>
    <header class="sticky-top">
    <div class="container">
      <nav class="navbar navbar-expand-sm navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand w-50" href="#">
            <h2 className="text-white">ART MAKERS</h2>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item ms-3">
                <Link to='/' class="nav-link text-white active" aria-current="page">Home</Link>
              </li>
              <li class="nav-item ms-3">
                <Link to='/dashboard' class="nav-link text-white" href="#about">Dashboard</Link>
              </li>
              {
                !loggedInUser.email && 
                <li class="nav-item ms-3">
                  <Link to='/login' class="nav-link text-white" tabindex="-1" a>Login</Link>
                </li>
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
    </div>
  );
};

export default Navbar;