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
      {
        allorders.map(singleorder=> <SingleOrder singleorder={singleorder}></SingleOrder>)
      }
    </div>
  );
};

export default AllOrders;