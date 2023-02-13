import './index.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from 'src/store';

import reportWebVitals from './reportWebVitals';
import Router from './router';

const container = document.getElementById('root') || document.body;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="content">
        <React.Suspense>
          <RouterProvider router={Router} />
        </React.Suspense>
      </div>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
