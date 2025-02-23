import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const CitiesList = () => {
  const [cities] = useState(() => {
    const savedCities = localStorage.getItem('cities');
    return savedCities ? JSON.parse(savedCities) : [];
  });

  return (
    <div className="cities-container">
      <div className="cities-list">
        <h2>Cities List</h2>
        {cities.map((city, index) => (
          <Link 
            key={index} 
            to={`/city/${index}`} 
            className="city-link"
          >
            {city.name}, {city.country}
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default CitiesList;