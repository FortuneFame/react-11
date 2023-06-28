import React from "react";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import "bootstrap/dist/css/bootstrap.css";

const SingleComment = () => {
    const { state } = useLocation();
    const { comment, commentData } = state;

    if (!comment || !commentData) {
        return <div>Loading...</div>;
    };
    
    return (
        <div className="commentWrapper p-5">
            <div className="text-center d-flex justify-content-center flex-column mb-4">
                <h2 className="text-center mb-4 p-3">Comment Details</h2>
                <Typography variant="subtitle1" className="mb-3">
                    <strong>Name:</strong> {comment.name.charAt(0).toUpperCase() + comment.name.slice(1)}
                </Typography>
                <Typography variant="body2" className="mb-3">
                    <strong>Email:</strong> {comment.email}
                </Typography>
                <Typography variant="body1" className="mb-2">
                    <strong>Body:</strong> {comment.body.charAt(0).toUpperCase() + comment.body.slice(1)}
                </Typography>
            </div>
        </div>
    );
};

export default SingleComment;