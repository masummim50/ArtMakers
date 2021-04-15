import React, { useMemo } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";


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
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleSubmit = async event => {
    event.preventDefault();
    console.log(order)
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    console.log("[PaymentMethod]", payload);
    console.log(payload.paymentMethod)
    const completeOrder = {...order, cardType: payload.paymentMethod.card.brand, country: payload.paymentMethod.card.country, orderPlacedOn: new Date()}
    console.log(completeOrder)
  };

  return (
    <form onSubmit={handleSubmit}>
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
    </form>
  );
};

export default SplitForm;
