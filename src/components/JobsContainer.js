import React from "react"
import JobCard from "./JobCard"

// --------- JobsContainer Comp | parent: App --------------------
const JobsContainer = ({ joblist, loading }) => {
  return (
    <div>
      <div className="container mx-auto mt-20 px-16 mb-20">
        {!loading ? (
          <div className="w-full grid md:grid-cols-2 xl:grid-cols-3 grid-flow-row-dense gap-8">
            {joblist.map((job, i) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="text-center text-3xl">Loading...</div>
        )}
      </div>
    </div>
  )
}

export default JobsContainer
