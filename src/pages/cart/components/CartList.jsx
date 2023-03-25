import React from "react";

import CartProduct from "./CartProduct";
import Button from "../../../componets/ui/Button";

import "./CartList.scss";

const CartList = ({
  clearCart,
  cartList,
  products,
  removeFromCart,
  total,
  setIsModalShow,
}) => {

  
  return (
    <section className="cart-list">
      <h1 className="cart-list__heading">{`your order list (${cartList.length})`}</h1>
      <ul className="cart-list__list">
        {products.map((product) => (
          <CartProduct
            key={product._id}
            product={product}
            removeFromCart={removeFromCart}
          />
        ))}
      </ul>
      <div className="cart-list__bottom">
        <div className="cart-list__total">
          <h2 className="cart-list__total-label">Total cost:</h2>
          <span className="cart-list__total-amount">$ {total}</span>
        </div>
        <div className="cart-list__btns">
          <Button onClick={(e) => setIsModalShow(true)} shadow text={"order"} />
          <Button onClick={(e) => clearCart()} outlined text={"clear"} />
        </div>
      </div>
    </section>
  );
};

export default CartList;
