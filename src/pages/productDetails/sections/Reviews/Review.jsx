import React from "react";
import moment from 'moment'

import Avatar from "../../../../componets/Avatar";

import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

import "./Review.scss";

const Review = ({ review }) => {
  console.log(review);
  const { createdBy, _createdAt, reviewValue } = review;

  return (
    <div className="review-card">
      <div className="review-card__top">
        <div className="review-card__avatar">
          <Avatar src={createdBy.avatar?.asset?._ref} />
          <div className="review-card__row">
            <span className="review-card__name">{createdBy.name}</span>
            <span className="review-card__email">{createdBy.email}</span>
          </div>
        </div>
        <time className="review-card__created">{moment(_createdAt).format('LLLL')}</time>
      </div>
      <p className="review-card__review">{reviewValue}</p>
      <div className="review-card__bottom">
        <a href="/" className="review-card__card-link">
          <ImFacebook />
        </a>
        <a href="/" className="review-card__card-link">
          <BsTwitter />
        </a>
        <a href="/" className="review-card__card-link">
          <AiFillInstagram />
        </a>
      </div>
    </div>
  );
};

export default Review;
