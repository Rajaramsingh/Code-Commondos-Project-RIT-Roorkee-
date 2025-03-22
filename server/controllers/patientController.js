const jwt = require('jsonwebtoken');
const Patient = require('../models/Patient');

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id, userType: 'patient' }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// @desc    Register patient
// @route   POST /api/patients/register
// @access  Public
const registerPatient = async (req, res) => {
  try {
    const { fullName, email, password, phone, dateOfBirth } = req.body;

    // Check if patient exists
    const patientExists = await Patient.findOne({ email });
    if (patientExists) {
      return res.status(400).json({ message: 'Patient already exists' });
    }

    // Create patient
    const patient = await Patient.create({
      fullName,
      email,
      password,
      phone,
      dateOfBirth
    });

    if (patient) {
      res.status(201).json({
        _id: patient._id,
        fullName: patient.fullName,
        email: patient.email,
        token: generateToken(patient._id)
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Login patient
// @route   POST /api/patients/login
// @access  Public
const loginPatient = async (req, res) => {
  try {
    const { email, password } = req.body;

    const patient = await Patient.findOne({ email });

    if (patient && (await patient.matchPassword(password))) {
      res.json({
        _id: patient._id,
        fullName: patient.fullName,
        email: patient.email,
        token: generateToken(patient._id)
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  registerPatient,
  loginPatient
};
