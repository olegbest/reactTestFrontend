import { FormModel } from 'src/components/admin/products/FormProduct';

import httpClient from './httpClient';

export default {
  createProduct: (data: FormModel) => {
    return httpClient.post('/products', data);
  },
  updateProduct: (data: FormModel, id: string) => {
    return httpClient.put(`/products/${id}`, data);
  },
  getProducts: () => {
    return httpClient.get('/products');
  },
  removeById: (id: string) => {
    return httpClient.delete(`/products/${id}`);
  },
  getById: (id: string) => {
    return httpClient.get(`/products/${id}`);
  }
};
