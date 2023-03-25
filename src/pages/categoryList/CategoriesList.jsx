import React from "react";
import { useParams } from "react-router-dom";

import { useSanity } from "../../hooks/useSanity";
import { useTitle } from "../../hooks/useTitle";

import Product from "../../componets/Product";
import Wrapper from "../../componets/ui/Wrapper";
import Loader from "../../componets/ui/Loader";
import Error from "../../componets/ui/Error";

import "./CategoriesList.scss";

const CategoriesList = () => {
  const { slug } = useParams();

  const { data, isLoading, error } = useSanity(
    `*[_type == 'product' && category->name == '${slug}']`
  );

  useTitle(slug ? slug : "loading...");

  if (isLoading) return <Loader />;
  if (error) return <Error error={error} />;
  if (data.length == 0) return;

  return (
    <main className="categories-list">
      <Wrapper>
        <h1 className="categories-list__heading">{`products by ${slug} category`}</h1>
        <div className="categories-list__container">
          {data.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </Wrapper>
    </main>
  );
};

export default CategoriesList;
