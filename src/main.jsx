import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App'; // This will be our main layout
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';

import './index.css';

// This is where we define all the routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App is the main layout (with Navbar)
    children: [
      {
        index: true, // The default page to show
        element: <Home />,
      },
      {
        path: 'projects',
        element: <ProjectsPage />,
      },
      {
        path: 'experience',
        element: <ExperiencePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);