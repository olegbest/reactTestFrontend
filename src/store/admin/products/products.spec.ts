import { adminProductsSlice, AdminProductsStateModel } from './index';

describe('admin-products-reducer', () => {
  const reducer = adminProductsSlice.reducer;
  const initialState: AdminProductsStateModel = {
    products: [],
    product: null,
    isLoading: false
  };

  it('should handle initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('check setProducts action', () => {
    const products = [{ id: 1 }];
    const action = adminProductsSlice.actions.setProducts(products);
    expect(reducer(initialState, action)).toEqual({ ...initialState, products });
  });
});
