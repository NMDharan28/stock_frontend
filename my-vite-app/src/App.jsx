import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import StockForm from './components/StockForm';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<StockForm />} />
        <Route path="/edit/:id" element={<StockForm />} />
      </Routes>
    </Router>
  );
};

export default App;
