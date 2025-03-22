import React, { useState } from 'react';
import { FaSearch, FaUserMd, FaStar, FaMapMarkerAlt, FaClock, FaCalendarAlt, FaVideo, FaPhoneAlt } from 'react-icons/fa';

const FindDoctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  const specialties = [
    'all',
    'Cardiologist',
    'Dermatologist',
    'Orthopedist',
    'Pediatrician',
    'Neurologist',
    'Psychiatrist',
    'Dentist'
  ];

  const doctors = [
    {
      id: 1,
      name: "Dr. Faizan Ashad",
      specialty: "Cardiologist",
      experience: "15 years",
      rating: 4.8,
      reviews: 127,
      location: "Mumbai, Maharashtra",
      availability: "Available Today",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      consultationFee: "₹1000",
      nextSlot: "11:00 AM",
      languages: ["English", "Hindi", "Marathi"]
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      specialty: "Dermatologist",
      experience: "10 years",
      rating: 4.9,
      reviews: 189,
      location: "Delhi, NCR",
      availability: "Available Tomorrow",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      consultationFee: "₹800",
      nextSlot: "2:30 PM",
      languages: ["English", "Hindi"]
    },
    {
      id: 3,
      name: "Dr. Rajesh Kumar",
      specialty: "Orthopedist",
      experience: "20 years",
      rating: 4.7,
      reviews: 156,
      location: "Bangalore, Karnataka",
      availability: "Available Today",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      consultationFee: "₹1200",
      nextSlot: "4:00 PM",
      languages: ["English", "Hindi", "Kannada"]
    }
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'all' || doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-800 rounded-xl shadow-2xl p-8 mb-8">
          <h1 className="text-4xl font-bold text-white text-center mb-4">Find the Best Doctors</h1>
          <p className="text-blue-100 text-center mb-8">Book appointments with the best doctors and specialists in your area</p>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto relative">
            <div className="flex items-center bg-white rounded-lg shadow-lg p-2">
              <FaSearch className="text-gray-400 ml-3" />
              <input
                type="text"
                placeholder="Search doctors by name or specialty..."
                className="w-full px-4 py-2 rounded-lg focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Specialty Filter */}
        <div className="mb-8 flex flex-wrap gap-4">
          {specialties.map((specialty) => (
            <button
              key={specialty}
              onClick={() => setSelectedSpecialty(specialty)}
              className={`px-6 py-2 rounded-full transition duration-300 ${
                selectedSpecialty === specialty
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              } shadow-md`}
            >
              {specialty.charAt(0).toUpperCase() + specialty.slice(1)}
            </button>
          ))}
        </div>

        {/* Doctors List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{doctor.name}</h3>
                    <p className="text-blue-600">{doctor.specialty}</p>
                    <div className="flex items-center mt-1">
                      <FaStar className="text-yellow-400" />
                      <span className="ml-1 text-gray-600">{doctor.rating}</span>
                      <span className="ml-1 text-gray-400">({doctor.reviews} reviews)</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{doctor.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaClock className="mr-2" />
                    <span>{doctor.experience} experience</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaCalendarAlt className="mr-2" />
                    <span>Next available: {doctor.nextSlot}</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {doctor.languages.map((language, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {language}
                    </span>
                  ))}
                </div>

                <div className="mt-6 border-t pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600">Consultation Fee</span>
                    <span className="text-xl font-semibold text-blue-600">{doctor.consultationFee}</span>
                  </div>
                  <div className="flex gap-4">
                    <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center">
                      <FaVideo className="mr-2" />
                      Video Consult
                    </button>
                    <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 flex items-center justify-center">
                      <FaPhoneAlt className="mr-2" />
                      Book Visit
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

export default FindDoctors; 