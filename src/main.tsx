import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ErrorButton } from './components/ErrorButton.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ErrorButton message="Click me" />
    </ErrorBoundary>
  </React.StrictMode>
);
