import React from "react";
import { Link } from "react-router-dom";

import Button from "../../../componets/ui/Button";

import "./EmptyCart.scss";

const EmptyCart = () => {
  return (
    <section className="empty-cart">
      <h1 className="empty-cart__heading">there is no products</h1>
      <Link to="/" className="empty-card__link">
        <Button text="continue shopping" />
      </Link>
    </section>
  );
};

export default EmptyCart;
