import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithStoreAndRouter } from 'src/tests/helpers/renderWithStoreAndRouter';

describe('Home page', () => {
  it('should redirect to admin page', async () => {
    renderWithStoreAndRouter();
    const adminLink = screen.getByTestId('admin');
    expect(adminLink).toBeInTheDocument();
    await userEvent.click(adminLink);
    await waitFor(() => expect(screen.getByTestId('admin-products-list-page')).toBeInTheDocument());
  });
});
