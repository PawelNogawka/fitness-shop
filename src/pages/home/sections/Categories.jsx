import React from "react";
import { useSanity } from "../../../hooks/useSanity";

import Category from "../../../componets/Category";

import "./Categories.scss";

const Categories = () => {
  const { data, isLoading, error } = useSanity('*[_type == "category"]');

  if (isLoading) return <p>loading</p>;
  if (error) return <p>{error}</p>;
  if (data.length == 0) return;

  return (
    <section id="categories" className="categories">
      <h2 className="categories__heading">
        all categories - choose what you love
      </h2>
      <div className="categories__container">
        {data.map((category) => (
          <Category category={category} key={category._id} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
