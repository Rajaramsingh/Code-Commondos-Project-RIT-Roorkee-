const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const patientSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Please add your full name']
  },
  email: {
    type: String,
    required: [true, 'Please add your email'],
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please add a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minlength: 6
  },
  phone: {
    type: String,
    required: [true, 'Please add your phone number']
  },
  dateOfBirth: {
    type: Date,
    required: [true, 'Please add your date of birth']
  },
  medicalHistory: [{
    condition: String,
    diagnosis: String,
    date: Date
  }]
}, {
  timestamps: true
});

// Encrypt password before saving
patientSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Match password
patientSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('Patient', patientSchema);
