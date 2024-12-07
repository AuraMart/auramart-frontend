import React, { useState, useEffect } from 'react';
import { 
  Comment as CommentIcon, 
  Star as StarIcon, 
  Person as UserIcon,
  ProductionQuantityLimits as ProductIcon
} from '@mui/icons-material';

const AdminHelp = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await fetch('http://localhost:9191/api/v1/comments');
      if (!response.ok) {
        throw new Error('Failed to fetch comments');
      }
      const data = await response.json();
      setComments(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <StarIcon 
        key={index} 
        className={`h-5 w-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`} 
      />
    ));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <CommentIcon className="mr-3 text-blue-600" /> Customer Comments
        </h1>

        {/* Summary Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
            <CommentIcon className="text-blue-500 mr-4 text-4xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Total Comments</h3>
              <p className="text-2xl font-bold text-blue-600">{comments.length}</p>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
            <ProductIcon className="text-green-500 mr-4 text-4xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Unique Products</h3>
              <p className="text-2xl font-bold text-green-600">
                {new Set(comments.map(comment => comment.productName)).size}
              </p>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
            <UserIcon className="text-purple-500 mr-4 text-4xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Unique Users</h3>
              <p className="text-2xl font-bold text-purple-600">
                {new Set(comments.map(comment => comment.userName)).size}
              </p>
            </div>
          </div>
        </div>

        {/* Comments List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comments.map((comment) => (
            <div 
              key={comment.id} 
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <UserIcon className="text-gray-500 mr-2" />
                  <h3 className="font-semibold text-gray-800">{comment.userName}</h3>
                </div>
                <div className="flex">
                  {renderStars(comment.rating)}
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <ProductIcon className="text-green-500 mr-2 h-5 w-5" />
                  <span className="text-sm text-gray-600">{comment.productName}</span>
                </div>
                <p className="text-gray-700">{comment.content}</p>
              </div>
            </div>
          ))}
        </div>

        {comments.length === 0 && (
          <div className="text-center py-10 bg-white rounded-lg shadow-md">
            <CommentIcon className="mx-auto text-6xl text-gray-300 mb-4" />
            <p className="text-xl text-gray-600">No comments available</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminHelp;