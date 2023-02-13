import { RootState } from 'src/store';

export const selectProducts = (state: RootState) => state?.adminProducts?.products || [];
export const selectProduct = (state: RootState) => state?.adminProducts?.product || null;
export const selectIsLoading = (state: RootState) => state?.adminProducts?.isLoading || false;
