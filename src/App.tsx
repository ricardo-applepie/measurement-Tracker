import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/homepage/Home";

function App() {
  return (
    <div className="container">
      <Routes>
       <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default  App ; 