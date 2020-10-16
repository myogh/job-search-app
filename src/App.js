import React, { useEffect, useState } from "react"
import Header from "./components/Header"
import JobsContainer from "./components/JobsContainer"
import SearchBox from "./components/SearchBox"

// ---------------- App Component----------------------------
function App() {
  const [jobList, setJobList] = useState([])
  const [loading, setLoading] = useState(false)

  //-------------- USE EFFECT DATA FETCHING ------------------------
  useEffect(() => {
    setLoading(true)
    fetch("/positions.json?description=python")
      .then((response) => response.json())
      .then((data) => {
        setJobList(data)
        setLoading(false)
      })
  }, [])

  const handleSearch = (searchTerm, locationTerm) => {
    setLoading(true)
    fetch(`/positions.json?description=${searchTerm}&location=${locationTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false)
        setJobList(data)
      })
  }

  // ----------- MAIN APP COMPONENT RETURN ------------------------
  return (
    <div>
      <Header />
      <SearchBox handleSearch={handleSearch} />
      <JobsContainer joblist={jobList} loading={loading} />
    </div>
  )
}

export default App
