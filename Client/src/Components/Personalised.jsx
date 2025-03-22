// Add this comment and save to check if file updates are detected
// Last updated: Check refresh

import React, { useState } from 'react';
import SignUp from './SignUp';
import Footer from './Footer';

const Personalised = () => {
  const [showOverlay, setShowOverlay] = useState(false); 

  const handleButtonClick = () => {
    setShowOverlay(true); 
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false); 
  };

  return (
    <div className='w-full min-h-screen bg-slate-100 overflow-y-auto'>
      {showOverlay && <SignUp onClose={handleCloseOverlay} />}
      
      <div className='flex justify-around p-4'>
      <div className='textStructure mt-60'>
        {/* Remove this entire div if you don't want "Helping patients provide" */}
        <div className='masker font-["DM Sans"]'>
          <h2 className='text-4xl leading-none font-bold ml-40'>
           "Helping patients provide"
          </h2>
        </div>
        
        <div className='masker font-["DM Sans"]'>
          <h2 className='text-5xl leading-none font-semibold py-10 ml-40 text-blue-600'>
            AI Powered Holistic Care
          </h2>
        </div>
        <div className='masker font-["DM Sans"]'>
          <h2 className='text-2xl leading-none ml-40'>
            Improving clinical and business results
          </h2>
        </div>
        <div className='masker font-["DM Sans"]'>
          <h2 className='text-2xl leading-none ml-40 py-5'>
            under your own brand.
          </h2>
        </div>
        <div className='masker font-["DM Sans"] py-5'>
          <button
            className='text-2xl leading-none text-white font-medium ml-40 bg-blue-500 rounded-lg p-4'
            onClick={handleButtonClick} 
          >
            Schedule a Free Demo
          </button>
        </div>
      </div>

      <div className='animated img gap-10 p-40'>
        <img
          decoding='async'
          width='300'
          height='300'
          src='https://framerusercontent.com/images/GZyfrxUdFRgKqWWb0ylQehAh1c.png?scale-down-to=2048'
          alt='Healthcare illustration'
          className='rounded-lg w-[300px] h-[300px] object-contain'
        />
      </div>
      </div>

      {/* Statistics Section - Added margin top */}
      <div className='bg-blue-50 rounded-xl mx-4 p-8 my-16'>
        <div className='text-center mb-4'>
          <h3 className='text-xl text-blue-800'>
            '"Transforming Healthcare with AI-Powered Solutions"'
          </h3>
        </div>
        
        <div className='flex justify-center gap-20 mt-8'>
          <div className='text-center'>
            <h4 className='text-4xl font-bold text-blue-600'>20K+</h4>
            <p className='text-gray-600 mt-2'>Patients Served</p>
          </div>
          <div className='text-center'>
            <h4 className='text-4xl font-bold text-blue-600'>40%</h4>
            <p className='text-gray-600 mt-2'>Improved Treatment Outcomes</p>
          </div>
          <div className='text-center'>
            <h4 className='text-4xl font-bold text-blue-600'>50%</h4>
            <p className='text-gray-600 mt-2'>Reduced Wait Times</p>
          </div>
        </div>
      </div>

      {/* CarePlans Section - Fixed margins */}
      <div className='px-20 bg-blue-50 py-16 mt-20 mb-20'>
        <h2 className='text-4xl font-bold text-center mb-16'>
          What Makes CureIndia's CarePlans <span className='text-blue-500'>Unique?</span>
        </h2>

        <div className='grid grid-cols-3 gap-10'>
          <div className='flex gap-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/2966/2966327.png" 
              alt="24/7 Access" 
              className='w-12 h-12 text-blue-500'
            />
            <div>
              <h3 className='text-xl font-semibold mb-2'>24/7 Access</h3>
              <p className='text-gray-600'>Round-the-clock access to healthcare professionals.</p>
            </div>
          </div>

          <div className='flex gap-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/4006/4006511.png" 
              alt="Pain Relief" 
              className='w-12 h-12 text-blue-500'
            />
            <div>
              <h3 className='text-xl font-semibold mb-2'>Pain Relief</h3>
              <p className='text-gray-600'>Alleviates discomfort with physiotherapy, yoga, and relaxation techniques.</p>
            </div>
          </div>

          <div className='flex gap-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3974/3974770.png" 
              alt="Smoother Labor & Delivery" 
              className='w-12 h-12 text-blue-500'
            />
            <div>
              <h3 className='text-xl font-semibold mb-2'>Smoother Labor & Delivery</h3>
              <p className='text-gray-600'>Repares both body and mind for a confident and empowered birth experience.</p>
            </div>
          </div>

          <div className='flex gap-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/4207/4207247.png" 
              alt="Less Stress & Anxiety" 
              className='w-12 h-12 text-blue-500'
            />
            <div>
              <h3 className='text-xl font-semibold mb-2'>Less Stress & Anxiety</h3>
              <p className='text-gray-600'>Fosters emotional balance and mental wellness throughout your pregnancy.</p>
            </div>
          </div>

          <div className='flex gap-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3364/3364044.png" 
              alt="Stronger Bond" 
              className='w-12 h-12 text-blue-500'
            />
            <div>
              <h3 className='text-xl font-semibold mb-2'>Stronger Bond</h3>
              <p className='text-gray-600'>Encourages prenatal bonding through Garbh Sanskar and mindful practices.</p>
            </div>
          </div>

          <div className='flex gap-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/2647/2647625.png" 
              alt="Successful Breastfeeding" 
              className='w-12 h-12 text-blue-500'
            />
            <div>
              <h3 className='text-xl font-semibold mb-2'>Successful Breastfeeding</h3>
              <p className='text-gray-600'>Guidance for a confident and nourishing start.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Healthcare Services Section - Fixed margins */}
      <div className='w-full min-h-[400px] bg-blue-600 text-white px-20 py-16 mt-20 mb-20 border-4 border-red-500'>
        <h2 className='text-4xl font-bold mb-10'>
          Our Comprehensive <span className='text-blue-200'>Healthcare Services</span>
        </h2>

        <div className='flex flex-col gap-4'>
          {[
            'Virtual Consultations',
            'Emergency Care Support',
            'Specialist Appointments',
            'Digital Prescriptions',
            'Health Monitoring',
            'Lab Test Scheduling',
            'Medical Records Management',
            'Follow-up Care'
          ].map((item, index) => (
            <div 
              key={index} 
              className='flex justify-between items-center p-4 border-b border-blue-400 hover:bg-blue-500 transition-colors cursor-pointer'
            >
              <span className='text-xl'>{item}</span>
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className='px-20 py-16 mb-16'>
        <h2 className='text-4xl font-bold text-center mb-10'>
          Frequently Asked <span className='text-blue-500'>Questions</span>
        </h2>
        <div className='space-y-4'>
          {[
            {
              question: 'How does the AI-powered diagnosis work?',
              answer: 'Our AI system analyzes patient data and symptoms to provide preliminary assessments, which are then verified by healthcare professionals.'
            },
            {
              question: 'Is my medical data secure?',
              answer: 'Yes, we use enterprise-grade encryption and follow all HIPAA guidelines to ensure your medical information is completely secure.'
            },
            {
              question: 'Can I get 24/7 support?',
              answer: 'Yes, our platform provides round-the-clock access to healthcare professionals for emergency consultations and support.'
            }
          ].map((faq, index) => (
            <div key={index} className='bg-white rounded-lg p-6 shadow-sm'>
              <h3 className='text-xl font-semibold mb-2'>{faq.question}</h3>
              <p className='text-gray-600'>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className='bg-blue-50 px-20 py-16 mb-16 text-center'>
        <h2 className='text-4xl font-bold mb-6'>Ready to Get Started?</h2>
        <p className='text-xl text-gray-600 mb-8'>Join thousands of healthcare providers using CureIndia</p>
        <div className='flex justify-center gap-4'>
          <button className='bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600'>
            Contact Sales
          </button>
          <button className='bg-white text-blue-500 px-8 py-3 rounded-lg text-lg font-semibold border-2 border-blue-500 hover:bg-blue-50'>
            Learn More
          </button>
        </div>
      </div>

      {/* Footer with proper spacing */}
      <div className='mt-20'>
        <Footer />
      </div>
    </div>
  );
};

export default Personalised;
