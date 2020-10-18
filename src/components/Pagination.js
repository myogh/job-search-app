import React from "react";

// ---------------- Pagination Component ------------------------
const Pagination = ({ numOfPages, handlePageChange, currentPage }) => {
  let pages = [];

  for (let i = 1; i <= numOfPages; i++) {
    pages.push(i);
  }

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
            className="focus:bg-indigo-600 px-2 py-1 focus:text-white border border-gray-400 hover:bg-indigo-300"
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

        {pages.map((i) => (
          <li key={i}>
            <a
              onClick={() => handlePageChange(i)}
              href="#!"
              className={
                i === currentPage
                  ? "focus:bg-indigo-600 bg-indigo-600 text-white px-2 py-1 focus:text-white border border-gray-400 hover:bg-indigo-300"
                  : "focus:bg-indigo-600 px-2 py-1 focus:text-white border border-gray-400 hover:bg-indigo-300"
              }
            >
              {i}
            </a>
          </li>
        ))}

        {/*----------------- RIGHT ARROW -------------------------------*/}
        <li>
          <a
            onClick={() => {
              if (currentPage > 0) {
                handlePageChange(currentPage + 1);
              } else if (currentPage > numOfPages) {
                handlePageChange(currentPage);
              }
            }}
            href="#!"
            className="focus:bg-indigo-600 px-2 py-1 focus:text-white border border-gray-400 hover:bg-indigo-300"
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
