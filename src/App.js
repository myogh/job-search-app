import React from "react";
import HeaderLogo from "./assets/images/laptop.svg";
import JobCard from "./components/JobCard";

function App() {
  return (
    <div className="bg-gray-300 h-screen">
      <div className="header bg-blue-200">
        {/* NAV BAR CONTAINER */}
        <nav className="container mx-auto flex pt-8 pb-16 lg:pb-24 px-12 justify-between">
          <h1 className="text-2xl font-bold">Logo</h1>
          <div className="flex items-center">
            <p className="mr-6">Saved</p>
            <p>Night Mode</p>
          </div>
        </nav>
      </div>

      {/* Search Box Left and Image right container */}
      <div className="flex justify-between items-center container -mt-8 lg:-mt-16 mx-auto px-20">
        {/* SEARCH | FULL TIME | BUTTON */}
        <div
          id="search-terms"
          className="lg:w-3/4 w-full mr-3 flex justify-evenly bg-white shadow rounded py-2 lg:py-3 px-3"
        >
          {/* TWO SEARCH BOXES */}
          <div className="md:w-3/5 lg:w-3/4 flex p-2 pl-5">
            <input
              className="w-1/2 border-r border-gray-400 outline-none text-sm"
              type="text"
              placeholder="Search"
            />
            <input
              className="w-1/2 border-r border-gray-400 pl-5 text-sm outline-none"
              type="text"
              placeholder="Search"
            />
          </div>
          {/* FULL TIME AND BUTTON */}
          <div className="md:w-2/5 lg:w-1/4 flex items-center justify-around">
            <div className="flex items-center justify-start text-sm">
              <input className="mr-2" type="checkbox" placeholder="Search" />
              <span className="text-sm font-semibold">Full Time</span>
            </div>
            <input
              className="text-white text-sm bg-blue-600 rounded-md px-3 py-1"
              type="button"
              value="Search"
            />
          </div>
        </div>
        {/* Header Image Right */}
        <div className="hidden lg:w-1/4 lg:block">
          <img src={HeaderLogo} alt="laptop vector" />
        </div>
      </div>

      <div className="container mx-auto mt-20 px-16">
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
    </div>
  );
}

export default App;
