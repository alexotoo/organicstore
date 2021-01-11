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
      name,
    },
    customizations: {
      title: "Organic Store",
      description: "Payment for items in cart",
      logo:
        "https://images.unsplash.com/photo-1518843875459-f738682238a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1326&q=80",
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
    <div className="">
      <FlutterWaveButton {...fwConfig} className="btn btn-success" />
    </div>
  );
}
