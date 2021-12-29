import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
