import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import JobsContainer from "./components/JobsContainer";
import Pagination from "./components/Pagination";
import SearchBox from "./components/SearchBox";

// ---------------- App Component----------------------------
function App() {
  const [jobList, setJobList] = useState([]);
  const [savedJobList, setSavedJob] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  //-------------- USE_EFFECT DATA FETCHING ------------------------
  useEffect(() => {
    setLoading(true);
    fetch("/positions.json?description=python")
      .then((response) => response.json())
      .then((data) => {
        setJobList(data);
        setLoading(false);
      });
  }, []);

  // -------------- HANDLE SEARCH BUTTON CLICK ---------------------
  const handleSearch = (searchTerm, locationTerm) => {
    setLoading(true);
    fetch(`/positions.json?description=${searchTerm}&location=${locationTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setJobList(data);
      });
  };

  // ------------------ HANDLE JOB SAVE ------------------------------
  const handleSave = (id) => {
    setSavedJob((prev) => [...prev, jobList.filter((job) => job.id === id)]);
    console.log(savedJobList);
  };

  // ----------------HANDLE PAGE NUMBER ---------------------------
  const handlePageChange = (pageId) => {
    setPageNumber(pageId);
  };

  //----------------- FOR PAGINATION --------------------------
  const postPerPage = 10;
  const numOfPages = Math.ceil(jobList.length / postPerPage);

  const startIndex = postPerPage * pageNumber - postPerPage;
  const endIndex = postPerPage * pageNumber;
  const postInOnePage = jobList.slice(startIndex, endIndex);

  // ----------- MAIN APP COMPONENT RETURN ------------------------
  return (
    <div>
      <Header />
      <SearchBox handleSearch={handleSearch} />
      <JobsContainer
        joblist={postInOnePage}
        loading={loading}
        handleJobSave={handleSave}
      />
      <Pagination
        numOfPages={numOfPages}
        handlePageChange={handlePageChange}
        currentPage={pageNumber}
      />
    </div>
  );
}

export default App;
