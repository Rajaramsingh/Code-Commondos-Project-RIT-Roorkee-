import React, { useState } from 'react';
import { FaVideo, FaCalendarAlt, FaUserMd, FaClock, FaCheckCircle, FaFileMedical, FaStethoscope, FaNotesMedical, FaUserShield } from 'react-icons/fa';

const VirtualConsultation = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [showVideoModal, setShowVideoModal] = useState(false);

  const doctors = [
    { id: 1, name: 'Dr. Faizan Ashad', specialty: 'Cardiologist', experience: '15 years', rating: 4.8, patients: 1200 },
    { id: 2, name: 'Dr. Abhishek kumar', specialty: 'Pediatrician', experience: '12 years', rating: 4.9, patients: 1500 },
    { id: 3, name: 'Dr. Anupam Anand', specialty: 'Dermatologist', experience: '10 years', rating: 4.7, patients: 900 },
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  const features = [
    {
      icon: <FaVideo className="text-3xl text-blue-500" />,
      title: "HD Video Consultations",
      description: "Crystal clear video calls with your healthcare provider"
    },
    {
      icon: <FaFileMedical className="text-3xl text-green-500" />,
      title: "Digital Medical Records",
      description: "Secure access to your complete medical history"
    },
    {
      icon: <FaStethoscope className="text-3xl text-purple-500" />,
      title: "Remote Diagnosis",
      description: "Expert medical advice from the comfort of your home"
    },
    {
      icon: <FaUserShield className="text-3xl text-red-500" />,
      title: "HIPAA Compliant",
      description: "Your health information is protected and secure"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-20">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg rounded-lg p-8 mb-8 text-white">
          <h1 className="text-4xl font-bold text-center">Virtual Consultations</h1>
          <p className="text-center mt-2 text-blue-100">Connect with healthcare providers from anywhere</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition duration-300">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Connect with Healthcare Providers Online</h2>
              <p className="text-gray-600 mb-6">Schedule virtual appointments with experienced doctors from the comfort of your home. Get expert medical advice through secure video consultations.</p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>24/7 Access to Healthcare</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Secure Video Consultations</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Expert Medical Professionals</span>
                </div>
              </div>
              <button 
                onClick={() => setShowVideoModal(true)}
                className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center"
              >
                <FaVideo className="mr-2" />
                Start Video Consultation
              </button>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <img src="/telemedicine-illustration.svg" alt="Telemedicine" className="w-full max-w-md mx-auto" />
            </div>
          </div>
        </div>

        {/* Appointment Booking Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Schedule Your Consultation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Doctor Selection */}
            <div>
              <label className="block text-gray-700 mb-2">Select Doctor</label>
              <select 
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
              >
                <option value="">Choose a doctor</option>
                {doctors.map(doctor => (
                  <option key={doctor.id} value={doctor.id}>
                    {doctor.name} - {doctor.specialty}
                  </option>
                ))}
              </select>
            </div>

            {/* Date Selection */}
            <div>
              <label className="block text-gray-700 mb-2">Select Date</label>
              <input 
                type="date" 
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>

            {/* Time Selection */}
            <div>
              <label className="block text-gray-700 mb-2">Select Time</label>
              <select 
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                <option value="">Choose time</option>
                {timeSlots.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Schedule Appointment
          </button>
        </div>

        {/* Available Doctors Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Available Doctors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {doctors.map(doctor => (
              <div key={doctor.id} className="border rounded-lg p-4 hover:shadow-md transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaUserMd className="text-2xl text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg">{doctor.name}</h3>
                    <p className="text-gray-600">{doctor.specialty}</p>
                    <div className="flex items-center mt-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-gray-600 ml-1">{doctor.rating}</span>
                      <span className="text-gray-500 ml-2">({doctor.patients} patients)</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <FaClock className="mr-2" />
                  <span>{doctor.experience} experience</span>
                </div>
                <button className="w-full bg-blue-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-200 transition duration-300">
                  Book Appointment
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Consultation Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Video Consultation</h3>
              <button 
                onClick={() => setShowVideoModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <FaVideo className="text-4xl text-gray-400" />
            </div>
            <div className="flex justify-center space-x-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                End Call
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Start Call
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VirtualConsultation; 