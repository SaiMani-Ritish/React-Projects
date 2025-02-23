// src/components/CityDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CityDetails = () => {
  const { id } = useParams();
  const [city, setCity] = useState(null);

  useEffect(() => {
    const cities = JSON.parse(localStorage.getItem('cities') || '[]');
    setCity(cities[id]);
  }, [id]);

  if (!city) return <div className="city-details">Select a city to view details</div>;

  return (
    <div className="city-details">
      <h2>City Details</h2>
      <div className="details-content">
        <p><strong>Name:</strong> {city.name}</p>
        <p><strong>Country:</strong> {city.country}</p>
        <p><strong>Population:</strong> {city.population.toLocaleString()}</p>
        <p><strong>Famous Landmark:</strong> {city.landmark}</p>
      </div>
    </div>
  );
};

export default CityDetails;