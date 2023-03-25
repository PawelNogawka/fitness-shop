import React from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

import { useSanity } from "../../hooks/useSanity";
import { useTitle } from "../../hooks/useTitle";

import Details from "./sections/Details";
import SimmilarProducts from "./sections/SimilarProducts";
import ReviewForm from "./sections/Reviews/ReviewForm";
import Reviews from "./sections/Reviews/Reviews";
import Wrapper from "../../componets/ui/Wrapper";
import Loader from "../../componets/ui/Loader";
import Error from "../../componets/ui/Error";

import "./ProductDetails.scss";

const ProductDetails = () => {
  const { slug } = useParams();
  const { user } = useAuthContext();
  const { data, isLoading, error } = useSanity(
    `*[_type == "product" && slug.current == '${slug}'][0]{name ,price, image, desc, rating, longDesc, slug, _id, category->{name,slug}}`
  );

  useTitle(data.name ? data.name : "loading...");

  if (isLoading) return <Loader />;
  if (error) return <Error error={error} />;

  if (data.length == 0) return;

  return (
    <main className="product-details">
      <Wrapper>
        <Details product={data} />
        <SimmilarProducts product={data} slug={slug}/>
        {user && <ReviewForm user={user} productId={data._id} />}
        {<Reviews productId={data._id} />}
      </Wrapper>
    </main>
  );
};

export default ProductDetails;
