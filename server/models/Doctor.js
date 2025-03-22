const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const doctorSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Please add your full name']
  },
  email: {
    type: String,
    required: [true, 'Please add your email'],
    unique: true
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
  specialization: {
    type: String,
    required: [true, 'Please add your specialization']
  },
  experience: {
    type: Number,
    required: [true, 'Please add years of experience']
  },
  licenseNumber: {
    type: String,
    required: [true, 'Please add your medical license number'],
    unique: true
  }
}, {
  timestamps: true
});

doctorSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

doctorSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('Doctor', doctorSchema);
