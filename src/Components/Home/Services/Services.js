import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(()=>{
    fetch('https://frozen-dawn-42451.herokuapp.com/services')
    .then(res => res.json())
    .then(data => setServices(data))
  },[])
  return (
    <div>
      <div className="bg-dark"><h2 className="brand-text text-center p-3">Our Services</h2></div>
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