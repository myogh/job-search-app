import gsap from "gsap";
import React, { useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "../assets/themes";
import JobCard from "../components/JobCard";
import NoSavedJobs from "../assets/images/savedjobs.svg";

// --------- JobsContainer Comp | Parent: App --------------------
const SavedJobs = ({
  joblist,
  handleJobSave,
  handleJobRemove,
  jobToView,
  handleRemoveAll,
}) => {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    gsap.to("#savedJobsSection", {
      duration: 0.85,
      x: "100%",
      borderRadius: "90%",
      ease: "expo.out",
    });
  }, []);

  return (
    <div>
      <div
        id="savedJobsSection"
        className="fixed inset-0 min-h-full min-w-full bg-indigo-600"
      ></div>
      <div className="container mx-auto mt-20 px-8 sm:px-16">
        <div
          className={`flex flex-col p-4 sm:p-0 sm:flex-row max-w-md mx-auto ${theme.bgColor} ${theme.textColor} rounded-lg -mt-40 lg:-mt-32 mb-10`}
        >
          <h1
            className={`p-4 text-xl mb-2 sm:mb-0 sm:text-lg sm:w-3/4 tracking-wide font-bold text-center`}
          >
            Saved Developer Positions
          </h1>
          <button
            onClick={() => handleRemoveAll()}
            className="w-1/3 mx-auto p-2 mb-4 sm:mb-0 sm:w-1/4 bg-indigo-500 rounded text-white"
          >
            Clear All
          </button>
        </div>
        {joblist.length > 0 ? (
          <div className="w-full grid md:grid-cols-2 xl:grid-cols-3 grid-flow-row-dense gap-8 mb-10">
            {joblist.map((job) => (
              <JobCard
                key={job.id}
                jobDetail={job}
                handleJobSave={handleJobSave}
                handleJobRemove={handleJobRemove}
                jobToView={jobToView}
              />
            ))}
          </div>
        ) : (
          <section className="flex flex-col max-w-md mx-auto mt-32">
            <img
              className="mb-12 w-3/4 mx-auto"
              src={NoSavedJobs}
              alt="no saved jobs found"
            />
            <h1 className="text-center text-gray-600 tracking-wide text-xl font-normal">
              SAVED JOBS WILL APPEAR HERE
            </h1>
          </section>
        )}
      </div>
    </div>
  );
};

export default SavedJobs;
