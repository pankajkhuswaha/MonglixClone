import React, { useState } from "react";
const SearchComponent = () => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your search logic here
  };

  return (
    <div>
      <div className="flex  items-center max-w-md  bg-white rounded-lg border border-gray-200">
        <div className="w-full lg:w-[800px] ">
          <input
            type="search"
            className="w-full px-4  text-gray-800 rounded-full focus:outline-none"
            placeholder="Search Product, Category, Brand.."
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        <div>
          <button
            type="submit"
            className={`flex items-center bg-blue-500 justify-center w-12 h-12 text-white rounded-r-lg 
                            ${
                              search.length > 0
                                ? "bg-purple-500"
                                : "bg-rose-400 cursor-not-allowed "
                            }`}
            disabled={search.length === 0}
            onClick={handleSubmit}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
