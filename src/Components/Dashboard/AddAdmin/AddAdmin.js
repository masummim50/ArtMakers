import React from 'react';

const AddAdmin = () => {
  const handleAddAdmin = ()=> {
    const admin = {email: document.getElementById('email').value};
    console.log(admin);
    fetch('http://localhost:5000/addadmin', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(admin)
    })
  }
  return (
    <div>
      <input type="email" name="email" placeholder='enter email of new admin' id="email"/>
      <button onClick={handleAddAdmin} className="btn btn-success">Add Admin</button>
    </div>
  );
};

export default AddAdmin;