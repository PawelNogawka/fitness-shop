import React from "react";
import { useSanity } from "../../../hooks/useSanity";

import Product from "../../../componets/Product";
import Loader from "../../../componets/ui/Loader";
import Error from "../../../componets/ui/Error";

import "./SimilarProducts.scss";

const SimilarProducts = ({ product, slug }) => {
  const { data, isLoading, error } = useSanity(
    `*[_type == 'product' && category->name == '${product.category.name}' && slug.current != '${slug}']`
  );

  if (isLoading) return <Loader small />;
  if (error) return <Error small error={error} />;

  return (
    <section className="similar-products">
      <h2 className="similar-products__heading">
        similar products - choose your favourite!
      </h2>
      <div className="similar-products__container">
        {data.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default SimilarProducts;
