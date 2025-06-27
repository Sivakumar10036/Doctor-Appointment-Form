import React from 'react';
import AppointmentForm from './components/AppointmentForm'; // ✅ this path must be correct
import './App.css';

function App() {
  return (
    <div className="App">
      <AppointmentForm />
    </div>
  );
}

export default App;
// frontend/src/App.js
import React from "react";
import Form from "./components/Form";

function App() {
  return (
    <div>
      <Form />
    </div>
  );
}

export default App;
