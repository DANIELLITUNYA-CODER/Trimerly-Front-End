// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import BarbersList from './components/BarbersList';
import Booking from './components/Booking';
import MyBookings from './components/MyBookings';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/barbers" component={BarbersList} />
          <Route path="/booking/:barberId" component={Booking} />
          <Route path="/my-bookings" component={MyBookings} />
          <Route path="/" component={BarbersList} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
