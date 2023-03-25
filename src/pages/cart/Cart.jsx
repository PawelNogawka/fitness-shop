import React, { useState } from "react";
import { useCartContext } from "../../hooks/useCartContext";

import CartList from "./components/CartList";
import EmptyCart from "./components/EmptyCart";
import CartOrder from "./components/CartOrder";
import Wrapper from "../../componets/ui/Wrapper";

import "./Cart.scss";

const Cart = () => {
  const [isModalShow, setIsModalShow] = useState(false);
  const { cartList, removeFromCart, total, orderProducts, clearCart } =
    useCartContext();

  return (
    <main className="cart">
      {isModalShow && (
        <CartOrder
          orderProducts={orderProducts}
          products={cartList}
          handleHideCart={setIsModalShow}
        />
      )}
      <Wrapper>
        {cartList.length > 0 ? (
          <CartList
            clearCart={clearCart}
            cartList={cartList}
            products={cartList}
            setIsModalShow={setIsModalShow}
            removeFromCart={removeFromCart}
            total={total}
          />
        ) : (
          <EmptyCart />
        )}
      </Wrapper>
    </main>
  );
};

export default Cart;
