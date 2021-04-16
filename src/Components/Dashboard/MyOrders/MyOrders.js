import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import MySingleOrder from './MySingleOrder'

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
      {
        myorders.map(singleorder => <MySingleOrder singleorder={singleorder}></MySingleOrder>)
      }
    </div>
  );
};

export default MyOrders;