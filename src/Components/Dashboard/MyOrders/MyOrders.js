import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import MySingleOrder from './MySingleOrder'

const MyOrders = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [myorders, setMyOrders] = useState([]);
  useEffect(()=>{
    fetch(`https://frozen-dawn-42451.herokuapp.com/allorders`)
    .then(res => res.json())
    .then(data => {
      const filtered = data.filter(d => d.buyerEmail === loggedInUser.email)
      setMyOrders(filtered)
      console.log(filtered)
      console.log(loggedInUser.email)
    })
  },[])
  return (
    <div className="p-5">
      {
        myorders.map(singleorder => <MySingleOrder singleorder={singleorder}></MySingleOrder>)
      }
    </div>
  );
};

export default MyOrders;