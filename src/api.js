// src/api.js
const API_URL = "https://your-heroku-app.herokuapp.com/api";

export const registerUser = async (userData) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  return response.json();
};

export const loginUser = async (userData) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  return response.json();
};

export const getBarbers = async () => {
  const response = await fetch(`${API_URL}/barbers/list`);
  return response.json();
};

export const getBarberProfile = async (barberId) => {
  const response = await fetch(`${API_URL}/barbers/profile/${barberId}`);
  return response.json();
};

export const createBooking = async (bookingData) => {
  const response = await fetch(`${API_URL}/bookings/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookingData),
  });
  return response.json();
};

export const getUserBookings = async (userId) => {
  const response = await fetch(`${API_URL}/bookings/user/${userId}`);
  return response.json();
};

export const cancelBooking = async (bookingId) => {
  const response = await fetch(`${API_URL}/bookings/cancel`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ bookingId }),
  });
  return response.json();
};
