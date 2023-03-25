import React from "react";
import { Link } from "react-router-dom";

import { urlFor } from "../../../lib/client";

import Wrapper from "../../../componets/ui/Wrapper";
import Button from "../../../componets/ui/Button";

import Companies from "../../../assets/companies.png";

import "./Banner.scss";

const Banner = ({ product }) => {
  const { image, productName, productDesc, saleName, discount, buttonText } =
    product;

  return (
    <section className="banner">
      <Wrapper>
        <div className="banner__container">
          <div className="banner__header">
            <h1 className="banner__heading">Shop your favourites items now!</h1>
            <p className="banner__desc">
              Unlock endless possibilities and explore a world of unique finds:
              shop your favorite items today!
            </p>
            <a href="#products" className="banner__cta-link">
              <Button shadow text="explore" />
            </a>
            <div>
              <img
                className="banner__companies"
                src={Companies}
                alt="companies"
              />
            </div>
          </div>
          <div className="banner__product">
            {image && (
              <img
                className="banner__product-img"
                src={urlFor(image.asset._ref)}
                alt={productName}
              />
            )}

            <div className="banner__product-content">
              <div className="banner__product-info">
                <h2 className="banner__product-heading">{productName}</h2>
                <p className="banner__product-desc">{productDesc}</p>
              </div>
              <div className="banner__product-sale">
                <span className="banner__product-sale-info">{saleName}</span>
                <span className="banner__product-discount">-{discount}%</span>
              </div>
              <Link
                className="banner__product-cta"
                to="/products/outfit-for-woman"
              >
                <Button shadow text={buttonText} />
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Banner;
