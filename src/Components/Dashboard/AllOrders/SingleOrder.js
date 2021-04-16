import React from 'react';

const SingleOrder = ({singleorder}) => {
  return (
    <div className="row mb-4 shadow">
      <div className="col-md-6">
        <h6>{singleorder.orderType}</h6>
        <p>{singleorder.orderCost}</p>
        <h6>Order by: {singleorder.buyerName}</h6>
        <h6>Order status: {singleorder.orderStatus}</h6>
      </div>
      <div className="col-md-6">
        <div className="status d-flex justify-content-between">
          <button className="btn btn-info">Start</button>
          <button className="btn btn-success">Complete</button>
        </div>
      </div>
    </div>
  );
};

export default SingleOrder;