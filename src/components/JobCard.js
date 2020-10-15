import React from "react";

const JobCard = () => {
  return (
    <div>
      <div className="w-1/5 p-6 bg-white rounded-lg border-b-8 border-red-700 mx-auto">
        <p className="text-gray-600">5hrs ago &bull; full-time </p>
        <h1 className="font-bold text-2xl mt-2 mb-2">
          Senior Software Engineer
        </h1>
        <h2 className="text-lg text-gray-800 mb-6">Marvel Medias Inc.</h2>
        <div className="flex justify-between">
          <p className="text-blue-600 text-md mb-4">Amsterdam, NewZeland</p>
          <svg
            className="text-blue-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
