import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import httpClient from 'src/api/httpClient';
import { ROUTES_PATHS } from 'src/router/routes';
import { renderWithStoreAndRouter } from 'src/tests/helpers/renderWithStoreAndRouter';

describe('Admin edit products', () => {
  const editPath = `${ROUTES_PATHS.admin.products.edit}/1`;
  const response = { data: { id: 1, title: 'test', description: 'test' } };
  it('should redirect to list products', async () => {
    jest.spyOn(httpClient, 'get').mockResolvedValue(response);
    renderWithStoreAndRouter(editPath);
    const cancelButton = await waitFor(() => screen.getByTestId('cancel-button'));
    expect(cancelButton).toBeInTheDocument();
    await userEvent.click(cancelButton);
    await waitFor(() => {
      waitFor(() => expect(screen.getByTestId('admin-products-list-page')).toBeInTheDocument());
    });
  });

  it('should exist delete button', async () => {
    jest.spyOn(httpClient, 'get').mockResolvedValue(response);
    renderWithStoreAndRouter(editPath);
    const removeButton = await waitFor(() => screen.getByTestId('delete-button'));
    expect(removeButton).toBeInTheDocument();
  });
});
