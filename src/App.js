import React, { useEffect, useState } from "react";
import { colors } from "./assets/colors";
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
        const newData = data.map((eachData) =>
          Object.assign({}, eachData, {
            color: colors[Math.floor(Math.random() * 40)],
          })
        );
        setJobList(newData);
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

  // ------------------ HANDLE JOB SAVE AND REMOVE ------------------------------
  const handleSave = (id) => {
    const sv = [...savedJobList, ...jobList.filter((job) => job.id === id)];
    setSavedJob(sv);
  };

  const handleRemove = (id) => {
    const sv = savedJobList.filter((job) => job.id !== id);
    setSavedJob(sv);
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
      <h1>{savedJobList.length}</h1>
      <JobsContainer
        joblist={postInOnePage}
        loading={loading}
        handleJobSave={handleSave}
        handleJobRemove={handleRemove}
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
