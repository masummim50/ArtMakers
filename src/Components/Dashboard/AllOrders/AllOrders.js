import React, { useEffect, useState } from 'react';
import SingleOrder from './SingleOrder';

const AllOrders = () => {
  const [allorders, setAllorders] = useState([]);
  useEffect(()=> {
    fetch('http://localhost:5000/allorders')
  .then(res => res.json())
  .then(data => setAllorders(data))
  },[])
  return (
    <div>
      this is orders page for admins
      <h2>Total orders {allorders.length}</h2>
      {
        allorders.map(singleorder=> <SingleOrder singleorder={singleorder}></SingleOrder>)
      }
    </div>
  );
};

export default AllOrders;