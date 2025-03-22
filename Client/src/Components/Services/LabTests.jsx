import React, { useState } from 'react';
import { FaFlask, FaCalendarAlt, FaFileMedical, FaSearch, FaDownload, FaShare, FaBell, FaCheckCircle, FaExclamationTriangle, FaClock, FaUserMd, FaNotesMedical, FaChartLine, FaQrcode, FaVial, FaMicroscope, FaSyringe, FaHeartbeat, FaTint } from 'react-icons/fa';

const LabTests = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showTestModal, setShowTestModal] = useState(false);
  const [selectedTest, setSelectedTest] = useState(null);

  const upcomingTests = [
    {
      id: 1,
      name: "Complete Blood Count (CBC)",
      doctor: " Faizan Ashad",
      date: "2024-03-20",
      time: "09:00 AM",
      status: "scheduled",
      type: "Blood Test",
      preparation: "Fasting required",
      location: "Main Lab - Room 101",
      price: "$50"
    },
    {
      id: 2,
      name: "Lipid Profile",
      doctor: " Abhishek kumar",
      date: "2024-03-22",
      time: "10:30 AM",
      status: "scheduled",
      type: "Blood Test",
      preparation: "Fasting required",
      location: "Main Lab - Room 101",
      price: "$45"
    }
  ];

  const testHistory = [
    {
      id: 1,
      name: "Blood Sugar Test",
      date: "2024-03-15",
      doctor: " Faizan Ashad",
      results: "Normal",
      status: "completed",
      type: "Blood Test"
    },
    {
      id: 2,
      name: "Urine Analysis",
      date: "2024-03-10",
      doctor: " Abhishek kumar",
      results: "Normal",
      status: "completed",
      type: "Urine Test"
    }
  ];

  const testCategories = [
    {
      name: "Blood Tests",
      icon: <FaHeartbeat className="text-2xl text-red-500" />,
      count: 5,
      description: "Complete blood count, lipid profile, etc."
    },
    {
      name: "Urine Tests",
      icon: <FaTint className="text-2xl text-blue-500" />,
      count: 3,
      description: "Urine analysis, culture, etc."
    },
    {
      name: "Imaging Tests",
      icon: <FaMicroscope className="text-2xl text-purple-500" />,
      count: 2,
      description: "X-rays, MRI, CT scans"
    },
    {
      name: "Special Tests",
      icon: <FaVial className="text-2xl text-green-500" />,
      count: 1,
      description: "Allergy tests, genetic testing"
    }
  ];

  const labLocations = [
    {
      name: "Main Laboratory",
      address: "123 Medical Center Drive",
      hours: "Mon-Fri: 7:00 AM - 7:00 PM",
      phone: "+1 234 567 8900",
      services: ["Blood Tests", "Urine Tests", "Imaging"]
    },
    {
      name: "Express Lab",
      address: "456 Health Street",
      hours: "24/7 Service",
      phone: "+1 234 567 8901",
      services: ["Emergency Tests", "Basic Blood Work"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-20">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-800 shadow-lg rounded-lg p-8 mb-8 text-white">
          <h1 className="text-4xl font-bold text-center">Laboratory Tests</h1>
          <p className="text-center mt-2 text-blue-100">Manage your laboratory tests and view results</p>
        </div>

        {/* Test Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {testCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-lg font-semibold text-gray-800 ml-3">{category.name}</h3>
              </div>
              <p className="text-gray-600 mb-2">{category.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{category.count} tests</span>
                <button className="text-blue-600 hover:text-blue-800 text-sm">View All</button>
              </div>
            </div>
          ))}
        </div>

        {/* Search and Schedule Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search tests..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center">
              <FaCalendarAlt className="mr-2" />
              Schedule New Test
            </button>
          </div>
        </div>

        {/* Upcoming Tests */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Tests</h2>
          <div className="space-y-4">
            {upcomingTests.map((test) => (
              <div key={test.id} className="border rounded-lg p-4 hover:shadow-md transition duration-300">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{test.name}</h3>
                    <p className="text-gray-600">Dr. {test.doctor}</p>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <FaCalendarAlt className="mr-2" />
                      <span>{test.date} at {test.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      test.status === "scheduled" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                    }`}>
                      {test.status}
                    </span>
                    <button 
                      onClick={() => {
                        setSelectedTest(test);
                        setShowTestModal(true);
                      }}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      View Details
                    </button>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center">
                    <FaVial className="mr-2 text-gray-500" />
                    <span className="text-gray-600">{test.type}</span>
                  </div>
                  <div className="flex items-center">
                    <FaNotesMedical className="mr-2 text-gray-500" />
                    <span className="text-gray-600">{test.preparation}</span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-2 text-gray-500" />
                    <span className="text-gray-600">{test.location}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600">Price: {test.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Test History */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Test History</h2>
          <div className="space-y-4">
            {testHistory.map((test) => (
              <div key={test.id} className="border rounded-lg p-4 hover:shadow-md transition duration-300">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{test.name}</h3>
                    <p className="text-gray-600">Dr. {test.doctor}</p>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <FaCalendarAlt className="mr-2" />
                      <span>{test.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      test.results === "Normal" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {test.results}
                    </span>
                    <button className="text-blue-600 hover:text-blue-800 flex items-center">
                      <FaDownload className="mr-2" />
                      Download Report
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lab Locations */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Lab Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {labLocations.map((lab, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition duration-300">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{lab.name}</h3>
                <div className="space-y-2 text-gray-600">
                  <p>{lab.address}</p>
                  <p>{lab.hours}</p>
                  <p>Phone: {lab.phone}</p>
                  <div className="mt-2">
                    <p className="font-semibold text-gray-700">Services:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {lab.services.map((service, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 rounded-full text-sm">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Test Details Modal */}
      {showTestModal && selectedTest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Test Details</h3>
              <button 
                onClick={() => setShowTestModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800">Test Information</h4>
                <div className="mt-2 space-y-2">
                  <p><span className="text-gray-600">Name:</span> {selectedTest.name}</p>
                  <p><span className="text-gray-600">Doctor:</span> Dr. {selectedTest.doctor}</p>
                  <p><span className="text-gray-600">Date:</span> {selectedTest.date}</p>
                  <p><span className="text-gray-600">Time:</span> {selectedTest.time}</p>
                  <p><span className="text-gray-600">Type:</span> {selectedTest.type}</p>
                  <p><span className="text-gray-600">Preparation:</span> {selectedTest.preparation}</p>
                  <p><span className="text-gray-600">Location:</span> {selectedTest.location}</p>
                  <p><span className="text-gray-600">Price:</span> {selectedTest.price}</p>
                </div>
              </div>
              <div className="flex justify-end space-x-4">
                <button className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600">
                  Cancel
                </button>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                  Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LabTests; 