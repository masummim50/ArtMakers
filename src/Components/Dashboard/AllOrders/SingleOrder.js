import React from 'react';

const SingleOrder = ({singleorder}) => {
  const handleStatusChange = (e)=> {
    const status = {status: e.target.value};
    console.log(singleorder._id);
    fetch(`http://localhost:5000/update/${singleorder._id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(status)
    })
  }
  const handleDelete = (e)=> {
    console.log(singleorder._id)
    fetch(`http://localhost:5000/delete/${singleorder._id}`, {
      method:'DELETE'
    }).then(res => console.log(res))
    e.target.parentNode.parentNode.innerHTML = ''
  }
  return (
    <div className="row mb-4 shadow">
      <div className="col-md-6">
        <h6>{singleorder.orderType}</h6>
        <p>Paid: ${singleorder.orderCost}</p>
        <h6>Order by: {singleorder.buyerName}</h6>
      </div>
      <div className="col-md-6">
        <select onChange={handleStatusChange} class="form-select" aria-label="Default select example">
          {
            singleorder.orderStatus === 'pending' && <><option className="text-secondary" selected value="Pending">Pending</option><option className="hell" value="OnGoing">On Going</option><option className="hell" value="Completed">Completed</option></>
          }
          {
            singleorder.orderStatus === 'OnGoing' && <><option className="hell" value="Pending">Pending</option><option className="text" selected value="OnGoing">On Going</option><option className="hell" value="Completed">Completed</option></>
          }
          {
            singleorder.orderStatus === 'Completed' && <><option className="hell" value="Pending">Pending</option><option className="hell" value="OnGoing">On Going</option><option className="hell" selected value="Completed">Completed</option></>
          }
        </select>
        <button onClick={handleDelete} className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

export default SingleOrder;