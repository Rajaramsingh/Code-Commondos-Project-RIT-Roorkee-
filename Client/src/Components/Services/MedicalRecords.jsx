import React, { useState } from 'react';
import { FaFileMedical, FaUserMd, FaCalendarAlt, FaSearch, FaDownload, FaShare, FaBell, FaCheckCircle, FaExclamationTriangle, FaClock, FaNotesMedical, FaChartLine, FaQrcode, FaHeartbeat, FaPills, FaSyringe, FaXRay, FaStethoscope, FaFileAlt, FaHistory, FaUserShield, FaChartBar } from 'react-icons/fa';

const MedicalRecords = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showRecordModal, setShowRecordModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const recentVisits = [
    {
      id: 1,
      date: "2024-03-15",
      doctor: "Dr. Faizan Ashad",
      type: "General Checkup",
      diagnosis: "Healthy",
      prescription: "Vitamin D supplements",
      followUp: "3 months",
      status: "completed"
    },
    {
      id: 2,
      date: "2024-03-10",
      doctor: "Dr. Abhishek kumar",
      type: "Follow-up",
      diagnosis: "Recovered",
      prescription: "None",
      followUp: "Not required",
      status: "completed"
    }
  ];

  const healthTimeline = [
    {
      date: "2024-03-15",
      event: "General Checkup",
      type: "visit",
      description: "Routine health checkup completed",
      icon: <FaStethoscope className="text-blue-500" />
    },
    {
      date: "2024-03-10",
      event: "Blood Test",
      type: "test",
      description: "Complete blood count test",
      icon: <FaSyringe className="text-red-500" />
    },
    {
      date: "2024-03-05",
      event: "X-Ray",
      type: "imaging",
      description: "Chest X-ray examination",
      icon: <FaXRay className="text-purple-500" />
    }
  ];

  const medicalDocuments = [
    {
      name: "Medical History",
      type: "document",
      lastUpdated: "2024-03-15",
      size: "2.5 MB",
      icon: <FaFileAlt className="text-blue-500" />
    },
    {
      name: "Insurance Information",
      type: "document",
      lastUpdated: "2024-03-10",
      size: "1.8 MB",
      icon: <FaUserShield className="text-green-500" />
    },
    {
      name: "Vaccination Record",
      type: "document",
      lastUpdated: "2024-03-05",
      size: "1.2 MB",
      icon: <FaSyringe className="text-red-500" />
    }
  ];

  const healthMetrics = [
    {
      name: "Blood Pressure",
      value: "120/80",
      unit: "mmHg",
      trend: "stable",
      lastUpdated: "2 days ago",
      icon: <FaHeartbeat className="text-red-500" />
    },
    {
      name: "Weight",
      value: "70",
      unit: "kg",
      trend: "stable",
      lastUpdated: "1 week ago",
      icon: <FaChartBar className="text-blue-500" />
    },
    {
      name: "BMI",
      value: "24.5",
      unit: "kg/m²",
      trend: "stable",
      lastUpdated: "1 week ago",
      icon: <FaChartLine className="text-green-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-20">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-800 shadow-lg rounded-lg p-8 mb-8 text-white">
          <h1 className="text-4xl font-bold text-center">Medical Records</h1>
          <p className="text-center mt-2 text-blue-100">Access and manage your medical history</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {healthMetrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-4">
                {metric.icon}
                <h3 className="text-lg font-semibold text-gray-800 ml-3">{metric.name}</h3>
              </div>
              <div className="flex items-baseline">
                <span className="text-2xl font-bold text-gray-800">{metric.value}</span>
                <span className="text-gray-600 ml-1">{metric.unit}</span>
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <FaChartLine className="mr-1" />
                <span>{metric.trend}</span>
                <span className="mx-2">•</span>
                <span>Updated {metric.lastUpdated}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search medical records..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center">
              <FaDownload className="mr-2" />
              Download Records
            </button>
          </div>
        </div>

        {/* Recent Visits */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Medical Visits</h2>
          <div className="space-y-4">
            {recentVisits.map((visit) => (
              <div key={visit.id} className="border rounded-lg p-4 hover:shadow-md transition duration-300">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{visit.type}</h3>
                    <p className="text-gray-600">Dr. {visit.doctor}</p>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <FaCalendarAlt className="mr-2" />
                      <span>{visit.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      visit.status === "completed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {visit.status}
                    </span>
                    <button 
                      onClick={() => {
                        setSelectedRecord(visit);
                        setShowRecordModal(true);
                      }}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      View Details
                    </button>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center">
                    <FaNotesMedical className="mr-2 text-gray-500" />
                    <span className="text-gray-600">{visit.diagnosis}</span>
                  </div>
                  <div className="flex items-center">
                    <FaPills className="mr-2 text-gray-500" />
                    <span className="text-gray-600">{visit.prescription}</span>
                  </div>
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2 text-gray-500" />
                    <span className="text-gray-600">Follow-up: {visit.followUp}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Health Timeline */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Health Timeline</h2>
          <div className="space-y-4">
            {healthTimeline.map((event, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    {event.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800">{event.event}</h3>
                    <span className="text-sm text-gray-500">{event.date}</span>
                  </div>
                  <p className="text-gray-600 mt-1">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Medical Documents */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Medical Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {medicalDocuments.map((doc, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition duration-300">
                <div className="flex items-center mb-2">
                  {doc.icon}
                  <h3 className="font-semibold text-gray-800 ml-2">{doc.name}</h3>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Updated {doc.lastUpdated}</span>
                  <span>{doc.size}</span>
                </div>
                <div className="mt-4 flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-800 flex items-center">
                    <FaDownload className="mr-1" />
                    Download
                  </button>
                  <button className="text-blue-600 hover:text-blue-800 flex items-center">
                    <FaShare className="mr-1" />
                    Share
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Record Details Modal */}
      {showRecordModal && selectedRecord && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Visit Details</h3>
              <button 
                onClick={() => setShowRecordModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800">Visit Information</h4>
                <div className="mt-2 space-y-2">
                  <p><span className="text-gray-600">Type:</span> {selectedRecord.type}</p>
                  <p><span className="text-gray-600">Doctor:</span> Dr. {selectedRecord.doctor}</p>
                  <p><span className="text-gray-600">Date:</span> {selectedRecord.date}</p>
                  <p><span className="text-gray-600">Diagnosis:</span> {selectedRecord.diagnosis}</p>
                  <p><span className="text-gray-600">Prescription:</span> {selectedRecord.prescription}</p>
                  <p><span className="text-gray-600">Follow-up:</span> {selectedRecord.followUp}</p>
                </div>
              </div>
              <div className="flex justify-end space-x-4">
                <button className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600">
                  Close
                </button>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                  Download Report
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicalRecords; 