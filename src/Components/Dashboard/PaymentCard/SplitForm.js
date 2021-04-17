import React, { useMemo } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";
import { useHistory } from "react-router";
import { useState } from "react/cjs/react.development";


const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: '26px',
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    []
  );

  return options;
};

const SplitForm = ({order}) => {
  const [paid, setPaid] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const showpaid = ()=> {
    setPaid(true);
    setTimeout(() => {
      setPaid(false)
    }, 5000);
  }

  const handleSubmit = async event => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    const date = new Date();
    const datestring = date.toDateString()
    console.log("[PaymentMethod]", payload);
    console.log(payload.paymentMethod)
    if(payload.paymentMethod){
    const completeOrder = {...order, orderStatus: 'pending', cardType: payload.paymentMethod.card.brand, country: payload.paymentMethod.card.country, orderPlacedOn: datestring}
    console.log(completeOrder)
      fetch('https://frozen-dawn-42451.herokuapp.com/addorder', {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(completeOrder)
      })
      showpaid()

    }else{return false;}
  };

  return (
    <form onSubmit={handleSubmit} className="stripeform">
      <label className='w-100'>
        Card number
        <CardNumberElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          // onBlur={() => {
          //   console.log("CardNumberElement [blur]");
          // }}
          // onFocus={() => {
          //   console.log("CardNumberElement [focus]");
          // }}
        />
      </label>
      <br/>
      <label className='w-100'>
        Expiration date
        <CardExpiryElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          // onBlur={() => {
          //   console.log("CardNumberElement [blur]");
          // }}
          // onFocus={() => {
          //   console.log("CardNumberElement [focus]");
          // }}
        />
      </label>
      <br/>
      <label className='w-100'>
        CVC
        <CardCvcElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          // onBlur={() => {
          //   console.log("CardNumberElement [blur]");
          // }}
          // onFocus={() => {
          //   console.log("CardNumberElement [focus]");
          // }}
        />
      </label>
      <br/>
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      {paid && <h3 className="text-success">Order placed Successfully</h3> }
    </form>
  );
};

export default SplitForm;
