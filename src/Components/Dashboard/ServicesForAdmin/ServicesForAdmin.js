import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import SingleServiceForAdmin from './SingleServiceForAdmin';

const ServicesForAdmin = () => {
  const [services, setServices] = useState([])
  useEffect(()=> {
    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => setServices(data))
  },[])
  return (
    <div>
      {
        services.map(singleservice => <SingleServiceForAdmin singleservice={singleservice}></SingleServiceForAdmin>)
      }
    </div>
  );
};

export default ServicesForAdmin;