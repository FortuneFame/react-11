import React from "react";
import { useLocation } from "react-router-dom";
import { Avatar, Typography } from "@mui/material";
import "bootstrap/dist/css/bootstrap.css";

const SingleUser = () => {
  const { state } = useLocation();
  const { user, postData } = state;

  if (!user || !postData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="userWrapper p-5">
      <h2 className="text-center p-3">User Details</h2>
      <div className="text-center mb-4 p-3">
        <Avatar alt={`User ${user.id}`} className="mr-3 mb-3" style={{ width: "150px", height: "150px", margin: "0 auto" }}>
          <img
            width='150px'
            height='150px'
            alt="avatar-user"
            src={`https://randomuser.me/api/portraits/thumb/men/${parseInt(user.id) % 100}.jpg`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "../default/default-img.png";
            }}
          />
        </Avatar>
        <div className="userInfor">
          <Typography variant="subtitle1" className="mb-2">
            <strong>Name:</strong> {user.name}
          </Typography>
          <Typography variant="subtitle1" className="mb-2">
            <strong>Login:</strong> {user.username}
          </Typography>
          <Typography variant="subtitle1" className="mb-2">
            <strong>Email:</strong> {user.email}
          </Typography>
          <Typography variant="subtitle1" className="mb-2">
            <strong>Phone:</strong> {user.phone}
          </Typography>
          <Typography variant="subtitle1" className="mb-2">
            <strong>Web:</strong> {user.website}
          </Typography>
          <Typography variant="subtitle1" className="mb-2">
            <strong>Address:</strong> city: {user.address.city}, street: {user.address.street},{" "}
            {user.address.suite}
          </Typography>
        </div>
      </div>
      <hr />
      <h3 className="text-center p-3">Post List:</h3>
      <ol className="list-group">
        {postData.map((post, index) => (
          <li key={index + post.id} className="list-group-item p-3">
            <Typography variant="subtitle1" className="mb-3">
              <strong>Title:</strong> {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
            </Typography>
            <Typography variant="body1" className="mb-2">
              <strong>Post:</strong> {post.body.charAt(0).toUpperCase() + post.body.slice(1)}
            </Typography>
          </li>
        ))}
      </ol>
    </div>
  );
};
export default SingleUser;