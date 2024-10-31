// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ApiResults from './pages/ApiResults';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<ApiResults />} />
      </Routes>
    
  );
}

export default App;




