import React from "react";
import { useOutletContext } from "react-router-dom";

const SearchAndFilter = (props) => {
  const { handleQuery } = props;
  const { theme } = useOutletContext();

  const searchIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`w-6 h-6 search-icon ${theme === "dark" && "text-white"}`}
    >
      <path
        fillRule="evenodd"
        d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div className="search-and-filter flex flex-col gap-8 py-8  lg:flex-row justify-between">
      <div
        className={`search rounded-[4px] lg:w-[40%] overflow-auto shadow-md relative `}
      >
        <input
          type="text"
          name="search"
          placeholder="Search for a country"
          onChange={handleQuery}
          className={`search-input px-6 py-3 pl-10 outline-none w-full h-full ${
            theme === "dark" && "dark-component"
          }`}
        />
        {searchIcon}
      </div>
      <select
        name="filter"
        id="continents"
        onChange={handleQuery}
        className={`px-4 py-3 rounded-[4px] outline-none shadow-md w-[60%] ${
          theme === "dark" && "dark-component"
        } lg:w-[20%]`}
      >
        <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};

export default SearchAndFilter;
