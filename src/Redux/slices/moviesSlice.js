import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  films: [],
  filmsCategory: [],
  status: 'loading',
  errors: null,
  searchFilm: {
    film: 'null',
    status: 'loading',
    error: null,
  },
  filteredMovies: [],
};

export const fetchMovies = createAsyncThunk('movie/fetchmovies', () => {
  return axios
    .get('https://67c56962c4649b9551b69643.mockapi.io/ReactCinema')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      let errorMessage = '';
      switch (error.status) {
        case 500:
          errorMessage = 'непонятная ошибка на сервере';

          break;

        default:
          break;
      }

      console.error(error);
      throw new Error(errorMessage);
    });
});

const moviesSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    searchFilmInState: (state, action) => {
      const { id } = action.payload;
      const searchFilm = state.films.find((film) => film.id === id);
      state.searchFilm.film = searchFilm;
      state.searchFilm.status = 'fulfilled';
    },
    filterMovies: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.filteredMovies = state.films.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm),
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.films = action.payload;
        state.filmsCategory = [...new Set(action.payload.flatMap((value, _) => value.category))];
        state.status = 'fulfilled';
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'loading';
        state.errors = action.error.message;
        console.log(action);
        console.log(action.error.message);
      });
  },
});

export default moviesSlice.reducer;
export const { searchFilmInState, filterMovies } = moviesSlice.actions;
