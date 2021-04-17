import React from 'react';
import ex1 from '../../../images/ex1.jpg';
import ex2 from '../../../images/ex2.jpg';
import ex3 from '../../../images/ex3.jpg';
import ex4 from '../../../images/ex4.jpg';
import ex5 from '../../../images/ex5.jpg';
import ex6 from '../../../images/ex6.jpg';
import delivery from '../../../images/delivery.jpg';
import login from '../../../images/login.jpg'


const Examples = () => {
  return (
    <>
    <div className="bg-dark text-center mt-5 p-2"><h2 className="brand-text">Examples of our work</h2></div>
    <div id="carouselExampleControls" class="carousel slide mt-1" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div className="row" style={{height:"300px"}}>
        <div className="col-md-8 offset-md-2 d-flex justify-content-center">
          <img className="just" style={{height:'300px'}} src={ex1} alt=""/>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div className="row" style={{height:"300px"}}>
        <div className="col-md-8 offset-md-2 d-flex justify-content-center">
          <img className="just" style={{height:'300px'}} src={ex2} alt=""/>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div className="row" style={{height:"300px"}}>
        <div className="col-md-8 offset-md-2 d-flex justify-content-center">
          <img className="just" style={{height:'300px'}} src={ex3} alt=""/>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div className="row" style={{height:"300px"}}>
        <div className="col-md-8 offset-md-2 d-flex justify-content-center">
          <img className="just" style={{height:'300px'}} src={ex4} alt=""/>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div className="row" style={{height:"300px"}}>
        <div className="col-md-8 offset-md-2 d-flex justify-content-center">
          <img className="just" style={{height:'300px'}} src={ex5} alt=""/>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div className="row" style={{height:"300px"}}>
        <div className="col-md-8 offset-md-2 d-flex justify-content-center">
          <img className="just" style={{height:'300px'}} src={ex6} alt=""/>
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon bg-dark rounded" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon bg-dark rounded" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div></>
  );
};

export default Examples;