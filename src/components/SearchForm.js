import React, { useEffect, useState } from "react";
// icon
import { FiSearch } from "react-icons/fi";
// useNavigate hook
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
    // clear timeout
    return () => clearTimeout(timeout);
  });

  const handelSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.length > 0) {
      navigate(`/search?query=${searchTerm}`);
      document.querySelector("input").value = "";
      setSearchTerm("");
    } else {
      // if input is empty set animation to true
      setIsAnimating(true);
      // console.log("please enter a search term");
    }
  };
  return (
    <form
      onSubmit={handelSubmit}
      className={`${
        isAnimating ? "animate-shake" : "animate-none"
      } w-full relative`}
    >
      <input
        onChange={handelSearchInput}
        className="input"
        type="text"
        placeholder="Search for a product..."
      />
      <button
        className="btn btn-accent absolute top-0 right-0 rounded-tl-none
      rounded-bl-none"
      >
        <FiSearch className="text-xl" />
      </button>
    </form>
  );
};

export default SearchForm;
