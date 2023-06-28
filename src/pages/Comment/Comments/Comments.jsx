import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, ListItemButton, ListItemText } from "@mui/material";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

const Comments = () => {
   const commentsUrl = "https://jsonplaceholder.typicode.com/comments";
   const [comments, setComments] = useState([]);
   const [isDataLoaded, setIsDataLoaded] = useState(false);
   let navigate = useNavigate();

   useEffect(() => {
      if (!isDataLoaded) {
         axios.get(commentsUrl)
            .then((response) => {
               setComments(response.data);
               setIsDataLoaded(true);
            });
      }
   }, [isDataLoaded]);

function findComment(comment) {
   axios.get(`https://jsonplaceholder.typicode.com/comments/${comment.id}`)
      .then((response) => {
         navigate(`/comments/${comment.id}`, { state: { comment: comment, commentData: response.data } });
      });
    };  

   return (
      <div className="d-flex justify-content-center flex-wrap">
         {comments.map((comment) => (
            <Card key={comment.id} className="card m-3 p-3" style={{ width: '25%' }}>
               <ListItemButton onClick={() => findComment(comment)} className="text-center list-group-item">
                  <ListItemText primary={comment.name.charAt(0).toUpperCase() + comment.name.slice(1)} />
               </ListItemButton>
            </Card>
         ))}
      </div>
   );
}

export default Comments;