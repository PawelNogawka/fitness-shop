import React from "react";
import { Link } from "react-router-dom";

import { urlFor } from "../lib/client";

import "./Category.scss";

const Category = ({ category }) => {
  return (
    <Link to={`/categories/${category.slug.current}`} className="category">
      {category.image && (
        <img
          src={urlFor(category.image.asset._ref)}
          alt={category.name}
          className="category__img"
        />
      )}
      <div className="category__inner">
        <h3 className="category__name">{category.name}</h3>
        <p className="category__desc">{category.desc}</p>
      </div>
    </Link>
  );
};

export default Category;
