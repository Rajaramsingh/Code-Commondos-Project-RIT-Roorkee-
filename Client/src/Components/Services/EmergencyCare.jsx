import React, { useState } from 'react';
import { FaAmbulance, FaPhoneAlt, FaClock, FaUserMd, FaHospital, FaMapMarkerAlt, FaHeartbeat, FaExclamationTriangle, FaSkullCrossbones } from 'react-icons/fa';

const EmergencyCare = () => {
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const emergencyServices = [
    {
      icon: <FaAmbulance className="text-3xl text-red-500" />,
      title: "24/7 Ambulance Service",
      description: "Immediate emergency transport with trained paramedics"
    },
    {
      icon: <FaHeartbeat className="text-3xl text-red-500" />,
      title: "Emergency Response",
      description: "Rapid response team available within minutes"
    },
    {
      icon: <FaHospital className="text-3xl text-red-500" />,
      title: "Emergency Department",
      description: "Fully equipped emergency care facility"
    },
    {
      icon: <FaUserMd className="text-3xl text-red-500" />,
      title: "Emergency Physicians",
      description: "Experienced emergency care specialists"
    }
  ];

  const emergencyContacts = [
    { name: "Emergency Helpline", number: "108", description: "24/7 Emergency Response" },
    { name: "Ambulance Service", number: "102", description: "Quick Medical Transport" },
    { name: "Hospital Reception", number: "+91 1234567890", description: "General Inquiries" }
  ];

  const handleEmergencyCall = () => {
    setCountdown(3);
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Emergency SOS Button - Fixed Position */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => setShowEmergencyModal(true)}
          onMouseDown={() => setIsPulsing(true)}
          onMouseUp={() => setIsPulsing(false)}
          className={`relative bg-red-600 text-white rounded-full p-8 shadow-lg hover:bg-red-700 transition-all duration-300 ${
            isPulsing ? 'scale-110' : ''
          }`}
        >
          <div className="absolute inset-0 rounded-full bg-red-600 animate-ping opacity-75"></div>
          <div className="relative flex flex-col items-center">
            <FaPhoneAlt className="text-3xl mb-2" />
            <span className="text-lg font-bold">SOS</span>
            <span className="text-xs mt-1">Hold to Call</span>
          </div>
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-20">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 shadow-lg rounded-lg p-8 mb-8 text-white">
          <h1 className="text-4xl font-bold text-center">Emergency Care</h1>
          <p className="text-center mt-2 text-red-100">24/7 Emergency Medical Services</p>
        </div>

        {/* Emergency Alert Banner with Enhanced Design */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg p-6 mb-8 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FaExclamationTriangle className="text-3xl mr-4" />
              <div>
                <p className="text-xl font-bold">Emergency Medical Alert</p>
                <p className="text-red-100">For immediate emergency assistance, use the SOS button or call our emergency helpline</p>
              </div>
            </div>
            <button
              onClick={() => setShowEmergencyModal(true)}
              className="bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-red-50 transition duration-300 flex items-center"
            >
              <FaPhoneAlt className="mr-2" />
              Call Emergency
            </button>
          </div>
        </div>

        {/* Emergency Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {emergencyServices.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition duration-300">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Emergency Contact Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Emergency Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="bg-red-50 rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  <FaPhoneAlt className="text-2xl text-red-500" />
                </div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">{contact.name}</h3>
                <p className="text-2xl font-bold text-red-600 mb-2">{contact.number}</p>
                <p className="text-gray-600">{contact.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Response Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Rapid Emergency Response</h2>
              <p className="text-gray-600 mb-6">Our emergency response team is available 24/7 to provide immediate medical assistance. We ensure quick response times and professional emergency care.</p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <FaClock className="text-red-500 mr-2" />
                  <span>Average Response Time: 5-10 minutes</span>
                </div>
                <div className="flex items-center">
                  <FaUserMd className="text-red-500 mr-2" />
                  <span>Experienced Emergency Physicians</span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-red-500 mr-2" />
                  <span>Coverage Area: 50km radius</span>
                </div>
              </div>
              <button 
                onClick={() => setShowEmergencyModal(true)}
                className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300 flex items-center"
              >
                <FaPhoneAlt className="mr-2" />
                Call Emergency Services
              </button>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <img src="/emergency-care-illustration.svg" alt="Emergency Care" className="w-full max-w-md mx-auto" />
            </div>
          </div>
        </div>

        {/* Emergency Guidelines */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Emergency Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">When to Call Emergency Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Severe chest pain or difficulty breathing
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Sudden severe pain or bleeding
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Loss of consciousness
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Severe burns or injuries
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">What to Do in an Emergency</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Stay calm and assess the situation
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Call emergency services immediately
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Provide clear location details
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Follow operator instructions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Emergency Call Modal */}
      {showEmergencyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 transform transition-all">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-red-600">Emergency Call</h3>
              <button 
                onClick={() => setShowEmergencyModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="text-center">
              <div className="bg-red-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <FaPhoneAlt className="text-5xl text-red-600" />
              </div>
              {countdown > 0 ? (
                <div className="mb-6">
                  <p className="text-4xl font-bold text-red-600 mb-2">{countdown}</p>
                  <p className="text-gray-600">Calling emergency services...</p>
                </div>
              ) : (
                <>
                  <p className="text-gray-600 mb-6">Are you sure you want to call emergency services?</p>
                  <div className="space-y-4">
                    <button 
                      onClick={handleEmergencyCall}
                      className="w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300 flex items-center justify-center"
                    >
                      <FaPhoneAlt className="mr-2" />
                      Call Emergency Services (108)
                    </button>
                    <button 
                      onClick={() => setShowEmergencyModal(false)}
                      className="w-full bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition duration-300"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmergencyCare; 