import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { applicationRoutes } from './routes.constants';

export default function ApplicationRouter(): JSX.Element {
  return <RouterProvider router={applicationRoutes}></RouterProvider>;
}
