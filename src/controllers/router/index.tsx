import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { applicationRoutes } from './routes.constants';

export default function ApplicationRouter() {
	return <RouterProvider router={applicationRoutes}></RouterProvider>;
}
