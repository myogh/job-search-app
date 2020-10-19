import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { colors } from "../assets/colors";
import Header from "../components/Header";
import JobsContainer from "../components/JobsContainer";
import Pagination from "../components/Pagination";
import SearchBox from "../components/SearchBox";
import JobDescription from "./JobDescription";

// ---------------- App Component----------------------------
function Home() {
  const [jobList, setJobList] = useState([]);
  const [fullTime, setFullTime] = useState(false);
  const [savedJobList, setSavedJob] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [jobSelect, setViewJob] = useState({});

  //-------------- USE_EFFECT DATA FETCHING ------------------------
  useEffect(() => {
    setLoading(true);
    fetch("/positions.json?description=python&markdown=true")
      .then((response) => response.json())
      .then((data) => {
        const newData = data.map((eachData) =>
          // Adding color property to incoming data
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
    fetch(
      `/positions.json?description=${searchTerm}&location=${locationTerm}&full_time=${fullTime}&markdown=true`
    )
      .then((response) => response.json())
      .then((data) => {
        const newData = data.map((eachData) =>
          // Adding color property to incoming data
          Object.assign({}, eachData, {
            color: colors[Math.floor(Math.random() * 40)],
          })
        );
        setJobList(newData);
        setLoading(false);
      });
  };

  // ----------------------- FILTER SEARCH -----------------------------
  const filterSearch = (fullTimeState) => {
    setFullTime(fullTimeState);
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

  const jobToView = (id) => {
    const jobView = jobList.filter((job) => job.id === id);
    setViewJob(...jobView);
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
      <Header savedJobs={savedJobList.length} />
      <Switch>
        <Route exact path="/">
          <SearchBox handleSearch={handleSearch} filterSearch={filterSearch} />
          <JobsContainer
            joblist={postInOnePage}
            loading={loading}
            handleJobSave={handleSave}
            handleJobRemove={handleRemove}
            jobToView={jobToView}
          />
          <Pagination
            numOfPages={numOfPages}
            handlePageChange={handlePageChange}
            currentPage={pageNumber}
          />
        </Route>
        <Route>
          <JobDescription
            jobInfo={jobSelect}
            handleJobRemove={handleRemove}
            handleJobSave={handleSave}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default Home;
