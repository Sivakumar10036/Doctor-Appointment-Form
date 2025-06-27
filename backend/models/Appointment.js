const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  date: String,
  time: String,
  symptoms: String,
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);
