import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../assets/themes";
import JobCard from "../components/JobCard";

// --------- JobsContainer Comp | Parent: App --------------------
const SavedJobs = ({ joblist, handleJobSave, handleJobRemove, jobToView }) => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <div className="container mx-auto mt-20 px-8 sm:px-16">
        <h1
          className={`${theme.bgColor} ${theme.textColor} p-5 text-lg rounded max-w-md tracking-wide font-bold -mt-40 sm:-mt-32 mx-auto text-center mb-10`}
        >
          Saved Developer Positions
        </h1>
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
          <h1 className="text-center text-gray-500 tracking-wide text-lg">
            No Jobs have been saved
          </h1>
        )}
      </div>
    </div>
  );
};

export default SavedJobs;
