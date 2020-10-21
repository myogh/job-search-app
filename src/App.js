import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";

// ---------------- App Component----------------------------
function App() {
  return (
    <BrowserRouter>
      <Home />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
