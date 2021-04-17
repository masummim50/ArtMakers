import React, { useEffect, useState } from 'react';
import SingleOrder from './SingleOrder';

const AllOrders = () => {
  const [allorders, setAllorders] = useState([]);
  useEffect(()=> {
    fetch('https://frozen-dawn-42451.herokuapp.com/allorders')
  .then(res => res.json())
  .then(data => setAllorders(data))
  },[])
  return (
    <div className='p-5'>
      {
        allorders.map(singleorder=> <SingleOrder singleorder={singleorder}></SingleOrder>)
      }
    </div>
  );
};

export default AllOrders;