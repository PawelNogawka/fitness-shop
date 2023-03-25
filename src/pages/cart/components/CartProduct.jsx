import React from "react";

import { urlFor } from "../../../lib/client";

import "./CartProduct.scss";

const CartProduct = ({ product, removeFromCart }) => {
  const { image, name, price } = product;
  return (
    <li className="cart-product">
      <div className="cart-product__left">
        <img
          className="cart-product__img"
          src={urlFor(image[0].asset._ref)}
          alt={name}
          width="200"
        />
      </div>
      <div className="cart-product__right">
        <h3 className="cart-product__name">{name}</h3>
        <span className="cart-product__price">${price}</span>
        <button
          onClick={() => removeFromCart(product)}
          className="cart-product__remove"
        >
          remove
        </button>
      </div>
    </li>
  );
};

export default CartProduct;
