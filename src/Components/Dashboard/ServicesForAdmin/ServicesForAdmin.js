import React, { useEffect, useState } from 'react';
import SingleServiceForAdmin from './SingleServiceForAdmin';

const ServicesForAdmin = () => {
  const [services, setServices] = useState([]);
  useEffect(()=> {
    fetch('https://frozen-dawn-42451.herokuapp.com/services')
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