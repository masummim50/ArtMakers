import React from "react";
import ReactDOM from "react-dom";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { BrowserRouter } from "react-router-dom";

import SplitForm from "./SplitForm";

import "./PaymentCard.css";

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");



const PaymentCard = ({order}) => {
  return (
    <div style={{display:'none'}} className="p-5" id="payment-card">
      
    <BrowserRouter>
      <Elements stripe={stripePromise}>
        <SplitForm order={order}></SplitForm>
      </Elements>
    </BrowserRouter>
    </div>
  );
};

export default PaymentCard;
