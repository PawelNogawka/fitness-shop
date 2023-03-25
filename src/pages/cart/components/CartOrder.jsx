import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useCreate } from "../../../hooks/useCreate";

import Modal from "../../../componets/ui/Modal";
import Button from "../../../componets/ui/Button";
import Input from "../../../componets/ui/Input";

import "./CartOrder.scss";

const CartOrder = ({ orderProducts, products, handleHideCart }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState(null);
  const [days, setDays] = useState(null);
  const [months, setMonths] = useState(null);
  const [securityCode, setSecurityCode] = useState(null);

  const navigate = useNavigate();

  const { user } = useAuthContext();
  const { addDocument, isLoading } = useCreate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !name.trim() ||
      !email.trim() ||
      !cardNumber.trim() ||
      !days.trim() ||
      !months.trim() ||
      !securityCode.trim()
    ) {
      return;
    }

    const productRefs = products.map((product) => ({
      _type: "reference",
      _ref: product._id,
    }));

    const order = {
      _type: "order",
      orderedBy: {
        _type: "reference",
        _ref: user[0]._id,
      },
      products: productRefs,
    };

    await addDocument(order);

    navigate("/order-summary");
  };

  return (
    <section className="cart-order">
      <Modal handleHideCart={handleHideCart}>
        <form onSubmit={handleSubmit} className="cart-order__form">
          <h1 className="cart-order__heading">card payment</h1>
          <Input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder={"Enter your name..."}
            label="Name"
            name="name"
            required
          />
          <Input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder={"Enter your email..."}
            label="Email"
            name="email"
            required
          />
          <Input
            type="number"
            onChange={(e) => setCardNumber(e.target.value)}
            value={cardNumber}
            placeholder={"Enter your card number..."}
            label="Card number"
            name="card"
            required
          />
          <span className="cart-order__label">Expire date:</span>
          <div className="cart-order__input-row">
            <Input
              type="number"
              value={days}
              onChange={(e) => setDays(e.target.value)}
              placeholder={"01"}
              name="days"
              required
            />
            <Input
              type="number"
              onChange={(e) => setMonths(e.target.value)}
              value={months}
              placeholder={"01"}
              name="months"
              required
            />
          </div>
          <Input
            type="number"
            onChange={(e) => setSecurityCode(e.target.value)}
            value={securityCode}
            placeholder={"Enter your security code..."}
            label="Security code"
            name="security"
            required
          />
          <div className="cart-order__btns">
            <Button submit text={isLoading ? "loading..." : "confirm"} />
            <Button
              onClick={(e) => handleHideCart(false)}
              outlined
              text="close"
            />
          </div>
        </form>
      </Modal>
    </section>
  );
};

export default CartOrder;
