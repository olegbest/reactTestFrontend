import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HTTPClientError } from 'src/api/httpClient';
import productsApi from 'src/api/products';
import { FormModel } from 'src/components/admin/products/FormProduct';
import { FileModel } from 'src/store/files';

export type AdminProductModel = {
  createdAt: string;
  updatedAt: string;
  id: number;
  title: string;
  description: string;
  price: number;
  image: FileModel;
};

export interface AdminProductsStateModel {
  products: AdminProductModel[];
  product: AdminProductModel | null;
  isLoading: boolean;
}

const initialState: AdminProductsStateModel = {
  products: [],
  product: null,
  isLoading: false
};

export const createProduct = createAsyncThunk(
  'products/create',
  async (data: FormModel, thunkApi) => {
    try {
      const response = await productsApi.createProduct(data);
      return response.data;
    } catch (error: unknown) {
      return thunkApi.rejectWithValue((error as HTTPClientError).message);
    }
  }
);
export const updateProduct = createAsyncThunk(
  'products/update',
  async ({ id, data }: { id: string; data: FormModel }) => {
    const response = await productsApi.updateProduct(data, id);
    return response.data;
  }
);

export const getProducts = createAsyncThunk('products/get', async () => {
  const response = await productsApi.getProducts();
  return response.data;
});

export const removeProductById = createAsyncThunk('product/remove', async (id: string) => {
  const response = await productsApi.removeById(id);
  return response.data;
});
export const getProductById = createAsyncThunk('product/get', async (id: string) => {
  const response = await productsApi.getById(id);
  return response.data;
});
export const adminProductsSlice = createSlice({
  name: 'adminProducts',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createProduct.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(updateProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateProduct.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(removeProductById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(removeProductById.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  }
});
