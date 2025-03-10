import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addCase } from '@reduxjs/toolkit/dist/query/core/buildInitiate';
import { films } from '../../data/films';
const initialState = {
  films: [],
  status: null,
  errors: null,
};

export const fetchMovies = () =>
  createAsyncThunk('movie/fetchMovies', async () => {
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
  reducers: {
    test: (state, action) => {
      console.log(state, films);
      console.log(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.status = 'loading';
    });
    addCase(fetchMovies.fullfilled, (state, actions) => {});
    addCase(fetchMovies.rejected, (state) => {});
  },
});

export default moviesSlice.reducer;
export const { test } = moviesSlice.actions;
