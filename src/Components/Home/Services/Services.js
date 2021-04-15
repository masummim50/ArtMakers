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
    <div className="container">
      Our services
      <h2>{services.length}</h2>
      <div className="row mb-5">
        {
          services.map(singleService => <SingleService singleService={singleService}></SingleService>)
        }
      </div>
    </div>
  );
};

export default Services;