import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Appointments from './Appointments';
import Login from './Login';
import AppointmentList from './AppointmentList';
import Contact from './Contact';
import { AppointmentProvider } from './AppointmentContext'; // Import the context

function App() {
  return (
    <AppointmentProvider>
      <Router basename='/mern_app/'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/login" element={<Login />} />
          <Route path="/appointments-list" element={<AppointmentList />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </AppointmentProvider>
  );
}

export default App;
