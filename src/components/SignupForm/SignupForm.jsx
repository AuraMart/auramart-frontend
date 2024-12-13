import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const SignupForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  // Email validation function
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post('http://localhost:9191/api/v1/users/signup', {
        firstName,
        lastName,
        email,
        password,
      });

      if (response.status === 200) {
        // Destructure token, userId, and role from the response
        const { token, userId, role } = response.data;

        // Store token, userId, and role in localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        localStorage.setItem('role', role);

        setSuccessMessage("Signup successful!");
        setErrorMessage('');
        
        // Reset form fields
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');

        // Navigate to home or dashboard
        navigate('/');
      } else {
        setErrorMessage("Signup failed. Please try again.");
      }
    } catch (error) {
      // Handle specific error scenarios
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setErrorMessage(error.response.data.message || "Signup failed. Please try again.");
      } else if (error.request) {
        // The request was made but no response was received
        setErrorMessage("No response from server. Please check your connection.");
      } else {
        // Something happened in setting up the request that triggered an Error
        setErrorMessage("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50">
      <div className="flex w-full max-w-4xl overflow-hidden shadow-lg bg-gradient-to-b from-indigo-900 via-blue-800 to-blue-600 rounded-xl">
        {/* Left Panel */}
        <div className="flex flex-col hidden w-2/5 p-8 bg-gradient-to-b from-indigo-900 via-blue-800 to-blue-600 md:block">
          <div className="text-white">
            <div className="mb-2">Hello!</div>
            <h1 className="mb-8 text-4xl font-bold">HAVE A<br />NICE DAY</h1>
          </div>
          <div className="mt-auto">
            <img 
              src="https://res.cloudinary.com/dcn64hytu/image/upload/v1732704859/AuraMart-images/shirt_hu8qib.jpg"
              alt="Person working" 
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex-1 p-8">
          <div className="flex justify-end mb-4">
            <select className="text-white bg-transparent border-none focus:ring-0">
              <option className="text-black">English(UK)</option>
              <option className="text-black">English(US)</option>
            </select>
          </div>

          <div className="max-w-md mx-auto">
            <h2 className="mb-8 text-3xl font-bold text-white">Create Account</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              {successMessage && <p className="text-green-500">{successMessage}</p>}

              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute text-gray-500 -translate-y-1/2 right-3 top-1/2 hover:text-gray-700">
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute text-gray-500 -translate-y-1/2 right-3 top-1/2 hover:text-gray-700">
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <button type="submit" className="w-full py-3 font-medium text-white transition-colors bg-indigo-900 rounded-lg hover:bg-indigo-800">
                Create Account
              </button>

              <div className="text-sm text-center">
                <span className="text-white">Do you have an account? </span>
                <Link to="/login" className="text-white hover:underline">Login here</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;