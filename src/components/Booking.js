// src/components/Booking.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBarberProfile, createBooking } from '../api';

const Booking = () => {
  const { barberId } = useParams();
  const [barber, setBarber] = useState(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchBarber = async () => {
      const data = await getBarberProfile(barberId);
      setBarber(data);
    };
    fetchBarber();
  }, [barberId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('userId');
    const response = await createBooking({ userId, barberId, date, time, service });
    setMessage(response.message);
  };

  if (!barber) return <div>Loading...</div>;

  return (
    <div>
      <h2>Book Appointment with {barber.name}</h2>
      <form onSubmit={handleSubmit}>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        <select value={service} onChange={(e) => setService(e.target.value)}>
          {barber.services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <button type="submit">Book</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Booking;
