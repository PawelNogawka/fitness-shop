import React from "react";
import { Link } from "react-router-dom";

import { useSanity } from "../../../hooks/useSanity";
import { urlFor } from "../../../lib/client";

import Button from "../../../componets/ui/Button";

import "./FooterBanner.scss";

const FooterBanner = () => {
  const { data, isLoading, error } = useSanity(
    '*[_type == "footerProduct"][0]'
  );

  const { image, productName, productDesc, saleName, discount, buttonText } =
    data;

  if (isLoading) return;
  if (error) return;

  return (
    <section className="footer-banner">
      <div className="footer-banner__container">
        <div className="footer-banner__banner">
          <span className="footer-banner__discount">- {discount} off</span>
          <div className="footer-banner__header">
            <span className="footer-banner__subtitle">{data.for}</span>
            <h2 className="footer-banner__heading">best gift</h2>
          </div>
          <Link to="/products/outfit-for-man" className="footer-banner__link">
            <Button outlined text={buttonText} />
          </Link>
        </div>
        {image && (
          <img
            src={urlFor(image.asset._ref)}
            alt={productName}
            className="footer-banner__img"
          />
        )}
        <div className="footer-banner__product">
          <h3 className="footer-banner__product-name">man clothes</h3>
          <p className="footer-banner__product-desc">{productDesc}</p>
          <span className="footer-banner__sale-name">{saleName}</span>
        </div>
      </div>
    </section>
  );
};

export default FooterBanner;
