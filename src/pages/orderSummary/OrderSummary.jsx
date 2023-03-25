import React from "react";
import { Link } from "react-router-dom";

import { useTitle } from "../../hooks/useTitle";

import Button from "../../componets/ui/Button";

import "./OrderSummary.scss";

const OrderSummary = () => {
  useTitle("order summary");
  return (
    <main className="order-summary">
      <div className="order-summary__container">
        <h1 className="order-summary__heading">your order is in progress</h1>
        <Link to="/">
          <Button text="continue shopping" />
        </Link>
      </div>
    </main>
  );
};

export default OrderSummary;
