import React, { useState } from 'react';
import { FaHeartbeat, FaThermometerHalf, FaTachometerAlt, FaWeight, FaChartLine, FaBell, FaUserMd, FaNotesMedical, FaCalendarAlt, FaExclamationTriangle, FaCheckCircle, FaTimesCircle, FaUtensils, FaSmile, FaBullseye, FaUserFriends, FaRunning, FaWater, FaMoon, FaSun, FaAppleAlt, FaMedal, FaChartBar } from 'react-icons/fa';

const HealthMonitoring = () => {
  const [selectedMetric, setSelectedMetric] = useState('vitals');
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [showMealModal, setShowMealModal] = useState(false);

  const vitalSigns = [
    {
      name: "Heart Rate",
      value: "72",
      unit: "bpm",
      status: "normal",
      icon: <FaHeartbeat className="text-2xl text-red-500" />,
      trend: "stable",
      lastUpdated: "2 mins ago"
    },
    {
      name: "Blood Pressure",
      value: "120/80",
      unit: "mmHg",
      status: "normal",
      icon: <FaTachometerAlt className="text-2xl text-blue-500" />,
      trend: "stable",
      lastUpdated: "5 mins ago"
    },
    {
      name: "Body Temperature",
      value: "98.6",
      unit: "°F",
      status: "normal",
      icon: <FaThermometerHalf className="text-2xl text-orange-500" />,
      trend: "stable",
      lastUpdated: "1 hour ago"
    },
    {
      name: "Weight",
      value: "70",
      unit: "kg",
      status: "normal",
      icon: <FaWeight className="text-2xl text-green-500" />,
      trend: "stable",
      lastUpdated: "1 day ago"
    }
  ];

  const healthMetrics = [
    {
      name: "Sleep Quality",
      value: "85%",
      status: "good",
      trend: "improving",
      description: "7.5 hours of quality sleep"
    },
    {
      name: "Activity Level",
      value: "8,500",
      status: "good",
      trend: "stable",
      description: "steps today"
    },
    {
      name: "Water Intake",
      value: "2.5L",
      status: "good",
      trend: "improving",
      description: "of daily goal"
    },
    {
      name: "Stress Level",
      value: "Low",
      status: "good",
      trend: "improving",
      description: "Based on heart rate variability"
    }
  ];

  const alerts = [
    {
      type: "warning",
      message: "Blood pressure slightly elevated",
      time: "2 hours ago",
      icon: <FaExclamationTriangle className="text-yellow-500" />
    },
    {
      type: "success",
      message: "Daily step goal achieved!",
      time: "1 hour ago",
      icon: <FaCheckCircle className="text-green-500" />
    },
    {
      type: "info",
      message: "Time to take your medication",
      time: "30 mins ago",
      icon: <FaBell className="text-blue-500" />
    }
  ];

  const dailyGoals = [
    {
      name: "Daily Steps",
      target: "10,000",
      current: "8,500",
      progress: 85,
      icon: <FaRunning className="text-blue-500" />,
      unit: "steps"
    },
    {
      name: "Water Intake",
      target: "3L",
      current: "2.5L",
      progress: 83,
      icon: <FaWater className="text-blue-500" />,
      unit: "liters"
    },
    {
      name: "Sleep Hours",
      target: "8",
      current: "7.5",
      progress: 94,
      icon: <FaMoon className="text-indigo-500" />,
      unit: "hours"
    },
    {
      name: "Fruit Intake",
      target: "5",
      current: "3",
      progress: 60,
      icon: <FaAppleAlt className="text-green-500" />,
      unit: "servings"
    }
  ];

  const moodTracker = {
    currentMood: "Happy",
    energyLevel: 85,
    stressLevel: 20,
    sleepQuality: 90,
    activities: [
      { name: "Morning Walk", impact: "positive", time: "7:00 AM" },
      { name: "Work Meeting", impact: "neutral", time: "10:00 AM" },
      { name: "Lunch Break", impact: "positive", time: "1:00 PM" }
    ]
  };

  const mealTracker = [
    {
      time: "Breakfast",
      items: ["Oatmeal", "Banana", "Coffee"],
      calories: 350,
      time: "7:30 AM"
    },
    {
      time: "Lunch",
      items: ["Chicken Salad", "Apple", "Water"],
      calories: 450,
      time: "12:30 PM"
    },
    {
      time: "Dinner",
      items: ["Grilled Fish", "Brown Rice", "Vegetables"],
      calories: 550,
      time: "7:00 PM"
    }
  ];

  const achievements = [
    {
      name: "Early Bird",
      description: "Woke up early 5 days in a row",
      icon: <FaSun className="text-yellow-500" />,
      progress: 5,
      target: 7
    },
    {
      name: "Hydration Master",
      description: "Met water intake goal 3 days in a row",
      icon: <FaWater className="text-blue-500" />,
      progress: 3,
      target: 5
    },
    {
      name: "Fitness Enthusiast",
      description: "Completed 10,000 steps 4 days in a row",
      icon: <FaRunning className="text-green-500" />,
      progress: 4,
      target: 7
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-20">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-800 shadow-lg rounded-lg p-8 mb-8 text-white">
          <h1 className="text-4xl font-bold text-center">Health Monitoring</h1>
          <p className="text-center mt-2 text-purple-100">Track your health metrics in real-time</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {vitalSigns.map((vital, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-center justify-between mb-4">
                {vital.icon}
                <span className={`px-2 py-1 rounded-full text-xs ${
                  vital.status === "normal" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}>
                  {vital.status}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">{vital.value} {vital.unit}</h3>
              <p className="text-gray-600">{vital.name}</p>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <FaChartLine className="mr-1" />
                <span>{vital.trend}</span>
                <span className="mx-2">•</span>
                <span>{vital.lastUpdated}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Health Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {healthMetrics.map((metric, index) => (
            <div key={index} className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{metric.name}</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold text-gray-800">{metric.value}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  metric.status === "good" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                }`}>
                  {metric.status}
                </span>
              </div>
              <p className="text-gray-600 text-sm">{metric.description}</p>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <FaChartLine className="mr-1" />
                <span>{metric.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Daily Goals Progress */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Daily Goals Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {dailyGoals.map((goal, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  {goal.icon}
                  <span className="text-sm font-semibold text-gray-600">{goal.progress}%</span>
                </div>
                <h3 className="font-semibold text-gray-800">{goal.name}</h3>
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${goal.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-1 text-sm text-gray-600">
                    <span>{goal.current}</span>
                    <span>{goal.target}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mood Tracker */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Mood & Energy Tracker</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Current Mood</span>
                <span className="text-2xl">{moodTracker.currentMood}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Energy Level</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${moodTracker.energyLevel}%` }}
                    ></div>
                  </div>
                  <span>{moodTracker.energyLevel}%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Stress Level</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                    <div 
                      className="bg-red-500 h-2 rounded-full" 
                      style={{ width: `${moodTracker.stressLevel}%` }}
                    ></div>
                  </div>
                  <span>{moodTracker.stressLevel}%</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Today's Activities</h3>
              <div className="space-y-2">
                {moodTracker.activities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="text-gray-600">{activity.name}</span>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 mr-2">{activity.time}</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        activity.impact === "positive" ? "bg-green-100 text-green-800" : 
                        activity.impact === "negative" ? "bg-red-100 text-red-800" : 
                        "bg-gray-100 text-gray-800"
                      }`}>
                        {activity.impact}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Meal Tracker */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Today's Meals</h2>
            <button 
              onClick={() => setShowMealModal(true)}
              className="text-purple-600 hover:text-purple-800 flex items-center"
            >
              <FaUtensils className="mr-2" />
              Add Meal
            </button>
          </div>
          <div className="space-y-4">
            {mealTracker.map((meal, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-semibold text-gray-800">{meal.time}</h3>
                  <p className="text-gray-600">{meal.items.join(", ")}</p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-semibold text-gray-800">{meal.calories} cal</span>
                  <p className="text-sm text-gray-500">{meal.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  {achievement.icon}
                  <h3 className="font-semibold text-gray-800 ml-2">{achievement.name}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                <div className="flex items-center justify-between">
                  <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                    <div 
                      className="bg-purple-600 h-2 rounded-full" 
                      style={{ width: `${(achievement.progress/achievement.target)*100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600">{achievement.progress}/{achievement.target}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Health Alerts */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Health Alerts</h2>
            <button 
              onClick={() => setShowAlertModal(true)}
              className="text-purple-600 hover:text-purple-800"
            >
              View All
            </button>
          </div>
          <div className="space-y-4">
            {alerts.map((alert, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 mr-4">
                  {alert.icon}
                </div>
                <div className="flex-1">
                  <p className="text-gray-800">{alert.message}</p>
                  <p className="text-sm text-gray-500">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Health Trends */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Weekly Activity</h2>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Activity Chart Coming Soon</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Sleep Pattern</h2>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Sleep Chart Coming Soon</p>
            </div>
          </div>
        </div>

        {/* Health Tips */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Health Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Stay Hydrated</h3>
                <p className="text-gray-600">Drink at least 8 glasses of water daily</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Regular Exercise</h3>
                <p className="text-gray-600">Aim for 30 minutes of physical activity daily</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Balanced Diet</h3>
                <p className="text-gray-600">Include fruits, vegetables, and whole grains</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Quality Sleep</h3>
                <p className="text-gray-600">Maintain a consistent sleep schedule</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alerts Modal */}
      {showAlertModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">All Health Alerts</h3>
              <button 
                onClick={() => setShowAlertModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              {alerts.map((alert, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 mr-4">
                    {alert.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800">{alert.message}</p>
                    <p className="text-sm text-gray-500">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Meal Modal */}
      {showMealModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Add New Meal</h3>
              <button 
                onClick={() => setShowMealModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Meal Type</label>
                <select className="w-full p-2 border rounded-lg">
                  <option>Breakfast</option>
                  <option>Lunch</option>
                  <option>Dinner</option>
                  <option>Snack</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Items</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded-lg"
                  placeholder="Enter food items (comma separated)"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Calories</label>
                <input 
                  type="number" 
                  className="w-full p-2 border rounded-lg"
                  placeholder="Enter calories"
                />
              </div>
              <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
                Add Meal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthMonitoring; 