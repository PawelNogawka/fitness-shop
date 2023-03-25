import React, { useState, useEffect } from "react";
import { urlFor } from "../../../lib/client";
import { useCartContext } from "../../../hooks/useCartContext";

import Button from "../../../componets/ui/Button";

import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

import "./Details.scss";

const Details = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isInCart, setIsInCart] = useState(false);
  const { addToCart, removeFromCart, cartList } = useCartContext();

  const { name, longDesc, rating, price, slug, image } = product;

  useEffect(() => {
    const productInCart = cartList.find((prod) => prod._id === product._id);

    if (productInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartList]);

  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<AiFillStar key={i} />);
    } else if (i < Math.ceil(rating) && rating % 1 === 0.5) {
      stars.push(<BsStarHalf key={i} />);
    } else {
      stars.push(<AiOutlineStar key={i} />);
    }
  }

  return (
    <section className="details">
      <div className="details__left">
        <div className="details__images-box">
          <div className="details__images-box-top">
            {image && (
              <img src={urlFor(image[currentImage].asset._ref)} alt={name} />
            )}
          </div>
          <div className="details__images-box-bottom">
            {image &&
              image.map((img, index) => (
                <img
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  onMouseEnter={() => setCurrentImage(index)}
                  src={urlFor(img)}
                  alt={name}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="details__right">
        <div className="details__header">
          <span className="details__heading-shadow">{name.slice(0, 10)}</span>
          <h1 className="details__heading">{name}</h1>
        </div>
        <div className="details__rating">{stars}</div>
        <div className="details__info">
          <div className="details__info-box details__info-box--in-stock">
            in stock
          </div>
          <div className="details__info-box details__info-box--best">
            bestseller
          </div>
        </div>
        <p className="details__desc">{longDesc}</p>
        <div className="details__bottom">
          {!isInCart && (
            <Button onClick={() => addToCart(product)} text="add to cart" />
          )}
          {isInCart && (
            <Button
              danger
              onClick={() => removeFromCart(product)}
              text="remove from cart"
            />
          )}
          <div className="details__price">
            <span className="details__price-shadow">${price}</span>
            <span className="details__price-amount">${price}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
