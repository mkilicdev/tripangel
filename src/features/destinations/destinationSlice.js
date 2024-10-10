import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDestinations = createAsyncThunk(
  'destinations/fetchDestinations',
  async () => {
    const response = await axios.get('http://localhost:3001/destinations');
    return response.data;
  }
);

const destinationSlice = createSlice({
  name: 'destinations',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDestinations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDestinations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchDestinations.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default destinationSlice.reducer;
