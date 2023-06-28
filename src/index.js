import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';

const Home = lazy(() => import('./pages/Home'));
const Users = lazy(() => import('./pages/User/Users'));
const SingleUser = lazy(() => import('./pages/User/SingleUser'));
const Posts = lazy(() => import('./pages/Post/Posts'));
const SinglePost = lazy(() => import('./pages/Post/SinglePost'));
const Comments = lazy(() => import('./pages/Comment/Comments'));
const SingleComment = lazy(() => import('./pages/Comment/SingleComment'));
const FilterUser = lazy(() => import('./pages/FilterUser'));
const Practice = lazy(() => import('./pages/Practice'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
    {
        path: '/',
        element: <Home />,
      },
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: '/users/:id',
        element: <SingleUser />,
      },
      {
        path: '/posts',
        element: <Posts />,
      },
            {
        path: '/posts/:id',
        element: <SinglePost />,
      },
      {
        path: '/comments',
        element: <Comments />,
      },
            {
        path: '/comments/:id',
        element: <SingleComment />,
      },
      {
        path: '/filterUser',
        element: <FilterUser />,
      },
      {
        path: '/practice',
        element: <Practice />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
