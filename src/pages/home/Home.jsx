import React, { useEffect, useState } from "react";
import { useSanity } from "../../hooks/useSanity";
import { useTitle } from "../../hooks/useTitle";

import Banner from "./sections/Banner";
import Products from "./sections/Products";
import Wrapper from "../../componets/ui/Wrapper";
import Categories from "./sections/Categories";
import Customers from "./sections/Customers";
import FooterBanner from "./sections/FooterBanner";
import Loader from "../../componets/ui/Loader";
import Error from "../../componets/ui/Error";

const Home = () => {
  const { data, isLoading, error } = useSanity(
    '*[_type == "bannerProduct"][0]'
  );

  useTitle("fitness shop");

  if (isLoading) return <Loader />;
  if (error) return <Error error={error} />;

  return (
    <>
      <Banner product={data} />
      <main>
        <Wrapper>
          <Products />
          <Categories />
          <Customers />
          <FooterBanner />
        </Wrapper>
      </main>
    </>
  );
};

export default Home;
