import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import axios from 'axios';

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
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50">
      <div className="flex w-full max-w-4xl overflow-hidden shadow-lg bg-gradient-to-b from-indigo-900 via-blue-800 to-blue-600 rounded-xl">
       
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

        
        <div className="flex-1 p-8">
          <div className="flex justify-end mb-4">
            <select className="text-white bg-transparent border-none focus:ring-0">
              <option className = "text-black">English(UK)</option>
              <option className = "text-black">English(US)</option>
            </select>
          </div>

          <div className="max-w-md mx-auto">
            <h2 className="mb-8 text-3xl font-bold text-white">Log In</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}

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
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute text-gray-500 -translate-y-1/2 right-3 top-1/2 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-3 font-medium text-white transition-colors bg-indigo-900 rounded-lg hover:bg-indigo-800"
              >
                Log In
              </button>

              <div className="text-sm text-center">
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
