import React from 'react';

const MySingleOrder = ({singleorder}) => {
  const date = singleorder.orderPlacedOn;
  return (
    <div className="row mb-4 shadow d-flex align-items-center">
      <div className="col-md-6">
        <h6>{singleorder.orderType}</h6>
        <p>Paid: ${singleorder.orderCost}</p>
        <h6>Order Placed On: {date}</h6>
      </div>
      <div className="col-md-6">
        <h3>Status: {singleorder.orderStatus}</h3>
      </div>
    </div>
  );
};

export default MySingleOrder;