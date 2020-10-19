import React, { useState } from "react";
import HeaderLogo from "../assets/images/laptop.svg";

//------------- SearchBox App Parent: App ---------------------
const SearchBox = ({ handleSearch, filterSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [needInput, setNeedInput] = useState(false);
  const [fullTime, setFullTime] = useState(false);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div>
      {/* Search Box Left and Image right container */}
      <div className="flex justify-between items-center container -mt-8 lg:-mt-16 mx-auto px-10 sm:px-20">
        {/* SEARCH | FULL TIME | BUTTON */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (searchTerm.length === 0) {
              setNeedInput(true);
            } else {
              setNeedInput(false);
              handleSearch(searchTerm, location);
              filterSearch(fullTime);
              setSearchTerm("");
            }
          }}
          id="search-terms"
          className="lg:w-3/4 w-full mr-3 flex justify-between sm:justify-evenly bg-white shadow rounded py-2 lg:py-3 px-3"
        >
          {/* TWO SEARCH BOXES */}
          <div className="md:w-3/5 lg:w-3/4 flex p-2 pl-5">
            <svg
              className={needInput ? "text-red-500 mr-2" : "text-gray-500 mr-2"}
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {/* ---------Search box 1----------------- */}
            <input
              onChange={handleChange}
              onClick={() => setNeedInput(false)}
              className={
                needInput
                  ? "w-full sm:w-1/2 border-b border-red-500 text-red-500 outline-none text-sm pb-1"
                  : "w-full sm:w-1/2 sm:border-r border-gray-400 outline-none text-sm pb-1"
              }
              type="text"
              placeholder={
                needInput ? "Please enter a keyword..." : "Java, python, etc."
              }
              value={searchTerm}
            />
            <svg
              className="hidden sm:block sm:text-gray-500 sm:mr-2 sm:ml-2"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <input
              onChange={handleLocation}
              className="hidden sm:block sm:w-1/2 sm:border-r sm:border-gray-400 sm:text-sm sm:outline-none sm:pb-1"
              type="text"
              placeholder="Search"
            />
          </div>
          {/* FULL TIME AND BUTTON */}
          <div className="md:w-2/5 lg:w-1/4 flex items-center justify-around">
            <div className="hidden md:flex items-center justify-start text-sm">
              <input
                className="mr-2"
                type="checkbox"
                placeholder="Search"
                value="full_time"
                onChange={() => {
                  setFullTime((prv) => !prv);
                }}
              />
              <label className="text-sm font-semibold">Full Time</label>
            </div>
            <input
              className="text-white text-sm bg-blue-600 cursor-pointer outline-none focus:shadow-outline rounded-md px-3 py-1"
              type="submit"
              value="Search"
            />
          </div>
        </form>
        {/* Header Image Right */}
        <div className="hidden lg:w-1/4 lg:block">
          <img src={HeaderLogo} alt="laptop vector" />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
