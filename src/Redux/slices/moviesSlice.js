import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  films: [],
  status: null,
  errors: null,
};

export const fetchMovies = createAsyncThunk('movie/fetchMovies', async () => {
  try {
    const movies = await fetch('https://67c56962c4649b9551b69643.mockapi.io/ReactCinema');
    if (!movies.ok) {
      throw new Error('Failed to fetch movies error.');
    }
    return movies.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
});

const moviesSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        console.log(action.payload);
        state.films = action.payload;
        state.status = 'fullfilled';
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'loading';
        state.errors = action.error.message;
        console.log(action.error.message);
      });
  },
});

export default moviesSlice.reducer;
export const { test } = moviesSlice.actions;
