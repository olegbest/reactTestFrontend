import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import filesApi from 'src/api/files';

export interface FileModel {
  createdAt: string;
  updatedAt: string;
  id: number;
  name: string;
  url: string;
  uuid: string;
}
export const createFile = createAsyncThunk('products/create', async (data: FormData) => {
  const response = await filesApi.createFile(data);

  return response.data;
});

export const filesSlice = createSlice({
  name: 'files',
  initialState: {},
  reducers: {}
});
