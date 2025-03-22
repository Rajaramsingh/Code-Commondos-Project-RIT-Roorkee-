const BASE_URL = 'http://localhost:5000/api';

export const loginUser = async (userType, credentials) => {
  try {
    const response = await fetch(`${BASE_URL}/${userType}s/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};


export const registerUser = async (userType, userData) => {
  try {
    const response = await fetch(`${BASE_URL}/${userType}s/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};


export const getUserProfile = async (userType, token) => {
  try {
    const response = await fetch(`${BASE_URL}/${userType}s/profile`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Profile fetch error:', error);
    throw error;
  }
};


export const updateUserProfile = async (userType, token, userData) => {
  try {
    const response = await fetch(`${BASE_URL}/${userType}s/profile`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Profile update error:', error);
    throw error;
  }
}; 