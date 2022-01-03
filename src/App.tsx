import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
// homepage
import Home from './pages/homepage/Home';
// navbar
import Navbar from './components/navbar/Navbar';

// App component
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
