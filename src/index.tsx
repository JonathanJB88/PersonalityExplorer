import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider, RouteObject } from 'react-router-dom';

import { TestProvider } from './context';
import { Test, Layout, Hero, Content } from './components';
import './index.css';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Hero /> },
      { path: '/about', element: <Navigate to='/' /> },
      { path: '/test', element: <Test /> },
      { path: '/contact', element: <Navigate to='/' /> },
      { path: '/content', element: <Content /> },
      { path: '/*', element: <Navigate to='/' /> },
    ],
  },
];

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <TestProvider>
      <RouterProvider router={router} />
    </TestProvider>
  </React.StrictMode>
);
