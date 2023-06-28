import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, ListItemButton, ListItemText} from "@mui/material";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

const Posts = () => {
   const postsUrl = "https://jsonplaceholder.typicode.com/posts";
   const [posts, setPosts] = useState([]);
   const [isDataLoaded, setIsDataLoaded] = useState(false);
   let navigate = useNavigate();

   useEffect(() => {
      if (!isDataLoaded) {
         axios.get(postsUrl)
            .then((response) => {
               setPosts(response.data);
               setIsDataLoaded(true);
            });
      }
   }, [isDataLoaded]);

   function findPost(post) {
      axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
         .then((response) => {
            navigate(`/posts/${post.id}`, { state: { post, postData: response.data } });
         });
   }

   return (
      <div className="d-flex justify-content-center flex-wrap">
         {posts.map((post) => (
            <Card key={post.id} className="card m-4 p-3" style={{ width: '25%' }}>
               <ListItemButton onClick={() => findPost(post)} className="text-center list-group-item">
                  <ListItemText primary={post.title.charAt(0).toUpperCase() + post.title.slice(1)} />
               </ListItemButton>
            </Card>
         ))}
      </div>
   );
};
export default Posts;