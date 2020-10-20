import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { colors } from "../assets/colors";
import { ThemeContext, themes } from "../assets/themes";
import Header from "../components/Header";
import JobsContainer from "../components/JobsContainer";
import SavedJobsContainer from "../components/SavedJobsContainer";
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
  const [nightMode, setNightMode] = useState(false);

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
            save: false,
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
            save: false,
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
    const jobListMarkedSaved = jobList.map((job) => {
      if (job.id === id) {
        job.save = true;
      }
      return job;
    });
    setJobList(jobListMarkedSaved);
    setSavedJob(sv);
  };

  const handleRemove = (id) => {
    const sv = savedJobList.filter((job) => job.id !== id);
    const jobListMarkedSaved = jobList.map((job) => {
      if (job.id === id) {
        job.save = false;
      }
      return job;
    });
    setJobList(jobListMarkedSaved);
    setSavedJob(sv);
  };

  // ----------------HANDLE PAGE NUMBER ---------------------------
  const handlePageChange = (pageId) => {
    setPageNumber(pageId);
  };

  // ---------------- Job Info Expand Detail ---------------------------
  const jobToView = (id) => {
    const jobView = jobList.filter((job) => job.id === id);
    setViewJob(...jobView);
  };

  // ----------------- HANDLE NIGHT MODE ------------------------
  const handleNightMode = () => {
    setNightMode((prv) => !prv);
  };

  //----------------- FOR PAGINATION --------------------------
  const postPerPage = 10;
  const numOfPages = Math.ceil(jobList.length / postPerPage);

  const startIndex = postPerPage * pageNumber - postPerPage;
  const endIndex = postPerPage * pageNumber;
  const postInOnePage = jobList.slice(startIndex, endIndex);

  document.body.style.backgroundColor = nightMode ? "#262629" : "#e2e8f0";

  // ----------- MAIN APP COMPONENT RETURN ------------------------
  return (
    <ThemeContext.Provider value={nightMode ? themes.dark : themes.light}>
      <div>
        <Header
          savedJobs={savedJobList.length}
          handleNightMode={handleNightMode}
          nightMode={nightMode}
        />
        <Switch>
          <Route exact path="/">
            <SearchBox
              handleSearch={handleSearch}
              filterSearch={filterSearch}
            />
            <JobsContainer
              joblist={postInOnePage}
              loading={loading}
              handleJobSave={handleSave}
              handleJobRemove={handleRemove}
              jobToView={jobToView}
              numOfPages={numOfPages}
              handlePageChange={handlePageChange}
              currentPage={pageNumber}
            />
          </Route>
          <Route path="/positions/">
            <JobDescription
              jobInfo={jobSelect}
              handleJobRemove={handleRemove}
              handleJobSave={handleSave}
            />
          </Route>
          <Route path="/saved-jobs">
            <SavedJobsContainer
              joblist={savedJobList}
              loading={loading}
              handleJobSave={handleSave}
              handleJobRemove={handleRemove}
              jobToView={jobToView}
              numOfPages={numOfPages}
              handlePageChange={handlePageChange}
              currentPage={pageNumber}
            />
          </Route>
        </Switch>
      </div>
    </ThemeContext.Provider>
  );
}

export default Home;
