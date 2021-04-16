import React from 'react';
import bg1 from '../../../images/bg1.jpg';
import bg2 from '../../../images/bg2.jpg';
import bg3 from '../../../images/bg3.jpg';
import delivery from '../../../images/delivery.jpg';
import login from '../../../images/login.jpg'


const Examples = () => {
  return (
    <>
    <div className="bg-dark text-center mt-5 p-2"><h2 className="text-white">Examples of our work</h2></div>
    <div id="carouselExampleControls" class="carousel slide mt-1" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div className="row" style={{height:"300px"}}>
        <div className="col-md-8 offset-md-2 d-flex justify-content-center">
          <img className="just" style={{height:'300px'}} src={bg1} alt=""/>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div className="row" style={{height:"300px"}}>
        <div className="col-md-8 offset-md-2 d-flex justify-content-center">
          <img className="just" style={{height:'300px'}} src={bg2} alt=""/>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div className="row" style={{height:"300px"}}>
        <div className="col-md-8 offset-md-2 d-flex justify-content-center">
          <img className="just" style={{height:'300px'}} src={bg3} alt=""/>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div className="row" style={{height:"300px"}}>
        <div className="col-md-8 offset-md-2 d-flex justify-content-center">
          <img className="just" style={{height:'300px'}} src={delivery} alt=""/>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div className="row" style={{height:"300px"}}>
        <div className="col-md-8 offset-md-2 d-flex justify-content-center">
          <img className="just" style={{height:'300px'}} src={login} alt=""/>
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