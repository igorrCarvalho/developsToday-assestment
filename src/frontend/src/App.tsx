import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountryList from './pages/CountryList';
import CountryInfo from './pages/CountryInfo';
import "./App.css";

const App: React.FC = () => {
  return (
    <div className='w-full h-full'>
      <Router>
        <Routes>
          {/* Route for Country List Page */}
          <Route path="/" element={<CountryList />} />
          
          {/* Route for Country Info Page */}
          <Route path="/country/:countryCode" element={<CountryInfo />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;