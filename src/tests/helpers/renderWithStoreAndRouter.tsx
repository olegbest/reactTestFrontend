import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { ROUTES } from 'src/router';
import { store } from 'src/store';

export const renderWithStoreAndRouter = (route = '/') => {
  const router = createMemoryRouter(ROUTES, { initialEntries: [route] });
  return render(
    <Provider store={store}>
      <React.Suspense>
        <RouterProvider router={router} />
      </React.Suspense>
    </Provider>
  );
};
