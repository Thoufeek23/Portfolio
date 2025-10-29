import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import your main layout and pages
import App from './App';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';

import './index.css'; // Your Tailwind styles

// 1. Define all your app's routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // <-- App is the main layout FOR the routes
    children: [
      {
        index: true, // This is the default route (e.g., "/")
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

// 2. Get the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// 3. Render the <RouterProvider />. DO NOT render <App /> here.
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);