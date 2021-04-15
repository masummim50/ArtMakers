import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const Sidebar = () => {
  let {path, url}= useRouteMatch()
  return (
    <div style={{height:'100vh', backgroundColor:'red', margin:'0'}} className="col-md-2 position-fixed">
      <div style={{height:'100vh'}} className="d-flex flex-column justify-content-between">
        <div className="top-links p-5 ">
          <div className="mb-3"><Link className="text-white text-decoration-none" to='/'>Home</Link></div>
          <div className="mb-3"><Link className="text-white text-decoration-none" to={`${url}/review`}>Review</Link></div>
          <div className="mb-3"><Link className="text-white text-decoration-none" to={`${url}/services`}>Services</Link></div>
          <div className="mb-3"><Link className="text-white text-decoration-none" to={`${url}/addservice`}>Add Service</Link></div>
          <div className="mb-3"><Link className="text-white text-decoration-none" to={`${url}/addadmin`}>Add Admin</Link></div>
          <div className="mb-3"><Link className="text-white text-decoration-none" to={`${url}/myorders`}>My Orders</Link></div>
          <div className="mb-3"><Link className="text-white text-decoration-none" to={`${url}/allorders`}>All Orders</Link></div>
        </div>
        <div className="logout p-5">
          <button className="btn btn-info">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;