import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

// ---------------- App Component----------------------------
function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

export default App;
