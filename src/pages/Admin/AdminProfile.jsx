import React, { useState, useEffect } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

const AdminProfile = () => {
  const [userData, setUserData] = useState({
    id: 2,
    firstName: '',
    lastName: '',
    email: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:9191/api/v1/users/2/user`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const result = await response.json();
        setUserData(result.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Update user data
  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:9191/api/v1/users/2/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email
        })
      });

      if (!response.ok) {
        throw new Error('Failed to update user data');
      }

      const result = await response.json();
      setIsEditing(false);
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <span className="block sm:inline">{error}</span>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">User Profile</h2>
          {!isEditing ? (
            <button 
              onClick={() => setIsEditing(true)}
              className="text-blue-500 hover:text-blue-700 transition-colors"
            >
              <EditIcon className="h-6 w-6" />
            </button>
          ) : (
            <button 
              onClick={handleUpdate}
              className="text-green-500 hover:text-green-700 transition-colors"
            >
              <SaveIcon className="h-6 w-6" />
            </button>
          )}
        </div>

        <div className="space-y-4">
          <div className="flex items-center">
            <PersonIcon className="h-6 w-6 text-gray-500 mr-3" />
            {isEditing ? (
              <div className="flex space-x-2">
                <input
                  type="text"
                  name="firstName"
                  value={userData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className="border rounded px-2 py-1 w-full"
                />
                <input
                  type="text"
                  name="lastName"
                  value={userData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  className="border rounded px-2 py-1 w-full"
                />
              </div>
            ) : (
              <span className="text-gray-700">{userData.firstName} {userData.lastName}</span>
            )}
          </div>

          <div className="flex items-center">
            <EmailIcon className="h-6 w-6 text-gray-500 mr-3" />
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="border rounded px-2 py-1 w-full"
              />
            ) : (
              <span className="text-gray-700">{userData.email}</span>
            )}
          </div>

          <div className="flex items-center">
            <PersonIcon className="h-6 w-6 text-gray-500 mr-3" />
            <span className="text-gray-700">User ID: {userData.id}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;