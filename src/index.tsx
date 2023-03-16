import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { App } from './App';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <Navigate to='/' />,
  },
  {
    path: '/test',
    element: <Navigate to='/' />,
  },
  {
    path: '/contact',
    element: <Navigate to='/' />,
  },
  {
    path: '/*',
    element: <Navigate to='/' />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
