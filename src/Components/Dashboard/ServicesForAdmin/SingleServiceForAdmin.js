import React from 'react';

const SingleServiceForAdmin = ({singleservice}) => {
  const deleteservice = e => {
    console.log(singleservice._id)
    fetch(`https://frozen-dawn-42451.herokuapp.com/services/delete/${singleservice._id}`, {
      method:'DELETE'
    })
    e.target.parentNode.parentNode.parentNode.innerHTML = ''
  }
  return (
    <div class='forremoving'>
    <div style={{borderBottom:'2px solid red'}} className="row d-flex justify-content-between align-items-center p-2 mt-3">
      <div className="d-flex align-items-center col-md-8">
        <img style={{height:'60px', width:'60px'}} src={singleservice.image} alt=""/>
        <div className="text">
          <h6>{singleservice.serviceTitle}</h6>
          <small>${singleservice.price}</small>
        </div>
      </div>
      <div className="col-md-2">
        
      <button onClick={deleteservice} className="btn btn-danger">Delete</button>
      </div>
    </div>
    </div>
  );
};

export default SingleServiceForAdmin;