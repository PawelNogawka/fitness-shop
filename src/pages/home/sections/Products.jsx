import React from "react";
import { useSanity } from "../../../hooks/useSanity";

import Product from "../../../componets/Product";

import "./Products.scss";

const Products = () => {
  const { data, isLoading, error } = useSanity('*[_type == "product"]');

  if (isLoading) return <p>loading</p>;
  if (error) return <p>{error}</p>;

  return (
    <section id="products" className="products">
      <h2 className="products__heading">
        all products - choose your favourite!
      </h2>
      <div className="products__container">
        {data.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
