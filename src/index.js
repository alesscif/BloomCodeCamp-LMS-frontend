import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/App';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Login from "./routes/login";
import HomeAuth from "./routes/homeAuth"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "/auth",
        element: <HomeAuth />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);