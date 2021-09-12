import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { colors } from "../assets/colors";
import { ThemeContext, themes } from "../assets/themes";
import Header from "../components/Header";
import JobsContainer from "../components/JobsContainer";
import SavedJobs from "./SavedJobs";
import SearchBox from "../components/SearchBox";
import JobDescription from "./JobDescription";

// ---------------- App Component----------------------------
function Home() {
  const [jobList, setJobList] = useState([]);
  const [savedJobList, setSavedJob] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [jobForDescription, setJobToDescribe] = useState({});
  const [nightMode, setNightMode] = useState(false);
  const [fullTime, setFullTime] = useState(false);

  //-------------- DATA FETCHING UPON DOCUMENT LOAD ------------------------
  useEffect(() => {
    setLoading(true);
    fetch(
      // `https://quiet-falls-57201.herokuapp.com/https://jobs.github.com/positions.json?description=`
      `https://remotive.io/api/remote-jobs?category=software-dev`
    )
      .then((response) => response.json())
      .then((data) => {
        const newData = data.jobs.map((eachData) =>
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
      // `https://quiet-falls-57201.herokuapp.com/https://jobs.github.com/positions.json?description=${searchTerm}&location=${locationTerm}`
      `https://remotive.io/api/remote-jobs?category=software-dev`
    )
      .then((response) => response.json())
      .then((data) => {
        const newData = data.map((eachData) =>
          // Adding color and save property to the incoming data
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
  const filterSearch = () => {
    setFullTime((prv) => !prv);
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
    const jobListMarked = jobList.map((job) => {
      if (job.id === id) {
        job.save = false;
      }
      return job;
    });
    setJobList(jobListMarked);
    setSavedJob(sv);
  };

  const handleRemoveAll = () => {
    const jobListMarkedSaved = jobList.map((job) => {
      job.save = false;
      return job;
    });
    setJobList(jobListMarkedSaved);
    setSavedJob([]);
  };

  // ---------------- HANDLE PAGE NUMBER ---------------------------
  const handlePageChange = (pageId) => {
    setPageNumber(pageId);
  };

  // ---------------- JOB TO VIEW IN DESCRIBTION SECTION ---------------------------
  const viewSavedJobs = (id) => {
    const jobView = savedJobList.filter((job) => job.id === id);
    setJobToDescribe(...jobView);
  };

  const jobToView = (id) => {
    const jobView = jobList.filter((job) => job.id === id);
    setJobToDescribe(...jobView);
  };

  // ----------------- HANDLE NIGHT MODE ------------------------
  const handleNightMode = () => {
    setNightMode((prv) => !prv);
  };

  //------------------- FOR PAGINATION ----------------------------
  const postPerPage = 10;
  const numOfPages = Math.ceil(jobList.length / postPerPage);

  const startIndex = postPerPage * pageNumber - postPerPage;
  const endIndex = postPerPage * pageNumber;
  const postInOnePage = jobList.slice(startIndex, endIndex);

  document.body.style.backgroundColor = nightMode ? "#262629" : "#e2e8f0";

  // --------------- Filtering results - full time or not ----------------------
  const filteredResult = fullTime
    ? postInOnePage.filter((job) => job.type_type === "Full Time")
    : postInOnePage;

  // ----------- MAIN APP COMPONENT RETURN ------------------------
  return (
    <ThemeContext.Provider value={nightMode ? themes.dark : themes.light}>
      <div className="min-h-screen">
        <Header
          savedJobs={savedJobList.length}
          handleNightMode={handleNightMode}
          nightMode={nightMode}
        />
        <Switch>
          <Redirect exact from="/" to="/jobs/1" />
          <Route exact path="/jobs/:id">
            <SearchBox
              handleSearch={handleSearch}
              filterSearch={filterSearch}
            />
            <JobsContainer
              joblist={filteredResult}
              loading={loading}
              handleJobSave={handleSave}
              handleJobRemove={handleRemove}
              jobToView={jobToView}
              numOfPages={numOfPages}
              handlePageChange={handlePageChange}
              currentPage={pageNumber}
            />
          </Route>
          <Route path="/description/">
            <JobDescription
              jobInfo={jobForDescription}
              handleJobRemove={handleRemove}
              handleJobSave={handleSave}
            />
          </Route>
          <Route path="/saved-jobs">
            <SavedJobs
              joblist={savedJobList}
              handleJobSave={handleSave}
              handleJobRemove={handleRemove}
              jobToView={viewSavedJobs}
              handleRemoveAll={handleRemoveAll}
            />
          </Route>
        </Switch>
      </div>
    </ThemeContext.Provider>
  );
}

export default Home;
