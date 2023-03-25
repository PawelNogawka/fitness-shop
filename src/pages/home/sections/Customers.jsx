import React from "react";

import Button from "../../../componets/ui/Button";

import { AiFillStar } from "react-icons/ai";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

import Customer1 from "../../../assets/john-blake.jpg";

import "./Customers.scss";

const Customers = () => {
  return (
    <section id="reviews" className="customers">
      <h2 className="customers__heading">what doas taht customers say?</h2>
      <div className="customers__container">
        <div className="customers__left">
          <h3 className="customers__title">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h3>
          <p className="customers__info">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            aspernatur possimus ut doloremque maxime modi, dolores libero
            laudantium veritatis nisi, nihil nostrum aut quos. Repellendus
            numquam porro vitae voluptatem libero?
          </p>
          <Button text="check" />
        </div>
        <div className="customers__right">
          <div className="customers__card">
            <div className="customers__card-top">
              <img
                src={Customer1}
                width="60"
                alt="john blake"
                className="customers__card-avatar"
              />
              <div className="customers__card-top-row">
                <h3 className="customers__card-name">John Blake</h3>
                <div className="customers__card-rating">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
            </div>
            <p className="customers__card-review">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
              fugiat voluptatum in consectetur aspernatur quae, vel similique
              sapiente consequuntur ducimus deserunt molestias impedit. Itaque,
              dolore?
            </p>
            <div className="customers__card-bottom">
              <a href="/" className="customers__card-link">
                <ImFacebook />
              </a>
              <a href="/" className="customers__card-link">
                <BsTwitter />
              </a>
              <a href="/" className="customers__card-link">
                <AiFillInstagram />
              </a>
            </div>
          </div>
          <div className="customers__card">
            <div className="customers__card-top">
              <img
                src={Customer1}
                alt="john blake"
                className="customers__card-avatar"
              />
              <div className="customers__card-top-row">
                <h3 className="customers__card-name">John Blake</h3>
                <div className="customers__card-rating">
                  <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
            </div>
            <p className="customers__card-review">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
              fugiat voluptatum in consectetur aspernatur quae, vel similique
              sapiente consequuntur ducimus deserunt molestias impedit. Itaque,
              dolore?
            </p>
            <div className="customers__card-bottom">
              <a href="/" className="customers__card-link">
                <ImFacebook />
              </a>
              <a href="/" className="customers__card-link">
                <BsTwitter />
              </a>
              <a href="/" className="customers__card-link">
                <AiFillInstagram />
              </a>
            </div>
          </div>
          <div className="customers__card">
            <div className="customers__card-top">
              <img
                src={Customer1}
                alt="john blake"
                className="customers__card-avatar"
              />
              <div className="customers__card-top-row">
                <h3 className="customers__card-name">John Blake</h3>
                <div className="customers__card-rating">
                  <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
            </div>
            <p className="customers__card-review">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
              fugiat voluptatum in consectetur aspernatur quae, vel similique
              sapiente consequuntur ducimus deserunt molestias impedit. Itaque,
              dolore?
            </p>
            <div className="customers__card-bottom">
              <a href="/" className="customers__card-link">
                <ImFacebook />
              </a>
              <a href="/" className="customers__card-link">
                <BsTwitter />
              </a>
              <a href="/" className="customers__card-link">
                <AiFillInstagram />
              </a>
            </div>
          </div>
          <div className="customers__card">
            <div className="customers__card-top">
              <img
                src={Customer1}
                alt="john blake"
                className="customers__card-avatar"
              />
              <div className="customers__card-top-row">
                <h3 className="customers__card-name">John Blake</h3>
                <div className="customers__card-rating">
                  <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
                  <AiFillStar />
                </div>
              </div>
            </div>
            <p className="customers__card-review">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
              fugiat voluptatum in consectetur aspernatur quae, vel similique
              sapiente consequuntur ducimus deserunt molestias impedit. Itaque,
              dolore?
            </p>
            <div className="customers__card-bottom">
              <a href="/" className="customers__card-link">
                <ImFacebook />
              </a>
              <a href="/" className="customers__card-link">
                <BsTwitter />
              </a>
              <a href="/" className="customers__card-link">
                <AiFillInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
