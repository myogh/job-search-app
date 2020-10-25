import React from "react";
import JobCard from "./JobCard";
import Pagination from "./Pagination";
import notFoundImg from "../assets/images/void.svg";
import loadingSvg from "../assets/images/loading.svg";

// --------- JobsContainer Comp | Parent: App --------------------
const JobsContainer = ({
  joblist,
  loading,
  handleJobSave,
  handleJobRemove,
  jobToView,
  numOfPages,
  handlePageChange,
  currentPage,
}) => {
  return (
    <div>
      <div className="container mx-auto mt-20 px-8 sm:px-16 mb-20">
        {loading ? (
          <img
            className="w-1/5 sm:w-1/6 sm:max-w-sm mx-auto"
            src={loadingSvg}
            alt="loading animation"
          />
        ) : joblist.length > 0 ? (
          <div>
            <div className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-10">
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
            <Pagination
              numOfPages={numOfPages}
              handlePageChange={handlePageChange}
              currentPage={currentPage}
            />
          </div>
        ) : (
          <div>
            <img
              className="w-1/2 sm:w-1/6 mx-auto"
              src={notFoundImg}
              alt="not found illustration"
            />
            <p className="text-lg text-gray-500 mt-5 text-center">
              No Jobs Found - Try Different Keyword
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobsContainer;
