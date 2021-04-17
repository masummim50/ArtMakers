import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { userContext } from '../../../../App';
import PaymentCard from '../../../Dashboard/PaymentCard/PaymentCard';
import Navbar from '../../../Shared/Navbar/Navbar';

const ChosenService = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [nextStep, setNextStep] = useState(false);
  const [order, setOrder] = useState({});
  const {id} = useParams();
  const [chosenservice, setChosenService] = useState({});
  useEffect(()=> {
    fetch('https://frozen-dawn-42451.herokuapp.com/services')
    .then(res => res.json())
    .then(data => {
      const chosenOne = data.find(eachdata => eachdata._id === id)
      setChosenService(chosenOne)
    })
  },[])
  const handleOrderSubmit = ()=> {
    const buyerDemands= document.getElementById('customer-description').value;
    if(buyerDemands){
    const newOrder = {
      orderType: chosenservice.serviceTitle,
      orderCost: chosenservice.price,
      buyerDemands: buyerDemands,
      buyerName: loggedInUser.displayName,
      buyerEmail: loggedInUser.email
    }
    console.log(newOrder)
    setOrder(newOrder)
    setNextStep(true)
    document.getElementById('payment-card').style.display = 'block'
  }else{
    return false;
  }
  }
  return (
    <div>
      <Navbar></Navbar>
      <div className="row">
        <div className="col-md-6 p-5">
          <h2>Your chosen service is {chosenservice.serviceTitle}</h2>
          <p>Describe what you want as best as you can, include any references you might have. For photographic reference you can leave a google drive link.</p> <h4 className="text-info"> Submit to see payment options </h4>
          <textarea name="" id="customer-description" style={{width:'100%'}} rows="5" placeholder='Description'></textarea>
          <button onClick={handleOrderSubmit} className="btn btn-info">Submit</button>
          {
            nextStep&& <h4 className="text-success">One step away from placing your order. fill in the payment options and click pay</h4>
          }
        </div>
        <div className="col-md-6">
          <PaymentCard order={order}></PaymentCard>
        </div>
      </div>
    </div>
  );
};

export default ChosenService;