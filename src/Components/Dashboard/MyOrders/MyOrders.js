import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';

const MyOrders = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [myorders, setMyOrders] = useState([]);
  useEffect(()=>{
    fetch(`http://localhost:5000/allorders`)
    .then(res => res.json())
    .then(data => {
      const filtered = data.filter(d => d.buyerEmail === loggedInUser.email)
      setMyOrders(filtered)
      console.log(filtered)
      console.log(loggedInUser.email)
    })
  },[])
  return (
    <div>
      this is orders for only users
      {myorders.length}
    </div>
  );
};

export default MyOrders;