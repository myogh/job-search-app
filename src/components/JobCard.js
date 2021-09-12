import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../assets/themes";

//----------- JobCard Comp | PARENT: JobContainer -----------------
const JobCard = ({ jobDetail, handleJobSave, handleJobRemove, jobToView }) => {
  // ----------------- USECONTEXT --------------------------
  const theme = useContext(ThemeContext);

  // ------------- JOB POSTED DATE -------------------------
  // const jobCreateDateArray = jobDetail.created_at.split(" ");
  const jobPostDate = new Date(jobDetail.publication_date).toDateString();
    // jobCreateDateArray[1] +
    // " " +
    // jobCreateDateArray[2] +
    // " " +
    // jobCreateDateArray[5];

  return (
    <div>
      <div
        className={`job-card p-6 ${theme.bgColor} ${theme.shadow} hover:translate-x-6 rounded-lg border-b-8 border-${jobDetail.color}-500`}
      >
        <div className="flex justify-between">
          <p className="text-gray-500 text-sm">Posted on {jobPostDate}</p>
          <p className="text-xs text-gray-500">{jobDetail.type}</p>
        </div>
        <h1
          className={`font-bold text-lg ${theme.textColor} underline mt-2 mb-2`}
        >
          <Link
            onClick={() => {
              jobToView(jobDetail.id);
              window.scrollTo(0, 0);
            }}
            to={`/description/${jobDetail.id}`}
          >
            {jobDetail.title.length > 45
              ? jobDetail.title.slice(0, 45) + "..."
              : jobDetail.title}
          </Link>
        </h1>
        <h2 className={`text-sm ${theme.textColor} mb-8 select-none`}>
          {jobDetail.company_name}
        </h2>
        <div className="flex justify-between">
          <p className="text-blue-500 select-none text-sm mb-4 w-3/5">
            {jobDetail.candidate_required_location.length > 30
              ? jobDetail.candidate_required_location.slice(0, 30) + "..."
              : jobDetail.candidate_required_location}
          </p>
          {/* --------------- JOB SAVING ICON ----------------------- */}
          <svg
            className={
              jobDetail.save ? "hidden" : "text-blue-500 cursor-pointer"
            }
            onClick={() => {
              handleJobSave(jobDetail.id);
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
            className={
              jobDetail.save ? "text-blue-600 cursor-pointer" : "hidden"
            }
            onClick={() => {
              handleJobRemove(jobDetail.id);
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
