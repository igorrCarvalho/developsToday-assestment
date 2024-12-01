import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountryList from './pages/CountryList';
import CountryInfo from './pages/CountryInfo';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Route for Country List Page */}
        <Route path="/" element={<CountryList />} />
        
        {/* Route for Country Info Page */}
        <Route path="/country/:countryCode" element={<CountryInfo />} />
      </Routes>
    </Router>
  );
};

export default App;