import React, { useState } from 'react';
import { FaPills, FaFileMedical, FaUserMd, FaHistory, FaSearch, FaDownload, FaShare, FaBell, FaCheckCircle, FaCalendarAlt, FaClock, FaNotesMedical, FaUserShield, FaChartLine, FaQrcode, FaExclamationTriangle } from 'react-icons/fa';

const DigitalPrescriptions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showPrescriptionModal, setShowPrescriptionModal] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const prescriptions = [
    {
      id: 1,
      doctor: "Dr. Faizan Ashad",
      date: "2024-03-15",
      medications: [
        { name: "Paracetamol", dosage: "500mg", frequency: "Twice daily" },
        { name: "Vitamin C", dosage: "1000mg", frequency: "Once daily" }
      ],
      status: "Active",
      refills: 2,
      nextDose: "2024-03-16 09:00 AM",
      notes: "Take with food"
    },
    {
      id: 2,
      doctor: "Dr. Abhishek kumar",
      date: "2024-03-10",
      medications: [
        { name: "Amoxicillin", dosage: "500mg", frequency: "Three times daily" }
      ],
      status: "Completed",
      refills: 0,
      nextDose: null,
      notes: "Complete the full course"
    }
  ];

  const features = [
    {
      icon: <FaFileMedical className="text-3xl text-blue-500" />,
      title: "Digital Records",
      description: "Access your prescriptions anytime, anywhere"
    },
    {
      icon: <FaHistory className="text-3xl text-green-500" />,
      title: "Prescription History",
      description: "Track your medication history"
    },
    {
      icon: <FaShare className="text-3xl text-purple-500" />,
      title: "Easy Sharing",
      description: "Share prescriptions with pharmacies"
    },
    {
      icon: <FaBell className="text-3xl text-orange-500" />,
      title: "Medication Reminders",
      description: "Get timely reminders for your medications"
    }
  ];

  const additionalFeatures = [
    {
      icon: <FaQrcode className="text-3xl text-indigo-500" />,
      title: "QR Code Access",
      description: "Quick access to prescriptions via QR code"
    },
    {
      icon: <FaChartLine className="text-3xl text-teal-500" />,
      title: "Medication Analytics",
      description: "Track your medication adherence"
    },
    {
      icon: <FaUserShield className="text-3xl text-red-500" />,
      title: "Secure Storage",
      description: "HIPAA compliant data storage"
    }
  ];

  const medicationSchedule = [
    { time: "09:00 AM", medications: ["Paracetamol", "Vitamin C"] },
    { time: "02:00 PM", medications: ["Paracetamol"] },
    { time: "09:00 PM", medications: ["Paracetamol"] }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-20">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg rounded-lg p-8 mb-8 text-white">
          <h1 className="text-4xl font-bold text-center">Digital Prescriptions</h1>
          <p className="text-center mt-2 text-blue-100">Manage your prescriptions digitally</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <FaPills className="text-2xl text-blue-500 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-gray-800">3</h3>
            <p className="text-gray-600">Active Medications</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <FaCalendarAlt className="text-2xl text-green-500 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-gray-800">2</h3>
            <p className="text-gray-600">Active Prescriptions</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <FaClock className="text-2xl text-orange-500 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-gray-800">3x</h3>
            <p className="text-gray-600">Daily Doses</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <FaCheckCircle className="text-2xl text-purple-500 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-gray-800">95%</h3>
            <p className="text-gray-600">Adherence Rate</p>
          </div>
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

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {additionalFeatures.map((feature, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition duration-300">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Medication Schedule */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Today's Medication Schedule</h2>
          <div className="space-y-4">
            {medicationSchedule.map((schedule, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <FaClock className="text-blue-500 mr-3" />
                  <span className="font-semibold">{schedule.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  {schedule.medications.map((med, medIndex) => (
                    <span key={medIndex} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {med}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search prescriptions..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="flex space-x-2">
              <button className={`px-4 py-2 rounded-lg transition duration-300 ${
                activeTab === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
              }`}>
                All
              </button>
              <button className={`px-4 py-2 rounded-lg transition duration-300 ${
                activeTab === 'active' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
              }`}>
                Active
              </button>
              <button className={`px-4 py-2 rounded-lg transition duration-300 ${
                activeTab === 'completed' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
              }`}>
                Completed
              </button>
            </div>
          </div>
        </div>

        {/* Prescriptions List */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Your Prescriptions</h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center">
              <FaNotesMedical className="mr-2" />
              New Prescription
            </button>
          </div>
          <div className="space-y-4">
            {prescriptions.map((prescription) => (
              <div key={prescription.id} className="border rounded-lg p-6 hover:shadow-md transition duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Prescribed by {prescription.doctor}</h3>
                    <p className="text-gray-600">Date: {prescription.date}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      prescription.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                    }`}>
                      {prescription.status}
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                      {prescription.refills} refills left
                    </span>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Medications:</h4>
                  <ul className="space-y-2">
                    {prescription.medications.map((med, index) => (
                      <li key={index} className="flex items-center">
                        <FaPills className="text-blue-500 mr-2" />
                        <span className="text-gray-600">
                          {med.name} - {med.dosage} ({med.frequency})
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                {prescription.notes && (
                  <div className="mb-4 bg-yellow-50 p-3 rounded-lg">
                    <p className="text-yellow-800 flex items-center">
                      <FaExclamationTriangle className="mr-2" />
                      {prescription.notes}
                    </p>
                  </div>
                )}
                <div className="flex justify-end space-x-4">
                  <button className="text-blue-600 hover:text-blue-800 flex items-center">
                    <FaDownload className="mr-2" />
                    Download
                  </button>
                  <button className="text-blue-600 hover:text-blue-800 flex items-center">
                    <FaShare className="mr-2" />
                    Share
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Prescription Details Modal */}
      {showPrescriptionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Prescription Details</h3>
              <button 
                onClick={() => setShowPrescriptionModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaUserMd className="text-2xl text-blue-500" />
                <div>
                  <p className="font-semibold">Dr. Faizan Ashad</p>
                  <p className="text-gray-600">Cardiologist</p>
                </div>
              </div>
              <div className="border-t pt-4">
                <h4 className="font-semibold mb-2">Medications</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    <span>Paracetamol 500mg - Twice daily</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    <span>Vitamin C 1000mg - Once daily</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-end space-x-4">
                <button className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600">
                  Close
                </button>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DigitalPrescriptions;