import React, { useState } from 'react';
import './Form.css';

function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', date: '', time: '', symptoms: ''
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('Submitting...');

    try {
      const res = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatusMessage('✅ Appointment booked successfully!');
      } else {
        setStatusMessage(`❌ Error: ${data.message || 'Something went wrong'}`);
      }
    } catch (error) {
      setStatusMessage(`❌ Error: ${error.message}`);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="appointment-form-container">
      <form onSubmit={handleSubmit} className="appointment-form">
        <h2>Book Doctor Appointment</h2>
        <input name="name" placeholder="Full Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} required />
        <input name="date" type="date" onChange={handleChange} required />
        <input name="time" type="time" onChange={handleChange} required />
        <textarea name="symptoms" placeholder="Describe symptoms..." onChange={handleChange} required />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Booking...' : 'Book Appointment'}
        </button>
      </form>

      {/* Show final result or error */}
      {statusMessage && (
        <div className="status-message">
          <p>{statusMessage}</p>
        </div>
      )}
    </div>
  );
}

export default AppointmentForm;
