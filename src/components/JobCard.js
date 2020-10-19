import React, { useState } from "react";
import { Link } from "react-router-dom";

//----------- JobCard Comp | PARENT: JobContainer -----------------
const JobCard = ({ jobDetail, handleJobSave, handleJobRemove, jobToView }) => {
  const [add, setAdd] = useState(true);
  const [remove, setRemove] = useState(false);
  // ------------- JOB POSTED DATE -------------------------
  const jobCreateDateArray = jobDetail.created_at.split(" ");
  const jobPostDate =
    jobCreateDateArray[1] +
    " " +
    jobCreateDateArray[2] +
    " " +
    jobCreateDateArray[5];

  return (
    <div>
      <div
        className={`p-6 bg-white rounded-lg border-b-8 border-${jobDetail.color}-500`}
      >
        <div className="flex justify-between">
          <p className="text-gray-500 text-sm">Posted on {jobPostDate}</p>
          <p className="text-xs text-gray-500">{jobDetail.type}</p>
        </div>
        <h1 className="font-bold text-lg mt-2 mb-2">
          <Link
            onClick={() => {
              jobToView(jobDetail.id);
              window.scrollTo(0, 0);
            }}
            to={`/positions/${jobDetail.id}`}
          >
            {jobDetail.title}
          </Link>
        </h1>
        <h2 className="text-sm text-gray-800 mb-8">{jobDetail.company}</h2>
        <div className="flex justify-between">
          <p className="text-blue-600 text-sm mb-4 w-3/5">
            {jobDetail.location}
          </p>

          <svg
            className={add ? "text-blue-600 cursor-pointer" : "hidden"}
            onClick={() => {
              handleJobSave(jobDetail.id);
              setAdd(false);
              setRemove(true);
            }}
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
          <svg
            className={remove ? "text-blue-600 cursor-pointer" : "hidden"}
            onClick={() => {
              handleJobRemove(jobDetail.id);
              setRemove(false);
              setAdd(true);
            }}
            width="22"
            height="22"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 11h4m-2-2v4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
