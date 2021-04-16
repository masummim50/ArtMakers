import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => setServices(data))
  },[])
  return (
    <div>
      <div className="bg-dark"><h2 className="text-white text-center p-5">Our Services</h2></div>
    <div className="container">
      <div className="row mb-5">
        {
          services.map(singleService => <SingleService singleService={singleService}></SingleService>)
        }
      </div>
    </div></div>
  );
};

export default Services;