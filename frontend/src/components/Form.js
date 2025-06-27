// frontend/src/components/Form.js
import React, { useState } from "react";
import axios from "axios";
import "./Form.css"; // optional: your styling

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    symptoms: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://your-backend.onrender.com/api/appointments", formData);
      alert("Appointment booked successfully!");
    } catch (err) {
      alert("Error booking appointment");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="appointment-form">
      <h2>Book a Doctor's Appointment</h2>
      <input name="name" onChange={handleChange} value={formData.name} placeholder="Name" required />
      <input name="email" onChange={handleChange} value={formData.email} placeholder="Email" required />
      <input name="phone" onChange={handleChange} value={formData.phone} placeholder="Phone" required />
      <input type="date" name="date" onChange={handleChange} value={formData.date} required />
      <input type="time" name="time" onChange={handleChange} value={formData.time} required />
      <textarea name="symptoms" onChange={handleChange} value={formData.symptoms} placeholder="Describe symptoms" />
      <button type="submit">Book Appointment</button>
    </form>
  );
};

// ✅ Change this to your deployed backend API URL
await axios.post("https://your-backend-url.onrender.com/api/appointments", formData);


export default Form;
