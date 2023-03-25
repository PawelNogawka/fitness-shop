import React , { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { urlFor } from "../lib/client";
import { useCartContext } from "../hooks/useCartContext";

import Button from "./ui/Button";

import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

import "./Product.scss";

const Product = ({ product }) => {
  const [isInCart, setIsInCart] = useState(false)
  const {addToCart, removeFromCart, cartList} = useCartContext()
  const { name, desc, rating, price, slug, image } = product;


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


  const handleAddButtonClick = (e) =>{
    e.preventDefault()
        addToCart(product)
  }


  const handleRemoveButtonClick = (e) =>{
    e.preventDefault()
        removeFromCart(product)
  }

  
  useEffect(()=>{
    const productInCart = cartList.find(prod => prod._id === product._id)

    if(productInCart){
      setIsInCart(true)
    }
    else{
      setIsInCart(false)
    }
},[cartList])


  return (
    <Link to={`/products/${slug.current}`} className="product">
      {image && (
        <img
          src={urlFor(image[0].asset._ref)}
          alt={name}
          className="product__img"
        />
      )}
      <div className="product__inner">
        <h3 className="product__title">{name}</h3>
        <div className="product__rating">{stars}</div>
        <p className="product__desc">{desc}</p>
        <div className="product__bottom">
        { !isInCart && <Button onClick={ handleAddButtonClick} text="add to cart" />}
          { isInCart && <Button danger onClick={handleRemoveButtonClick} text="remove from cart" />}
          <div className="product__price">
            <span className="product__price-shadow">${price}</span>
            <span className="product__price-amount">${price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
