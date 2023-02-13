import { RootState } from 'src/store';
import { selectIsLoading, selectProduct, selectProducts } from 'src/store/admin/products/selectors';

describe('selectors admin products', () => {
  it('should work selectProducts with empty state', () => {
    expect(selectProducts({} as RootState)).toEqual([]);
  });

  it('should work selectProducts with filled state', () => {
    const state = { adminProducts: { products: [{}] } } as RootState;
    expect(selectProducts(state)).toEqual([{}]);
  });
  it('should work selectProduct with empty state', () => {
    expect(selectProduct({} as RootState)).toEqual(null);
  });

  it('should work selectProduct with filled state', () => {
    const state = { adminProducts: { product: { id: 1 } } } as RootState;
    expect(selectProduct(state)).toEqual({ id: 1 });
  });
  it('should work selectIsLoading with empty state', () => {
    expect(selectIsLoading({} as RootState)).toEqual(false);
  });

  it('should work selectIsLoading with filled state', () => {
    const state = { adminProducts: { isLoading: true } } as RootState;
    expect(selectIsLoading(state)).toEqual(true);
  });
});
