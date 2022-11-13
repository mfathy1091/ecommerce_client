import { AuthProvider } from './Admin/contexts/AuthProvider';
import { MainProvider } from './Admin/contexts/MainProvider'

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <MainProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </MainProvider>
  </BrowserRouter>
);