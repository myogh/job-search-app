import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../assets/themes";
import parse from "html-react-parser";
import gsap from "gsap";

const JobDescription = ({ jobInfo, handleJobRemove, handleJobSave }) => {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    gsap.to("#des", {
      duration: 1.25,
      x: "100%",
      borderRadius: "80%",
      ease: "expo.out",
    });
  }, []);
  return (
    <div>
      <div
        id="des"
        className="fixed inset-0 min-w-full min-h-full bg-indigo-600"
      ></div>
      <div className="max-w-md sm:max-w-xl md:max-w-3xl flex flex-col flex-wrap mx-auto px-2 sm:px-0 mb-10">
        {/*----------- JOB TITLE --------------*/}
        <section
          className={`${theme.bgColor} p-3 rounded-lg w-full -mt-20 flex flex-col sm:flex-row justify-center sm:justify-between px-10 items-center py-6`}
        >
          <div className="flex sm:flex-row flex-col items-center">
            <div className="flex flex-col text-center sm:items-start sm:justify-start">
              <h1
                className={`text-md sm:text-lg  border-l-4  border-indigo-600 pl-3 ${theme.textColor} font-bold truncate`}
              >
                {jobInfo.company_name}
              </h1>
              {/* <h3
                className={`text-xs w-full sm:w-3/4 text-center sm:text-left ${theme.textColor}`}
              >
                {jobInfo.location}
              </h3> */}
            </div>
          </div>

          <a
            href={jobInfo.url}
            target="__blank"
            type="button"
            className={
              jobInfo.url === null
                ? "hidden"
                : "block w-3/4 text-center sm:w-1/4 mt-6 sm:mt-0 bg-indigo-700 p-2 text-sm text-white rounded-md"
            }
          >
            Apply Now 
          </a>
        </section>
        {/* ---------- JOB DESCRIPTION ---------------- */}
        <section className={`${theme.bgColor} p-10 mt-10 w-full rounded-lg`}>
          <div className="flex flex-row items-center justify-between">
            <div className="w-full">
              <p className="text-xs text-gray-500 mb-2">{jobInfo.job_type}</p>
              <h1 className={`text-xl w-3/4 font-bold ${theme.textColor}`}>
                {jobInfo.title}
              </h1>
              {/* <p className="text-xs text-blue-500 w-3/4 mt-2">
                {jobInfo.location}
              </p> */}
            </div>
            <div>
              <svg
                className={
                  jobInfo.save ? "hidden" : "text-blue-600 cursor-pointer"
                }
                onClick={() => {
                  handleJobSave(jobInfo.id);
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
                  jobInfo.save ? "text-blue-600 cursor-pointer" : "hidden"
                }
                onClick={() => {
                  handleJobRemove(jobInfo.id);
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
          <div className={`mt-6 text-sm ${theme.textColor}`}>
            {parse(jobInfo.description)}
          </div>
        </section>
        <section className="bg-indigo-700 text-white w-full p-10 mt-6 rounded-md bg-svg">
          <h1 className="font-bold text-lg mb-4">How to Apply</h1>
          <p className="text-sm">
            Nullam suscipit id ex vel scelerisque. Aenean rutrum metus at mollis
            fermentum. In id ex eleifend, tempus ipsum elementum, ornare dolor.
            Fusce fringilla sapien libero, non imperdiet massa interdum eget.
            Suspendisse potenti. Proin vestibulum consequat felis, scelerisque
            rutrum ante commodo non. Praesent efficitur dapibus commodo.
          </p>
        </section>
      </div>
    </div>
  );
};

export default JobDescription;
