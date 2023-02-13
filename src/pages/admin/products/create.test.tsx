import { screen, waitFor } from '@testing-library/react';
import { ROUTES_PATHS } from 'src/router/routes';
import { renderWithStoreAndRouter } from 'src/tests/helpers/renderWithStoreAndRouter';

describe('Admin create products', () => {
  const editPath = ROUTES_PATHS.admin.products.create;

  it("shouldn't exist delete button", async () => {
    renderWithStoreAndRouter(editPath);
    const removeButton = await waitFor(() => screen.queryByTestId('delete-button'));
    expect(removeButton).toBeNull();
  });
});
