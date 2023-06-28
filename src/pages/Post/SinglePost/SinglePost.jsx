import React from "react";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import "bootstrap/dist/css/bootstrap.css";

const SinglePost = () => {
  const { state } = useLocation();
  const { post, postData } = state;

  if (!post || !postData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="postWrapper p-5">
      <h2 className="text-center p-3">Post Details</h2>
      <div className="text-center mb-4">
        <Typography variant="h6" className="mb-2">
          <strong>Title:</strong> {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
        </Typography>
        <Typography variant="body1" className="mb-2">
          <strong>Body:</strong> {post.body.charAt(0).toUpperCase() + post.body.slice(1)}
        </Typography>
      </div>
      <hr />
      <h3 className="text-center p-4">Comments:</h3>
      <ol className="list-group">
        {postData.map((comment, index) => (
          <li key={index + comment.id} className="list-group-item p-4">
            <Typography variant="subtitle1" className="mb-2">
              <strong>Name:</strong> {comment.name.charAt(0).toUpperCase() + comment.name.slice(1)}
            </Typography>
            <Typography variant="body1" className="mb-3">
              <strong>Comment:</strong> {comment.body.charAt(0).toUpperCase() + comment.body.slice(1)}
            </Typography>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SinglePost;