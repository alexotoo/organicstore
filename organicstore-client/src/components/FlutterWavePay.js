import React from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

export default function FlutterWavePay({
  amount,
  email,
  name,
  payment_options,
}) {
  const config = {
    public_key: process.env.REACT_APP_CONT_PAYMENT,
    tx_ref: Date.now(),
    amount,
    currency: "GHS",
    payment_options,
    customer: {
      email,
      phonenumber: "07064586146",
      name,
    },
    customizations: {
      title: "Organic Store",
      description: "Payment for items in cart",
      logo: "/public/images/veg.jpg",
    },
  };

  const fwConfig = {
    ...config,
    text: "Make payment",
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div className="btn">
      <h1>pay</h1>
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
}
