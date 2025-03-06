import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  films: [],
  status: null,
  errors: null,
};

export const fetchMovies = () => createAsyncThunk('movie/fetchMovies',async () => {
     await fetch('https://67c56962c4649b9551b69643.mockapi.io/ReactCinema');
    
} );

const moviesSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
});

export default moviesSlice.reducer;
//export const {  } = moviesSlice.actions;
