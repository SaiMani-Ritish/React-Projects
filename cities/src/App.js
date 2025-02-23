// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CitiesList from './components/CitiesList';
import AddCity from './components/AddCity';
import CityDetails from './components/CityDetails';  // Add this import
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="navbar">
          <h1>Cities App</h1>
          <div className="nav-links">
            <Link to="/">Cities List</Link>
            <Link to="/add">Add City</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<CitiesList />}>
            <Route path="city/:id" element={<CityDetails />} />
          </Route>
          <Route path="/add" element={<AddCity />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;