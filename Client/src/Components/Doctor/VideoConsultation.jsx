import React, { useState } from 'react';
import { FaVideo, FaPhoneAlt, FaUserCircle, FaFileAlt, FaPrescription, FaClock, FaCalendarAlt, FaClipboardList, FaMicrophone, FaVideoSlash, FaMicrophoneSlash, FaComments } from 'react-icons/fa';

const VideoConsultation = () => {
  const [selectedTab, setSelectedTab] = useState('upcoming');
  const [isInCall, setIsInCall] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  const consultations = [
    {
      id: 1,
      patientName: "Rajesh Kumar",
      time: "10:00 AM",
      date: "2024-03-25",
      status: "upcoming",
      reason: "Follow-up",
      duration: "30 min",
      notes: "Blood pressure review",
      previousVisit: "2024-03-10"
    },
    {
      id: 2,
      patientName: "Priya Sharma",
      time: "11:30 AM",
      date: "2024-03-25",
      status: "upcoming",
      reason: "Consultation",
      duration: "30 min",
      notes: "Diabetes follow-up",
      previousVisit: "2024-03-15"
    },
    {
      id: 3,
      patientName: "Ahmed Khan",
      time: "02:30 PM",
      date: "2024-03-25",
      status: "completed",
      reason: "Review",
      duration: "30 min",
      notes: "Medication review",
      previousVisit: "2024-03-20"
    }
  ];

  const filteredConsultations = consultations.filter(
    consultation => consultation.status === selectedTab
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isInCall ? (
          <>
            {/* Header Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-800 rounded-xl shadow-2xl p-8 mb-8">
              <h1 className="text-4xl font-bold text-white text-center mb-4">Video Consultations</h1>
              <p className="text-blue-100 text-center mb-8">Manage your virtual appointments and consultations</p>
              
              {/* Tab Navigation */}
              <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-2 flex justify-between">
                {['upcoming', 'completed'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`px-6 py-2 rounded-lg transition duration-300 ${
                      selectedTab === tab
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Consultations List */}
            <div className="space-y-6">
              {filteredConsultations.map((consultation) => (
                <div key={consultation.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                          <FaUserCircle className="text-4xl text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">{consultation.patientName}</h3>
                          <p className="text-gray-600">{consultation.reason}</p>
                        </div>
                      </div>
                      {consultation.status === 'upcoming' && (
                        <button
                          onClick={() => setIsInCall(true)}
                          className="mt-4 md:mt-0 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300 flex items-center"
                        >
                          <FaVideo className="mr-2" />
                          Join Call
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center text-gray-600">
                        <FaCalendarAlt className="mr-2" />
                        <span>{consultation.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <FaClock className="mr-2" />
                        <span>{consultation.time} ({consultation.duration})</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <FaClipboardList className="mr-2" />
                        <span>Last Visit: {consultation.previousVisit}</span>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <p className="text-gray-600 mb-4">{consultation.notes}</p>
                      <div className="flex flex-wrap gap-4">
                        <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center">
                          <FaFileAlt className="mr-2" />
                          View Records
                        </button>
                        <button className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300 flex items-center justify-center">
                          <FaPrescription className="mr-2" />
                          Prescriptions
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          // Video Call Interface
          <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 bg-black relative">
              {/* Main Video Feed */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-white text-center">
                  <FaUserCircle className="text-8xl mx-auto mb-4" />
                  <p className="text-xl">Dr. John Doe</p>
                </div>
              </div>

              {/* Patient Video Feed (Picture-in-Picture) */}
              <div className="absolute top-4 right-4 w-48 h-36 bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <FaUserCircle className="text-4xl mx-auto mb-2" />
                  <p>Patient</p>
                </div>
              </div>

              {/* Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <div className="flex items-center justify-center space-x-6">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className={`p-4 rounded-full ${
                      isMuted ? 'bg-red-600' : 'bg-gray-600'
                    } hover:bg-opacity-80 transition duration-300`}
                  >
                    {isMuted ? <FaMicrophoneSlash className="text-white text-xl" /> : <FaMicrophone className="text-white text-xl" />}
                  </button>
                  <button
                    onClick={() => setIsVideoOff(!isVideoOff)}
                    className={`p-4 rounded-full ${
                      isVideoOff ? 'bg-red-600' : 'bg-gray-600'
                    } hover:bg-opacity-80 transition duration-300`}
                  >
                    {isVideoOff ? <FaVideoSlash className="text-white text-xl" /> : <FaVideo className="text-white text-xl" />}
                  </button>
                  <button
                    className="p-4 rounded-full bg-gray-600 hover:bg-opacity-80 transition duration-300"
                  >
                    <FaComments className="text-white text-xl" />
                  </button>
                  <button
                    onClick={() => setIsInCall(false)}
                    className="p-4 rounded-full bg-red-600 hover:bg-opacity-80 transition duration-300"
                  >
                    <FaPhoneAlt className="text-white text-xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoConsultation; 