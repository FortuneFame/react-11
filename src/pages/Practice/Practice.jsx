import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Card, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, TextField, Button } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.css';

const Practice = () => {
    const photosUrl = "https://jsonplaceholder.typicode.com/albums/1/photos";
    const todosUrl = "https://jsonplaceholder.typicode.com/users/1/todos";
    const [photos, setPhotos] = useState([]);
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [editTodoId, setEditTodoId] = useState(null);
    const [editTodoText, setEditTodoText] = useState('');
    const [filter, setFilter] = useState('');
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        if (!isDataLoaded) {
            axios.get(photosUrl)
                .then((response) => {
                    setPhotos(response.data);
                });
            axios.get(todosUrl)
                .then((response) => {
                    setTodos(response.data);
                });
            setIsDataLoaded(true);
        }
    }, [isDataLoaded]);

    const handleAddTodo = () => {
        if (newTodo.trim() === '') {
            return;
        }
        const todo = {
            userId: 1,
            id: Date.now(),
            title: newTodo,
            completed: false
        };
        setTodos([todo, ...todos]);
        setNewTodo('');
    }

    const handleToggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    }

    const handleDeleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const handleEditTodo = (id, title) => {
        setEditTodoId(id);
        setEditTodoText(title);
    }

    const handleUpdateTodo = () => {
        setTodos(todos.map(todo => todo.id === editTodoId ? { ...todo, title: editTodoText } : todo));
        setEditTodoId(null);
        setEditTodoText('');
    }

    return (
        <div className="d-flex flex-column align-items-center p-5">
            <Typography variant="h4" className="mb-2">User Todos</Typography>
            <div className="mb-5 d-flex align-items-center mb-3">
                <TextField
                    label="New todo"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    className="me-3"
                />
                <Button
                    style={{ backgroundColor: '#212121', color: '#fff' }}
                    variant="contained"
                    color="primary" onClick={handleAddTodo}>
                    Add Todo
                </Button>
            </div>
            <div className="list-unstyled w-100">
                {todos.map((todo) => (
                    <div key={todo.id}>
                        <Card className="card mb-3 p-3">
                            <ListItem className="text-center">
                                {editTodoId === todo.id ? (
                                    <div className="d-flex justify-content-center align-items-center" style={{ width: '100%' }}>
                                        <TextField
                                            className="d-flex align-items-start m-3"
                                            value={editTodoText}
                                            onChange={(e) => setEditTodoText(e.target.value)}
                                        />
                                        <Button
                                            className="d-flex justify-content-center align-items-baseline"
                                            style={{ backgroundColor: '#212121', color: '#fff' }}
                                            onClick={handleUpdateTodo}>Update</Button>
                                    </div>
                                ) : (
                                    <>
                                        <ListItemText
                                            primary={todo.title.charAt(0).toUpperCase() + todo.title.slice(1)}
                                            secondary={todo.completed ? "Completed" : "Not completed"}
                                            onClick={() => handleToggleComplete(todo.id)}
                                            style={{ cursor: "pointer" }}
                                        />
                                        <Button
                                            style={{ backgroundColor: '#212121', color: '#fff' }}
                                            onClick={() => handleEditTodo(todo.id, todo.title)}>Edit</Button>
                                        <Button
                                            className="m-4"
                                            style={{ backgroundColor: '#212121', color: '#fff' }}
                                            variant="outlined"
                                            color="secondary"
                                            onClick={() => handleDeleteTodo(todo.id)}>Delete</Button>
                                    </>
                                )}
                            </ListItem>
                        </Card>
                    </div>
                ))}
            </div>

            <Typography variant="h4" className="mb-3">Album Photos</Typography>
            <div className="mb-3">
                <TextField
                    label="Filter by title"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="me-3"
                />
            </div>
            <div className="list-unstyled w-100">
                {photos.filter(photo => photo.title.includes(filter)).map((photo) => (
                    <div key={photo.id}>
                        <Card className="card mb-3 p-3">
                            <ListItem className="text-center">
                                <ListItemAvatar>
                                    <Avatar alt={`Photo ${photo.id}`} src={photo.thumbnailUrl} />
                                </ListItemAvatar>
                                <ListItemText primary={photo.title} />
                            </ListItem>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Practice;