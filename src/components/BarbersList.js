// src/components/BarbersList.js
import React, { useState, useEffect } from 'react';
import { getBarbers } from '../api';
import { Link } from 'react-router-dom';

const BarbersList = () => {
  const [barbers, setBarbers] = useState([]);

  useEffect(() => {
    const fetchBarbers = async () => {
      const data = await getBarbers();
      setBarbers(data);
    };
    fetchBarbers();
  }, []);

  return (
    <div>
      <h2>Available Barbers</h2>
      <ul>
        {barbers.map((barber) => (
          <li key={barber.barberId}>
            {barber.name} - {barber.location}
            <Link to={`/booking/${barber.barberId}`}>Book</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BarbersList;
