import httpClient from 'src/api/httpClient';

import productsApi from './products';

describe('products api', () => {
  it('should return list of products', async () => {
    const response = { data: [{ id: 1, title: 'test', description: 'test' }] };
    jest.spyOn(httpClient, 'get').mockResolvedValue(response);
    const data = await productsApi.getProducts();
    expect(data?.data?.length).toBe(1);
  });
});
