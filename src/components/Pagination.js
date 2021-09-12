import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../assets/themes";

// ---------------- Pagination Component ------------------------
const Pagination = ({ numOfPages, handlePageChange, currentPage }) => {
  let pages = [];

  for (let i = 1; i <= numOfPages; i++) {
    pages.push(i);
  }

  const theme = useContext(ThemeContext);

  return (
    <div id="pagination" className="mb-8">
      <ul className="appearance-none flex max-w-md mx-auto justify-center">
        {/* ---------------- LEFT ARROW ----------------------*/}
        <li>
          <a
            onClick={() => {
              if (currentPage > 1) {
                handlePageChange(currentPage - 1);
              } else {
                handlePageChange(currentPage);
              }
            }}
            href="#!"
            className={`focus:bg-indigo-600 px-2 py-1 focus:text-white border ${theme.textColor} ${theme.borderColor} rounded-sm hover:bg-indigo-300`}
          >
            <svg
              className="inline"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </a>
        </li>

        {/*-------------- lOOPING THROUGH EACH PAGINATION NUMBER ---------------------------*/}

        {pages.map((pageNum) => (
          <li key={pageNum}>
            <Link
              onClick={() => handlePageChange(pageNum)}
              to={`/jobs/${pageNum}`}
              className={
                pageNum === currentPage
                  ? "focus:bg-indigo-600 bg-indigo-600 text-white px-2 py-1 focus:text-white border rounded-sm border-gray-400 hover:bg-indigo-300"
                  : `focus:bg-indigo-600 px-2 py-1 focus:text-white border ${theme.textColor} ${theme.borderColor} rounded-sm hover:bg-indigo-300`
              }
            >
              {pageNum}
            </Link>
          </li>
        ))}

        {/*----------------- RIGHT ARROW -------------------------------*/}
        <li>
          <a
            onClick={() => {
              if (currentPage < numOfPages) {
                handlePageChange(currentPage + 1);
              } else {
                handlePageChange(currentPage);
              }
            }}
            href="#!"
            className={`focus:bg-indigo-600 px-2 py-1 focus:text-white border ${theme.textColor} ${theme.borderColor} rounded-sm hover:bg-indigo-300`}
          >
            <svg
              className="inline"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
