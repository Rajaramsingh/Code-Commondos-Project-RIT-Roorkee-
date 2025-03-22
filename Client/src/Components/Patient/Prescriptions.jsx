import React, { useState } from 'react';
import { FaPills, FaUserMd, FaCalendarAlt, FaClock, FaNotesMedical, FaDownload, FaShare, FaBell, FaCheckCircle, FaExclamationTriangle, FaHistory } from 'react-icons/fa';

const Prescriptions = () => {
  const [selectedStatus, setSelectedStatus] = useState('all');

  const prescriptions = [
    {
      id: 1,
      doctor: "Dr. Faizan Ashad",
      date: "2024-03-15",
      medications: [
        {
          name: "Amoxicillin",
          dosage: "500mg",
          frequency: "Twice daily",
          duration: "7 days",
          instructions: "Take with food"
        },
        {
          name: "Paracetamol",
          dosage: "500mg",
          frequency: "As needed",
          duration: "5 days",
          instructions: "Take for fever"
        }
      ],
      status: "active",
      notes: "For bacterial infection",
      refills: 2
    },
    {
      id: 2,
      doctor: "Dr. Abhishek kumar",
      date: "2024-03-10",
      medications: [
        {
          name: "Vitamin D",
          dosage: "1000 IU",
          frequency: "Once daily",
          duration: "30 days",
          instructions: "Take with breakfast"
        }
      ],
      status: "completed",
      notes: "Vitamin deficiency treatment",
      refills: 0
    },
    {
      id: 3,
      doctor: "Dr. Sarah Wilson",
      date: "2024-03-05",
      medications: [
        {
          name: "Ibuprofen",
          dosage: "400mg",
          frequency: "Three times daily",
          duration: "10 days",
          instructions: "Take after meals"
        }
      ],
      status: "expired",
      notes: "Pain management",
      refills: 0
    }
  ];

  const filteredPrescriptions = selectedStatus === 'all' 
    ? prescriptions 
    : prescriptions.filter(pres => pres.status === selectedStatus);

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-20">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-800 shadow-lg rounded-lg p-8 mb-8 text-white">
          <h1 className="text-4xl font-bold text-center">My Prescriptions</h1>
          <p className="text-center mt-2 text-blue-100">Manage and track your medications</p>
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
              All Prescriptions
            </button>
            <button
              onClick={() => setSelectedStatus('active')}
              className={`px-6 py-2 rounded-lg transition duration-300 ${
                selectedStatus === 'active'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setSelectedStatus('completed')}
              className={`px-6 py-2 rounded-lg transition duration-300 ${
                selectedStatus === 'completed'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Completed
            </button>
            <button
              onClick={() => setSelectedStatus('expired')}
              className={`px-6 py-2 rounded-lg transition duration-300 ${
                selectedStatus === 'expired'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Expired
            </button>
          </div>
        </div>

        {/* Prescriptions List */}
        <div className="space-y-6">
          {filteredPrescriptions.map((prescription) => (
            <div key={prescription.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Dr. {prescription.doctor}</h3>
                  <div className="flex items-center mt-2 text-gray-600">
                    <FaCalendarAlt className="mr-2" />
                    <span>{prescription.date}</span>
                  </div>
                </div>
                <div className={`px-4 py-2 rounded-full text-sm font-medium mt-2 md:mt-0 ${
                  prescription.status === 'active' ? 'bg-green-100 text-green-800' :
                  prescription.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {prescription.status.charAt(0).toUpperCase() + prescription.status.slice(1)}
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Medications</h4>
                <div className="space-y-4">
                  {prescription.medications.map((medication, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <FaPills className="text-blue-500 mr-2" />
                        <h5 className="font-semibold text-gray-800">{medication.name}</h5>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Dosage:</span> {medication.dosage}
                        </div>
                        <div>
                          <span className="font-medium">Frequency:</span> {medication.frequency}
                        </div>
                        <div>
                          <span className="font-medium">Duration:</span> {medication.duration}
                        </div>
                        <div>
                          <span className="font-medium">Instructions:</span> {medication.instructions}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <div className="flex items-center text-gray-600 mb-2">
                    <FaNotesMedical className="mr-2" />
                    <span>{prescription.notes}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaHistory className="mr-2" />
                    <span>Refills remaining: {prescription.refills}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-6">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center">
                    <FaDownload className="mr-2" />
                    Download Prescription
                  </button>
                  <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300 flex items-center">
                    <FaShare className="mr-2" />
                    Share with Pharmacy
                  </button>
                  {prescription.status === 'active' && prescription.refills > 0 && (
                    <button className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition duration-300 flex items-center">
                      <FaBell className="mr-2" />
                      Request Refill
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

export default Prescriptions; 