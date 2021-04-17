import React from 'react';

const AddAdmin = () => {
  const handleAddAdmin = ()=> {
    const admin = {email: document.getElementById('email').value};
    console.log(admin);
    fetch('https://frozen-dawn-42451.herokuapp.com/addadmin', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(admin)
    })
  }
  return (
    <div className='row'>
      <div className="col-md-6 p-5">
        
      <input className="form-control" type="email" name="email" placeholder='enter email of new admin' id="email"/>
      <button onClick={handleAddAdmin} className="btn btn-success">Add Admin</button>
      </div>
    </div>
  );
};

export default AddAdmin;