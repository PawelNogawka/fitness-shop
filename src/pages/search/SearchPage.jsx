import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { useSanity } from "../../hooks/useSanity";
import { useTitle } from "../../hooks/useTitle";

import Product from "../../componets/Product";
import Wrapper from "../../componets/ui/Wrapper";
import Loader from "../../componets/ui/Loader";
import Button from "../../componets/ui/Button";

import "./SearchPage.scss";

const SearchPage = () => {
  const { searchTerm } = useParams();

  const { data, isLoading, error } = useSanity(
    `*[_type == 'product' && name == '${searchTerm.replace(/-/g, " ")}']`
  );

  useTitle(searchTerm ? searchTerm : "loading...");

  if (isLoading) return <Loader />;
  if (error)
    return (
      <main className="search-page">
        <Wrapper>
          <h1 className="search-page__heading">{`search by '${searchTerm.replace(
            /-/g,
            " "
          )}' term`}</h1>
          <p className="search-page__noresult">There is no results</p>
          <Link to="/">
            <Button text="back to home" />
          </Link>
        </Wrapper>
      </main>
    );

  return (
    <main className="search-page-list">
      <Wrapper>
        <h1 className="search-page__heading">{`search by '${searchTerm.replace(
          /-/g,
          " "
        )}' term`}</h1>
        <div className="search-page__container">
          {data.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </Wrapper>
    </main>
  );
};

export default SearchPage;
