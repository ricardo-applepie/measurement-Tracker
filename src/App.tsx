import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/homepage/Home';
import Navbar from './components/navbar/Navbar';

const App: React.FC<{}> = () => {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <footer>footer section</footer>
    </div>
  );
};

export default App;
