import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import axios from 'axios';
import illustrationImage from '../../Assets/images/rb_64279.png';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:9191/auth/sign-in', {
        email,
        password,
      });

      if (response.status === 200) {

        if(response.data.data === "ADMIN") {
          navigate('/admin');
        }

        else {        
        const userId = response.data.data; 
        localStorage.setItem('userId', userId);
        navigate('/');  }

      } else {
        setErrorMessage('Invalid login credentials. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Login failed. Please check your credentials or try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-gradient-to-b from-indigo-900 via-blue-800 to-blue-600 rounded-xl shadow-lg overflow-hidden flex">
       
        <div className="w-2/5 bg-gradient-to-b from-indigo-900 via-blue-800 to-blue-600 p-8 flex flex-col hidden md:block">
          <div className="text-white">
            <div className="mb-2">Hello!</div>
            <h1 className="text-4xl font-bold mb-8">HAVE A<br />NICE DAY</h1>
          </div>
          <div className="mt-auto">
            <img 
              src={illustrationImage} 
              alt="Person working" 
              className="w-full h-auto"
            />
          </div>
        </div>

        
        <div className="flex-1 p-8">
          <div className="flex justify-end mb-4">
            <select className="bg-transparent border-none text-white focus:ring-0">
              <option className = "text-black">English(UK)</option>
              <option className = "text-black">English(US)</option>
            </select>
          </div>

          <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Log In</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}

              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-900 text-white py-3 rounded-lg hover:bg-indigo-800 transition-colors font-medium"
              >
                Log In
              </button>

              <div className="text-center text-sm">
                <span className="text-white"> Do you havn&apos;t account? </span>
                <a href="#" className="text-white hover:underline">Signup here</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
