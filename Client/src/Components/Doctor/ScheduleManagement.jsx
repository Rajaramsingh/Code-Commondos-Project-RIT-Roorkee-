import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaUserMd, FaVideo, FaPhoneAlt, FaMapMarkerAlt, FaClipboardList, FaUserPlus, FaFilter } from 'react-icons/fa';

const ScheduleManagement = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedView, setSelectedView] = useState('day');
  const [selectedType, setSelectedType] = useState('all');

  const appointmentTypes = [
    { id: 'all', label: 'All Types' },
    { id: 'in-person', label: 'In-Person' },
    { id: 'video', label: 'Video Call' },
    { id: 'phone', label: 'Phone Call' }
  ];

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
    "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM"
  ];

  const appointments = [
    {
      id: 1,
      patientName: "Rajesh Kumar",
      time: "09:00 AM",
      type: "in-person",
      duration: "30 min",
      status: "confirmed",
      reason: "Follow-up",
      notes: "Blood pressure review"
    },
    {
      id: 2,
      patientName: "Priya Sharma",
      time: "10:30 AM",
      type: "video",
      duration: "30 min",
      status: "confirmed",
      reason: "Consultation",
      notes: "Diabetes check"
    },
    {
      id: 3,
      patientName: "Ahmed Khan",
      time: "02:00 PM",
      type: "phone",
      duration: "30 min",
      status: "pending",
      reason: "New Patient",
      notes: "Initial consultation"
    }
  ];

  const getAppointmentForSlot = (slot) => {
    return appointments.find(app => app.time === slot);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-800 rounded-xl shadow-2xl p-8 mb-8">
          <h1 className="text-4xl font-bold text-white text-center mb-4">Schedule Management</h1>
          <p className="text-blue-100 text-center mb-8">Manage your appointments and schedule efficiently</p>
          
          {/* View Toggle */}
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-2 flex justify-between">
            {['day', 'week', 'month'].map((view) => (
              <button
                key={view}
                onClick={() => setSelectedView(view)}
                className={`px-6 py-2 rounded-lg transition duration-300 ${
                  selectedView === view
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {view.charAt(0).toUpperCase() + view.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Controls Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-blue-600 transition duration-300">
                <FaCalendarAlt className="text-xl" />
              </button>
              <h2 className="text-xl font-semibold">
                {selectedDate.toLocaleDateString('en-US', { 
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </h2>
            </div>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center">
                <FaUserPlus className="mr-2" />
                New Appointment
              </button>
              <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300 flex items-center">
                <FaClipboardList className="mr-2" />
                Block Time
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap gap-4">
            {appointmentTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`px-4 py-2 rounded-lg transition duration-300 ${
                  selectedType === type.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Schedule Grid */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="divide-y">
            {timeSlots.map((slot) => {
              const appointment = getAppointmentForSlot(slot);
              return (
                <div key={slot} className="flex items-stretch hover:bg-gray-50 transition duration-300">
                  <div className="w-32 p-4 border-r bg-gray-50 flex items-center justify-center">
                    <span className="text-gray-600 font-medium">{slot}</span>
                  </div>
                  <div className="flex-1 p-4">
                    {appointment ? (
                      <div className={`rounded-lg p-4 ${
                        appointment.type === 'in-person' ? 'bg-blue-50' :
                        appointment.type === 'video' ? 'bg-green-50' :
                        'bg-purple-50'
                      }`}>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold text-gray-800">{appointment.patientName}</h3>
                            <p className="text-gray-600">{appointment.reason}</p>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-sm ${
                            appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-gray-600">
                          <div className="flex items-center">
                            <FaClock className="mr-1" />
                            <span>{appointment.duration}</span>
                          </div>
                          <div className="flex items-center">
                            {appointment.type === 'in-person' && <FaMapMarkerAlt className="mr-1" />}
                            {appointment.type === 'video' && <FaVideo className="mr-1" />}
                            {appointment.type === 'phone' && <FaPhoneAlt className="mr-1" />}
                            <span>{appointment.type.charAt(0).toUpperCase() + appointment.type.slice(1)}</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="h-full flex items-center justify-center text-gray-400">
                        Available
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleManagement; 