import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dropdown = ({ dropContents, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleItemClick = (item) => {
    setIsOpen(false);
    
    // Special handling for different menu items
    if (item === 'Book Appointment') {
      navigate('/appointments');
      return;
    }

    // For Doctors menu handling
    if (dropContents.props.children === 'For Doctors') {
      switch(item) {
        case 'Patient Management':
          navigate('/doctor/patient-management');
          break;
        case 'Schedule Management':
          navigate('/doctor/schedule-management');
          break;
        case 'Video Consultation':
          navigate('/doctor/video-consultation');
          break;
        case 'Billing System':
          navigate('/doctor/billing');
          break;
        default:
          navigate('/');
      }
      return;
    }

    // Handle other menu items
    const path = item.toLowerCase().replace(/\s+/g, '-');
    navigate(`/${path}`);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2"
      >
        {dropContents}
      </button>
      
      {isOpen && (
        <div className="absolute z-50 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {items.map((item, index) => (
              <button
                key={index}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => handleItemClick(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;