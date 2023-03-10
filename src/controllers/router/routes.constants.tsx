import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from '../pages/authorization/login';
import { StartUpPage } from '../pages/start-up';

export const applicationRoutes = createBrowserRouter([
  {
    path: '/',
    element: <StartUpPage/>,
  },
  {
    path: 'login',
    element: <LoginPage/>
  }
]);
