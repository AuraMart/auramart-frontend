import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from '../components/Navigation/Carousel';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-6 text-3xl font-bold">Welcome to the Home Page</h1>
      <div className="space-y-4">
        <button
          onClick={() => navigate('/payment')}
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Go to Payment Page
        </button>
        <button
          onClick={() => navigate('/productlist')}
          className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700"
        >
          Go to Product List Page
        </button>
      </div>
    </div>
    </div>
  );
};

export default Home;
