const jwt = require('jsonwebtoken');
const Doctor = require('../models/Doctor');

const generateToken = (id) => {
  return jwt.sign({ id, userType: 'doctor' }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// @desc    Register doctor
// @route   POST /api/doctors/register
// @access  Public
const registerDoctor = async (req, res) => {
  try {
    const { fullName, email, password, phone, specialization, experience, licenseNumber } = req.body;

    const doctorExists = await Doctor.findOne({ email });
    if (doctorExists) {
      return res.status(400).json({ message: 'Doctor already exists' });
    }

    const doctor = await Doctor.create({
      fullName,
      email,
      password,
      phone,
      specialization,
      experience,
      licenseNumber
    });

    if (doctor) {
      res.status(201).json({
        _id: doctor._id,
        fullName: doctor.fullName,
        email: doctor.email,
        specialization: doctor.specialization,
        token: generateToken(doctor._id)
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Login doctor
// @route   POST /api/doctors/login
// @access  Public
const loginDoctor = async (req, res) => {
  try {
    const { email, password } = req.body;

    const doctor = await Doctor.findOne({ email });

    if (doctor && (await doctor.matchPassword(password))) {
      res.json({
        _id: doctor._id,
        fullName: doctor.fullName,
        email: doctor.email,
        specialization: doctor.specialization,
        token: generateToken(doctor._id)
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  registerDoctor,
  loginDoctor
};
