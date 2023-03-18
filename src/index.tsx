import React from 'react';
import ReactDOM from 'react-dom/client';

import { TestProvider } from './context';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <TestProvider>
      <App />
    </TestProvider>
  </React.StrictMode>
);
