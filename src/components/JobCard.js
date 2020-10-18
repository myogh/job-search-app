import React from "react";

//----------- JobCard Comp | PARENT: JobContainer -----------------
const JobCard = ({ jobDetail, color, handleJobSave }) => {
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
      <div className={`p-6 bg-white rounded-lg border-b-8 border-${color}-500`}>
        <div className="flex justify-between">
          <p className="text-gray-500 text-sm">Posted on {jobPostDate}</p>
          <p className="text-xs text-gray-500">{jobDetail.type}</p>
        </div>
        <h1 className="font-bold text-lg mt-2 mb-2">{jobDetail.title}</h1>
        <h2 className="text-sm text-gray-800 mb-8">{jobDetail.company}</h2>
        <div className="flex justify-between">
          <p className="text-blue-600 text-sm mb-4">{jobDetail.location}</p>

          <svg
            className="text-blue-800"
            onClick={() => handleJobSave(jobDetail.id)}
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
