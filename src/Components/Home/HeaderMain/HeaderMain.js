import React from 'react';
import bg1 from '../../../images/bg1.jpg';
import bg2 from '../../../images/bg2.jpg';
import bg3 from '../../../images/bg3.jpg';
import './HeaderMain.css'

const HeaderMain = () => {
  return (
  <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner container">
    <div class="carousel-item active" data-bs-interval="10000">
      <div className="row p-5">
        <div className="col-md-6 p-5 d-flex flex-column justify-content-center">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p></div>
        <div className="col-md-6"><img src={bg1} class="d-block w-100 img-fluid header-img" alt="..."/></div>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
    <div className="row p-5">
        <div className="col-md-6 p-5 d-flex flex-column justify-content-center">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p></div>
        <div className="col-md-6"><img src={bg2} class="d-block w-100 img-fluid header-img" alt="..."/></div>
      </div>
    </div>
    <div class="carousel-item">
    <div className="row p-5">
        <div className="col-md-6 p-5 d-flex flex-column justify-content-center">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p></div>
        <div className="col-md-6"><img src={bg3} class="d-block w-100 img-fluid header-img" alt="..."/></div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  );
};

export default HeaderMain;