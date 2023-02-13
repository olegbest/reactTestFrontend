import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import httpClient from 'src/api/httpClient';
import { ROUTES_PATHS } from 'src/router/routes';
import { renderWithStoreAndRouter } from 'src/tests/helpers/renderWithStoreAndRouter';

describe('Admin list products', () => {
  const productsPath = ROUTES_PATHS.admin.products.index;
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should contain table', async () => {
    renderWithStoreAndRouter(productsPath);
    const tableElements = await waitFor(() => screen.getAllByRole('table'));

    expect(tableElements?.length).toBe(1);
    expect(tableElements[0]).toBeInTheDocument();
  });

  it('should redirect to creating product', async () => {
    renderWithStoreAndRouter(productsPath);
    const createLink = await waitFor(() => screen.getByTestId('create-link'));
    expect(createLink).toBeInTheDocument();
    await userEvent.click(createLink);
    await waitFor(() => expect(screen.getByText(/Creating product/i)).toBeInTheDocument());
  });

  it('should redirect to editing product', async () => {
    const response = { data: [{ id: 1, title: 'test', description: 'test' }] };
    const spy = jest.spyOn(httpClient, 'get').mockResolvedValueOnce(response);

    renderWithStoreAndRouter(productsPath);
    expect(spy).toHaveBeenCalled();
    const editLinks = await waitFor(() => screen.getAllByTestId('edit-link'));
    await userEvent.click(editLinks[0]);
    await waitFor(() => expect(screen.getByText(/Editing product/i)).toBeInTheDocument());
  });
});
