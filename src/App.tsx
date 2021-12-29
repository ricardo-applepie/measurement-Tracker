import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
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

export default  App ; 