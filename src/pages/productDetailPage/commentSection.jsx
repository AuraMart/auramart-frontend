import React, { useState } from "react";
import { Tabs, Tab, TextField, Button, Rating } from "@mui/material";

const CommentSection = ({product}) => {

  const [selectedTab, setSelectedTab] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleSubmitComment = () => {
    if (newComment.trim() && rating > 0) {
      const comment = {
        text: newComment.trim(),
        rating: rating,
        id: Date.now(),
      };
      setComments([...comments, comment]);
      setNewComment("");
      setRating(0);
    }
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md max-w-4xl mx-auto">
      {/* Tabs */}
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        className="mb-4 border-b"
      >
        <Tab label="Description" className="capitalize" />
        <Tab label={`User comments (${comments.length})`} className="capitalize" />
        <Tab label="Question & Answer (4)" className="capitalize" />
      </Tabs>

      {/* Tab Content */}
      <div className="mt-4">
        {selectedTab === 0 && (
          <div>
            {/* Description Content */}
            <p className="text-gray-600 mb-6">
              {product.description}
            </p>
            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-4 bg-gray-100 p-4 rounded-md">
              <div>
                <p className="font-semibold text-gray-800">Fabric</p>
                <p className="text-gray-600">Bio-washed Cotton</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Pattern</p>
                <p className="text-gray-600">Printed</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Fit</p>
                <p className="text-gray-600">Regular-fit</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Neck</p>
                <p className="text-gray-600">Round Neck</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Sleeve</p>
                <p className="text-gray-600">Half-sleeves</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Style</p>
                <p className="text-gray-600">Casual Wear</p>
              </div>
            </div>
          </div>
        )}

        {selectedTab === 1 && (
          <div>
            {/* Submit Comment Section */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg text-gray-800 mb-4">Submit Your Comment</h3>
              <Rating
                value={rating}
                onChange={(e, newValue) => setRating(newValue)}
                className="mb-4"
              />
              <TextField
                label="Your Comment"
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
              >
                Submit Comment
              </Button>
            </div>

            {/* Display Comments */}
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-4">User Comments</h3>
              {comments.length === 0 ? (
                <p className="text-gray-600">No comments yet. Be the first to comment!</p>
              ) : (
                <ul className="space-y-4">
                  {comments.map((comment) => (
                    <li key={comment.id} className="border rounded-md p-4 shadow-sm">
                      <Rating value={comment.rating} readOnly className="mb-2" />
                      <p className="text-gray-700">{comment.text}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

        {selectedTab === 2 && <p>Questions and answers will go here.</p>}
      </div>
    </div>
  );
};


export default CommentSection