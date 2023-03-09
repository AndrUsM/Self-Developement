import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { StartUpPage } from '../pages/start-up';

export const applicationRoutes = createBrowserRouter([
  {
    path: '/',
    element: <StartUpPage/>,
  }
]);
