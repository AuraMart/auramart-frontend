import React, { useState, useEffect } from "react";
import { Tabs, Tab, TextField, Button, Rating } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";

const CommentSection = () => {
  const API_BASE_URL = "http://localhost:9191/api/v1";
  const { productId } = useParams();

  const [selectedTab, setSelectedTab] = useState(0);
  const [newComment, setNewComment] = useState("");
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState([]);
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const userId = localStorage.getItem('userId'); 

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const [productResponse, commentsResponse] = await Promise.all([
          axios.get(`${API_BASE_URL}/products/product/${productId}/product`),
          axios.get(`${API_BASE_URL}/comments/product/${productId}`)
        ]);
          setComments(commentsResponse.data);
          setProduct(productResponse.data);
      } catch (err) {
        setError("Failed to fetch comments");
      }
    };
  
    fetchComments();
  }, [productId]);
  

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleSubmitComment = async () => {
    if (newComment.trim() && rating > 0) {
      try {
        const productId = product.data.id;
  
        const commentData = {
          content: newComment,
          rating: rating,
          productId: productId,
          userId: userId,
        };
  
        await axios.post(`${API_BASE_URL}/comments/add`, commentData);
  
        const newCommentObj = {
          content: newComment.trim(),
          rating: rating,
          id: Date.now(), 
          userName: "User", 
        };
  
        setComments([...comments, newCommentObj]); 
        setNewComment("");
        setRating(0);
      } catch (error) {
        setError("Failed to submit comment");
      }
    }
  };
  

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="mt-14 p-6 bg-white rounded-md shadow-md max-w-4xl mx-auto">
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        className="mb-4 border-b"
      >
        <Tab label="Description" />
        <Tab label={`User comments (${comments.length})`} />
      </Tabs>
      <div className="mt-4">
        {selectedTab === 0 && (
          <div>
            <div className="grid grid-cols-2 gap-4 bg-gray-100 p-4 rounded-md">
              <p>{product?.data.description}</p>
            </div>
          </div>
        )}
        {selectedTab === 1 && (
          <div>
            <div className="mb-6">
              <h3 className="font-semibold text-lg text-gray-800 mb-4">Submit Your Review</h3>
              <Rating
                value={rating}
                onChange={(e, newValue) => setRating(newValue)}
                className="mb-4"
              />
              <TextField
                label="Your Review"
                variant="outlined"
                fullWidth
                multiline
                rows={3}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="mb-4"
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmitComment}
                disabled={!newComment.trim() || rating === 0}
                style={{ marginTop: "1rem" }}
              >
                Submit Review
              </Button>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-4">Customer Reviews</h3>
              {comments.length === 0 ? (
                <p className="text-gray-600">No reviews yet. Be the first to review!</p>
              ) : (
                <div className="h-[200px] overflow-y-scroll">
                <ul className="space-y-4">
                  {comments.map((comment) => (
                    <li key={comment.id} className="border rounded-md p-4 shadow-sm">
                      <p className="text-gray-800 text-base font-medium">{comment.userName}</p>
                      <Rating value={comment.rating} readOnly className="mb-2" />
                      <p className="text-gray-700">{comment.content}</p>
                    </li>
                  ))}
                </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
