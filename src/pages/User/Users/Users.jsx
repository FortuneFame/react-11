import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, ListItemButton, ListItemText, ListItemAvatar, Avatar } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.css';

const Users = () => {
   const usersUrl = "https://jsonplaceholder.typicode.com/users";
   const [users, setUsers] = useState([]);
   const [isDataLoaded, setIsDataLoaded] = useState(false);
   let navigate = useNavigate();

   useEffect(() => {
      if (!isDataLoaded) {
         fetch(usersUrl)
            .then((response) => response.json())
            .then((data) => {
               setUsers(data);
               setIsDataLoaded(true);
            });
      }
   }, [isDataLoaded]);

   function findUser(user) {
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
         .then((response) => response.json())
         .then((postData) => {
            navigate(`/users/${user.id}`, { state: { user, postData } });
         });
   }

   return (
      <div className="d-flex justify-content-around flex-wrap">
         {users.map((user) => (
            <Card key={user.id} className="card m-3 p-3" style={{ width: '25%' }}>
               <ListItemButton onClick={() => findUser(user)} className="list-group-item">
                  <ListItemAvatar>
                     <Avatar alt={`User ${user.id}`} className="mr-3">
                        <img
                           alt='avatar-user'
                           src={`https://randomuser.me/api/portraits/thumb/men/${parseInt(user.id) % 100}.jpg`}
                           onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "../default/default-img.png";
                           }}
                        />
                     </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={user.name} />
               </ListItemButton>
            </Card>
         ))}
      </div>
   );
}

export default Users