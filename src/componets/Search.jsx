import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./ui/Modal";
import Input from "./ui/Input";
import Button from "./ui/Button";

import "./Search.scss";

const Search = ({ setShowSearchModal }) => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) {
      setError("please, enter a value");
    }

    setShowSearchModal(false);
    return navigate(`/products/search/${search.replace(/ /g, "-")}`);
  };

  return (
    <Modal>
      <form onSubmit={handleFormSubmit} className="search">
        <Input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          label="Search by product name"
          placeholder="Search..."
          name="search"
        />
        {error && <p>{error}</p>}
        <div className="search__btns">
          <Button submit text="search" />
          <Button
            onClick={() => setShowSearchModal(false)}
            outlined
            text="close"
          />
        </div>
      </form>
    </Modal>
  );
};

export default Search;
