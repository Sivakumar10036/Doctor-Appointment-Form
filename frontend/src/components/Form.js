// src/components/Form.js
import React from 'react';

function Form() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Book an Appointment</h2>
      <form>
        <input type="text" placeholder="Name" required /><br /><br />
        <input type="email" placeholder="Email" required /><br /><br />
        <input type="date" required /><br /><br />
        <input type="time" required /><br /><br />
        <textarea placeholder="Symptoms" /><br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
