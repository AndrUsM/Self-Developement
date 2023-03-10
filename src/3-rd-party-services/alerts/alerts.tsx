import React from 'react';
import { ToastContainer, toast, type TypeOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function pushAlert (message: string, type: TypeOptions = 'info'): void {
  if (message !== null && message.length !== 0) {
    toast(message, {
      type,
    });
  }
}

export function Alerts (): JSX.Element {
  return <ToastContainer />;
}
