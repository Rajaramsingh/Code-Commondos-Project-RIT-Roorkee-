import React, { useState } from 'react';
import { FaUserInjured, FaSearch, FaFilter, FaCalendarAlt, FaPhoneAlt, FaEnvelope, FaNotesMedical, FaHistory, FaFileMedical, FaUserClock } from 'react-icons/fa';

const PatientManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Patients' },
    { id: 'active', label: 'Active' },
    { id: 'scheduled', label: 'Scheduled' },
    { id: 'pending', label: 'Pending Review' },
    { id: 'follow-up', label: 'Follow-up' }
  ];

  const patients = [
    {
      id: 1,
      name: "Rajesh Kumar",
      age: 45,
      gender: "Male",
      condition: "Hypertension",
      lastVisit: "2024-03-15",
      nextAppointment: "2024-03-30",
      status: "active",
      contact: "+91 98765 43210",
      email: "rajesh.k@email.com",
      bloodGroup: "B+",
      recentTests: ["Blood Pressure", "ECG"],
      medications: ["Amlodipine", "Metoprolol"]
    },
    {
      id: 2,
      name: "Priya Sharma",
      age: 32,
      gender: "Female",
      condition: "Diabetes Type 2",
      lastVisit: "2024-03-18",
      nextAppointment: "2024-04-02",
      status: "scheduled",
      contact: "+91 98765 43211",
      email: "priya.s@email.com",
      bloodGroup: "O+",
      recentTests: ["Blood Sugar", "HbA1c"],
      medications: ["Metformin", "Glimepiride"]
    },
    {
      id: 3,
      name: "Ahmed Khan",
      age: 28,
      gender: "Male",
      condition: "Asthma",
      lastVisit: "2024-03-20",
      nextAppointment: null,
      status: "pending",
      contact: "+91 98765 43212",
      email: "ahmed.k@email.com",
      bloodGroup: "A+",
      recentTests: ["Spirometry", "Chest X-ray"],
      medications: ["Salbutamol"]
    }
  ];

  const filteredPatients = patients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.condition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || patient.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-800 rounded-xl shadow-2xl p-8 mb-8">
          <h1 className="text-4xl font-bold text-white text-center mb-4">Patient Management</h1>
          <p className="text-blue-100 text-center mb-8">Manage and monitor your patients' health records and appointments</p>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto relative">
            <div className="flex items-center bg-white rounded-lg shadow-lg p-2">
              <FaSearch className="text-gray-400 ml-3" />
              <input
                type="text"
                placeholder="Search patients by name or condition..."
                className="w-full px-4 py-2 rounded-lg focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`p-6 rounded-xl shadow-lg transition duration-300 ${
                selectedFilter === filter.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <div className="text-lg font-semibold">{filter.label}</div>
              <div className={selectedFilter === filter.id ? 'text-blue-100' : 'text-gray-400'}>
                {patients.filter(p => filter.id === 'all' || p.status === filter.id).length} patients
              </div>
            </button>
          ))}
        </div>

        
        <div className="space-y-6">
          {filteredPatients.map((patient) => (
            <div key={patient.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <FaUserInjured className="text-2xl text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{patient.name}</h3>
                      <p className="text-gray-600">{patient.age} years • {patient.gender} • {patient.bloodGroup}</p>
                    </div>
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                    patient.status === 'active' ? 'bg-green-100 text-green-800' :
                    patient.status === 'scheduled' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {patient.status.charAt(0).toUpperCase() + patient.status.slice(1)}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <FaNotesMedical className="mr-2" />
                    <span>Condition: {patient.condition}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaHistory className="mr-2" />
                    <span>Last Visit: {patient.lastVisit}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaCalendarAlt className="mr-2" />
                    <span>Next: {patient.nextAppointment || 'Not Scheduled'}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Recent Tests</h4>
                    <div className="flex flex-wrap gap-2">
                      {patient.recentTests.map((test, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                          {test}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Current Medications</h4>
                    <div className="flex flex-wrap gap-2">
                      {patient.medications.map((med, index) => (
                        <span key={index} className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm">
                          {med}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4 flex flex-wrap gap-4">
                  <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center">
                    <FaFileMedical className="mr-2" />
                    View Full Record
                  </button>
                  <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 flex items-center justify-center">
                    <FaUserClock className="mr-2" />
                    Schedule Follow-up
                  </button>
                  <div className="flex gap-2">
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition duration-300">
                      <FaPhoneAlt />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition duration-300">
                      <FaEnvelope />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientManagement; 