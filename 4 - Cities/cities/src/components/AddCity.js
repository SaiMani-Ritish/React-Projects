// src/components/AddCity.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCity = () => {
  const navigate = useNavigate();
  const [cityData, setCityData] = useState({
    name: '',
    country: '',
    population: '',
    landmark: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const savedCities = localStorage.getItem('cities');
    const cities = savedCities ? JSON.parse(savedCities) : [];
    
    cities.push(cityData);
    localStorage.setItem('cities', JSON.stringify(cities));
    
    navigate('/');
  };

  const handleChange = (e) => {
    setCityData({
      ...cityData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="add-city">
      <h2>Add New City</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>City Name:</label>
          <input
            type="text"
            name="name"
            value={cityData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={cityData.country}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Population:</label>
          <input
            type="number"
            name="population"
            value={cityData.population}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Famous Landmark:</label>
          <input
            type="text"
            name="landmark"
            value={cityData.landmark}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Add City</button>
      </form>
    </div>
  );
};

export default AddCity;