import React from "react";
import { HashRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";

// ---------------- App Component----------------------------
function App() {
  return (
    <HashRouter>
      <Home />
      <Footer />
    </HashRouter>
  );
}

export default App;
