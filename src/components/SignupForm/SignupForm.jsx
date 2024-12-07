import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import axios from 'axios';
import illustrationImage from '../../assets/images/rb_64279.png';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [fullName, setFullName] = useState('');
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
      const response = await axios.post('http://localhost:8080/admin/sign-up', {
        fullName,
        email,
        password,
      });

      if (response.status === 200) {
        setSuccessMessage("Signup successful!");
        setErrorMessage('');
        setFullName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');

        navigate('/dashboard');
      } else {
        setErrorMessage("Signup failed. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
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
              src={illustrationImage} 
              alt="Person working" 
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex-1 p-8">
          <div className="flex justify-end mb-4">
            <select className="text-white bg-transparent border-none focus:ring-0">
              <option className = "text-black">English(UK)</option>
              <option className = "text-black">English(US)</option>
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
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
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
                <span className="text-white">Do you have an account?</span>
                <a href="#" className="text-white hover:underline">Login here</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
