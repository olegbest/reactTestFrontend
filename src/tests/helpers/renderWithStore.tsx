import { render } from '@testing-library/react';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from 'src/store';

export const renderWithStore = (component: ReactNode) => {
  return render(<Provider store={store}>{component}</Provider>);
};
