import React from "react";
import { Link } from "react-router-dom";

const Header = ({ savedJobs, handleNightMode, nightMode }) => {
  return (
    <div>
      <div className="header">
        {/* NAV BAR CONTAINER */}
        <nav className="container mx-auto flex pt-8 pb-16 lg:pb-24 px-12 justify-between items-baseline">
          <h1 className="text-2xl text-white font-bold">
            <Link to="/">devjobs</Link>
          </h1>
          <div className="flex items-center">
            <p className="mr-8 sm:mr-12 text-white font-bold hover:bg-indigo-600 rounded-sm px-2 py-1 saved">
              <Link to="/saved-jobs">
                {" "}
                Saved{" "}
                <span>
                  <svg
                    className={savedJobs > 0 ? "inline-block -mt-1" : "hidden"}
                    width="17"
                    height="17"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>{" "}
              </Link>
            </p>
            <p className="text-white">
              <svg
                onClick={handleNightMode}
                className={nightMode ? "cursor-pointer" : "hidden"}
                width="22"
                height="22"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              <svg
                onClick={handleNightMode}
                className={nightMode ? "hidden" : "cursor-pointer"}
                width="22"
                height="22"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
              </svg>
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
