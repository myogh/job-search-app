import React, { useState } from "react"
import HeaderLogo from "../assets/images/laptop.svg"

//------------- SearchBox App Parent: App ---------------------
const SearchBox = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [location, setLocation] = useState("")

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleLocation = (e) => {
    setLocation(e.target.value)
  }

  return (
    <div>
      {/* Search Box Left and Image right container */}
      <div className="flex justify-between items-center container -mt-8 lg:-mt-16 mx-auto px-20">
        {/* SEARCH | FULL TIME | BUTTON */}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSearch(searchTerm, location)
            setSearchTerm("")
          }}
          id="search-terms"
          className="lg:w-3/4 w-full mr-3 flex justify-evenly bg-white shadow rounded py-2 lg:py-3 px-3"
        >
          {/* TWO SEARCH BOXES */}
          <div className="md:w-3/5 lg:w-3/4 flex p-2 pl-5">
            <svg
              className="text-gray-500 mr-2"
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
            <input
              onChange={handleChange}
              className="w-1/2 border-r border-gray-400 outline-none text-sm"
              type="text"
              placeholder="Search"
              value={searchTerm}
            />
            <svg
              className="text-gray-500 mr-2 ml-2"
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
              className="w-1/2 border-r border-gray-400 text-sm outline-none"
              type="text"
              placeholder="Search"
            />
          </div>
          {/* FULL TIME AND BUTTON */}
          <div className="md:w-2/5 lg:w-1/4 flex items-center justify-around">
            <div className="hidden md:flex items-center justify-start text-sm">
              <input className="mr-2" type="checkbox" placeholder="Search" />
              <span className="text-sm font-semibold">Full Time</span>
            </div>
            <input
              className="text-white text-sm bg-blue-600 rounded-md px-3 py-1"
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
  )
}

export default SearchBox
