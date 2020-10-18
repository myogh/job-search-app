import React from "react";
import JobCard from "./JobCard";

// --------- JobsContainer Comp | Parent: App --------------------
const JobsContainer = ({
  joblist,
  loading,
  handleJobSave,
  handleJobRemove,
}) => {
  return (
    <div>
      <div className="container mx-auto mt-20 px-16 mb-20">
        {!loading ? (
          <div className="w-full grid md:grid-cols-2 xl:grid-cols-3 grid-flow-row-dense gap-8">
            {joblist.map((job, i) => (
              <JobCard
                key={job.id}
                jobDetail={job}
                handleJobSave={handleJobSave}
                handleJobRemove={handleJobRemove}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-3xl">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default JobsContainer;
