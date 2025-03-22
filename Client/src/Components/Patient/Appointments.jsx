import React, { useState } from 'react';
import { FaCalendarAlt, FaUserMd, FaClock, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCheckCircle, FaTimesCircle, FaExclamationCircle } from 'react-icons/fa';

const Appointments = () => {
  const [selectedStatus, setSelectedStatus] = useState('all');

  const appointments = [
    {
      id: 1,
      doctor: "Dr. Faizan Ashad",
      specialty: "Cardiologist",
      date: "2024-03-20",
      time: "10:00 AM",
      status: "confirmed",
      location: "Cardiology Center",
      type: "Follow-up",
      notes: "Regular checkup after heart surgery"
    },
    {
      id: 2,
      doctor: "Dr. Abhishek kumar",
      specialty: "Dermatologist",
      date: "2024-03-22",
      time: "2:30 PM",
      status: "pending",
      location: "Dermatology Clinic",
      type: "Consultation",
      notes: "Skin condition evaluation"
    },
    {
      id: 3,
      doctor: "Dr. Sarah Wilson",
      specialty: "Orthopedist",
      date: "2024-03-25",
      time: "11:00 AM",
      status: "cancelled",
      location: "Orthopedic Center",
      type: "Follow-up",
      notes: "Post-surgery checkup"
    }
  ];

  const filteredAppointments = selectedStatus === 'all' 
    ? appointments 
    : appointments.filter(apt => apt.status === selectedStatus);

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-20">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-800 shadow-lg rounded-lg p-8 mb-8 text-white">
          <h1 className="text-4xl font-bold text-center">My Appointments</h1>
          <p className="text-center mt-2 text-blue-100">Manage and track your medical appointments</p>
        </div>

        {/* Status Filter */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setSelectedStatus('all')}
              className={`px-6 py-2 rounded-lg transition duration-300 ${
                selectedStatus === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All Appointments
            </button>
            <button
              onClick={() => setSelectedStatus('confirmed')}
              className={`px-6 py-2 rounded-lg transition duration-300 ${
                selectedStatus === 'confirmed'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Confirmed
            </button>
            <button
              onClick={() => setSelectedStatus('pending')}
              className={`px-6 py-2 rounded-lg transition duration-300 ${
                selectedStatus === 'pending'
                  ? 'bg-yellow-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => setSelectedStatus('cancelled')}
              className={`px-6 py-2 rounded-lg transition duration-300 ${
                selectedStatus === 'cancelled'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Cancelled
            </button>
          </div>
        </div>

        {/* Appointments List */}
        <div className="space-y-6">
          {filteredAppointments.map((appointment) => (
            <div key={appointment.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{appointment.doctor}</h3>
                  <p className="text-gray-600">{appointment.specialty}</p>
                </div>
                <div className={`px-4 py-2 rounded-full text-sm font-medium mt-2 md:mt-0 ${
                  appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                  appointment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="flex items-center text-gray-600">
                  <FaCalendarAlt className="mr-2" />
                  <span>{appointment.date}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaClock className="mr-2" />
                  <span>{appointment.time}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{appointment.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaUserMd className="mr-2" />
                  <span>{appointment.type}</span>
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="text-gray-600 mb-4">{appointment.notes}</p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center">
                    <FaPhone className="mr-2" />
                    Call Doctor
                  </button>
                  <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300 flex items-center">
                    <FaEnvelope className="mr-2" />
                    Send Message
                  </button>
                  {appointment.status === 'pending' && (
                    <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300 flex items-center">
                      <FaTimesCircle className="mr-2" />
                      Cancel Appointment
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointments; 