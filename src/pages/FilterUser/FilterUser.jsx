import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Card, Button, TextField, ListItem, ListItemText, ListItemAvatar, Avatar } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.css';

const FilterUser = () => {
    const usersUrl = "https://jsonplaceholder.typicode.com/users";
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [id, setId] = useState("");
    const [username, setUsername] = useState("");
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        if (!isDataLoaded) {
            axios.get(usersUrl)
                .then((response) => {
                    setUsers(response.data);
                    setFilteredUsers(response.data);
                    setIsDataLoaded(true);
                });
        }
    }, [isDataLoaded]);

    function handleSearch() {
        let result = users;
        if (id) {
            result = result.filter(user => user.id.toString() === id);
        }
        if (username) {
            result = result.filter(user => user.username.toLowerCase() === username.toLowerCase());
        }
        setFilteredUsers(result);
    }

    return (
        <div className="d-flex flex-column align-items-center p-5">
            <TextField
                label="User ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="mb-3"
            />
            <TextField
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mb-3"
            />
            <Button
                className="mb-3"
                variant="contained"
                style={{ backgroundColor: '#212121', color: '#fff' }}
                onClick={handleSearch}>
                Search
            </Button>
            <div className="d-flex justify-content-center flex-wrap">
                {filteredUsers.map((user) => (
                    <Card key={user.id} className="card m-4 p-3" >
                        <ListItem className="text-center list-group-item">
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
                            <ListItemText primary={user.username} />
                        </ListItem>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default FilterUser;