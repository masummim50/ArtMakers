import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <header class="sticky-top">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand w-50" href="#">
            <h2>Logo</h2>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item ms-3">
                <Link to='/' class="nav-link active" aria-current="page">Home</Link>
              </li>
              <li class="nav-item ms-3">
                <Link to='/dashboard' class="nav-link" href="#about">Dashboard</Link>
              </li>
              <li class="nav-item ms-3">
                <Link to='/login' class="nav-link" tabindex="-1" a>Login</Link>
              </li>
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