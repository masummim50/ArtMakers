import React from 'react';
import { Link } from 'react-router-dom';
import './SingleServices.css'

const SingleService = ({singleService}) => {
  return (
    
    <div className="col-md-4 mb-4">
    <div className="card h-auto shadow card-container">
      <div style={{height:'300px'}} className="img-container text-center w-100 p-2"><img  src={singleService.image} className="h-100 card-img-top" alt="..."/>
      </div>
      <div className="card-body d-flex justify-content-between">
        <h3 className="card-title">{singleService.serviceTitle}</h3>
        <h3 className="card-text">${singleService.price}</h3>
      </div>
      <div className="card-footer">
        <p className="text-success" style={{margin:'0'}}>{singleService.serviceDescription}</p>
        <div className="text-end">
        <Link to={`/placeorder/${singleService._id}`} ><button className="btn btn-success order-btn">Place an Order</button></Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SingleService;