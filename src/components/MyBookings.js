// src/components/MyBookings.js
import React, { useState, useEffect } from 'react';
import { getUserBookings, cancelBooking } from '../api';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const bookingsData = await getUserBookings(userId);
        setBookings(bookingsData);
      } catch (err) {
        setError('Failed to fetch bookings.');
      }
    };

    if (userId) {
      fetchBookings();
    }
  }, [userId]);

  const handleCancelBooking = async (bookingId) => {
    try {
      await cancelBooking(bookingId);
      setBookings((prevBookings) =>
        prevBookings.filter((booking) => booking.bookingId !== bookingId)
      );
    } catch (err) {
      setError('Failed to cancel booking.');
    }
  };

  return (
    <div>
      <h2>My Bookings</h2>
      {error && <p className="error">{error}</p>}
      <ul>
        {bookings.map((booking) => (
          <li key={booking.bookingId}>
            <p>Barber: {booking.barberId}</p>
            <p>Date: {booking.date}</p>
            <p>Time: {booking.time}</p>
            <p>Service: {booking.service}</p>
            <button onClick={() => handleCancelBooking(booking.bookingId)}>
              Cancel Booking
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyBookings;
