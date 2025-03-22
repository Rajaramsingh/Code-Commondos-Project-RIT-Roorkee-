import React, { useState } from 'react';
import { FaFileAlt, FaFileMedical, FaFilePrescription, FaFileImage, FaDownload, FaShare, FaPlus, FaSearch, FaFilter, FaCalendarAlt } from 'react-icons/fa';

const HealthRecords = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDate, setSelectedDate] = useState('all');

  const categories = [
    { id: 'all', name: 'All Records', icon: FaFileAlt },
    { id: 'reports', name: 'Lab Reports', icon: FaFileMedical },
    { id: 'prescriptions', name: 'Prescriptions', icon: FaFilePrescription },
    { id: 'imaging', name: 'Imaging', icon: FaFileImage },
  ];

  const dateFilters = [
    { id: 'all', name: 'All Time' },
    { id: 'month', name: 'This Month' },
    { id: '6months', name: 'Last 6 Months' },
    { id: 'year', name: 'This Year' },
  ];

  const records = [
    {
      id: 1,
      type: 'reports',
      name: 'Complete Blood Count',
      date: '2024-03-15',
      doctor: 'Dr. Faizan Ashad',
      hospital: 'City Hospital',
      category: 'Lab Report',
      size: '2.4 MB',
      status: 'normal'
    },
    {
      id: 2,
      type: 'prescriptions',
      name: 'Medication Prescription',
      date: '2024-03-10',
      doctor: 'Dr. Priya Sharma',
      hospital: 'Medicare Clinic',
      category: 'Prescription',
      size: '1.1 MB',
      status: 'active'
    },
    {
      id: 3,
      type: 'imaging',
      name: 'Chest X-Ray',
      date: '2024-02-28',
      doctor: 'Dr. Rajesh Kumar',
      hospital: 'City Hospital',
      category: 'Radiology',
      size: '5.7 MB',
      status: 'normal'
    }
  ];

  const filteredRecords = records.filter(record => {
    const matchesSearch = record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.doctor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || record.type === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-800 rounded-xl shadow-2xl p-8 mb-8">
          <h1 className="text-4xl font-bold text-white text-center mb-4">Health Records</h1>
          <p className="text-blue-100 text-center mb-8">Manage and access all your medical records in one place</p>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto relative">
            <div className="flex items-center bg-white rounded-lg shadow-lg p-2">
              <FaSearch className="text-gray-400 ml-3" />
              <input
                type="text"
                placeholder="Search records by name or doctor..."
                className="w-full px-4 py-2 rounded-lg focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {categories.map(({ id, name, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setSelectedCategory(id)}
              className={`p-6 rounded-xl shadow-lg transition duration-300 ${
                selectedCategory === id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center space-x-4">
                <Icon className="text-2xl" />
                <div>
                  <h3 className="text-lg font-semibold">{name}</h3>
                  <p className={selectedCategory === id ? 'text-blue-100' : 'text-gray-400'}>
                    {records.filter(r => id === 'all' || r.type === id).length} records
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Filters and Actions */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-gray-600">Filter by:</span>
              {dateFilters.map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedDate(filter.id)}
                  className={`px-4 py-2 rounded-lg transition duration-300 ${
                    selectedDate === filter.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300 flex items-center">
              <FaPlus className="mr-2" />
              Upload Record
            </button>
          </div>
        </div>

        {/* Records List */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="divide-y">
            {filteredRecords.map((record) => (
              <div key={record.id} className="p-6 hover:bg-gray-50 transition duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${
                      record.type === 'reports' ? 'bg-blue-100 text-blue-600' :
                      record.type === 'prescriptions' ? 'bg-green-100 text-green-600' :
                      'bg-purple-100 text-purple-600'
                    }`}>
                      {record.type === 'reports' && <FaFileMedical className="text-xl" />}
                      {record.type === 'prescriptions' && <FaFilePrescription className="text-xl" />}
                      {record.type === 'imaging' && <FaFileImage className="text-xl" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{record.name}</h3>
                      <p className="text-gray-600">{record.doctor} • {record.hospital}</p>
                      <div className="flex items-center mt-2">
                        <FaCalendarAlt className="text-gray-400 mr-2" />
                        <span className="text-gray-500">{record.date}</span>
                        <span className="mx-2">•</span>
                        <span className="text-gray-500">{record.size}</span>
                        <span className={`ml-4 px-3 py-1 rounded-full text-sm ${
                          record.status === 'normal' ? 'bg-green-100 text-green-600' :
                          record.status === 'active' ? 'bg-blue-100 text-blue-600' :
                          'bg-yellow-100 text-yellow-600'
                        }`}>
                          {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition duration-300">
                      <FaDownload />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition duration-300">
                      <FaShare />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthRecords; 