import React, { useState } from 'react';
import { FaFileInvoiceDollar, FaSearch, FaFilter, FaDownload, FaShare, FaChartLine, FaWallet, FaCreditCard, FaMoneyBillWave, FaCalendarAlt } from 'react-icons/fa';

export default function Billing() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const statuses = [
    { id: 'all', label: 'All Invoices' },
    { id: 'paid', label: 'Paid' },
    { id: 'pending', label: 'Pending' },
    { id: 'overdue', label: 'Overdue' }
  ];

  const periods = [
    { id: 'week', label: 'This Week' },
    { id: 'month', label: 'This Month' },
    { id: 'quarter', label: 'This Quarter' },
    { id: 'year', label: 'This Year' }
  ];

  const invoices = [
    {
      id: "INV-2024-001",
      patientName: "Rajesh Kumar",
      date: "2024-03-20",
      amount: 1500,
      status: "paid",
      service: "Video Consultation",
      paymentMethod: "Credit Card",
      tax: 150,
      discount: 0
    },
    {
      id: "INV-2024-002",
      patientName: "Priya Sharma",
      date: "2024-03-18",
      amount: 2000,
      status: "pending",
      service: "In-Person Visit",
      paymentMethod: "Pending",
      tax: 200,
      discount: 100
    },
    {
      id: "INV-2024-003",
      patientName: "Ahmed Khan",
      date: "2024-03-15",
      amount: 1800,
      status: "overdue",
      service: "Lab Tests",
      paymentMethod: "Pending",
      tax: 180,
      discount: 0
    }
  ];

  const stats = {
    totalEarnings: "₹45,000",
    pendingAmount: "₹12,000",
    averagePerVisit: "₹1,500",
    totalInvoices: 30
  };

  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = invoice.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         invoice.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || invoice.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-800 rounded-xl shadow-2xl p-8 mb-8">
          <h1 className="text-4xl font-bold text-white text-center mb-4">Billing Management</h1>
          <p className="text-blue-100 text-center mb-8">Manage your invoices and track payments</p>
          
          
          <div className="max-w-3xl mx-auto relative">
            <div className="flex items-center bg-white rounded-lg shadow-lg p-2">
              <FaSearch className="text-gray-400 ml-3" />
              <input
                type="text"
                placeholder="Search invoices by patient name or ID..."
                className="w-full px-4 py-2 rounded-lg focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Total Earnings</p>
                <h3 className="text-2xl font-bold text-gray-800">{stats.totalEarnings}</h3>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <FaWallet className="text-xl text-blue-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Pending Amount</p>
                <h3 className="text-2xl font-bold text-gray-800">{stats.pendingAmount}</h3>
              </div>
              <div className="p-3 bg-yellow-100 rounded-full">
                <FaMoneyBillWave className="text-xl text-yellow-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Average per Visit</p>
                <h3 className="text-2xl font-bold text-gray-800">{stats.averagePerVisit}</h3>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <FaChartLine className="text-xl text-green-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Total Invoices</p>
                <h3 className="text-2xl font-bold text-gray-800">{stats.totalInvoices}</h3>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <FaFileInvoiceDollar className="text-xl text-purple-600" />
              </div>
            </div>
          </div>
        </div>

       
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-4">
              {statuses.map((status) => (
                <button
                  key={status.id}
                  onClick={() => setSelectedStatus(status.id)}
                  className={`px-4 py-2 rounded-lg transition duration-300 ${
                    selectedStatus === status.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {status.label}
                </button>
              ))}
            </div>
            <div className="flex gap-4">
              {periods.map((period) => (
                <button
                  key={period.id}
                  onClick={() => setSelectedPeriod(period.id)}
                  className={`px-4 py-2 rounded-lg transition duration-300 ${
                    selectedPeriod === period.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {period.label}
                </button>
              ))}
            </div>
          </div>
        </div>

       
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="divide-y">
            {filteredInvoices.map((invoice) => (
              <div key={invoice.id} className="p-6 hover:bg-gray-50 transition duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{invoice.patientName}</h3>
                    <p className="text-gray-600">{invoice.id}</p>
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                    invoice.status === 'paid' ? 'bg-green-100 text-green-800' :
                    invoice.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <FaCalendarAlt className="mr-2" />
                    <span>{invoice.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaCreditCard className="mr-2" />
                    <span>{invoice.paymentMethod}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaFileInvoiceDollar className="mr-2" />
                    <span>{invoice.service}</span>
                  </div>
                  <div className="text-xl font-semibold text-gray-800">
                    ₹{invoice.amount}
                  </div>
                </div>

                <div className="border-t pt-4 flex flex-wrap justify-between items-center">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600">Tax: ₹{invoice.tax}</p>
                    {invoice.discount > 0 && (
                      <p className="text-sm text-green-600">Discount: ₹{invoice.discount}</p>
                    )}
                  </div>
                  <div className="flex gap-4">
                    <button className="text-blue-600 hover:text-blue-800 transition duration-300">
                      <FaDownload className="text-xl" />
                    </button>
                    <button className="text-blue-600 hover:text-blue-800 transition duration-300">
                      <FaShare className="text-xl" />
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
} 