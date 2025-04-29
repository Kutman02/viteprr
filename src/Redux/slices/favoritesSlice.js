import { createSlice } from '@reduxjs/toolkit';

function loadFavoritesMovies() {
  const dataLocal = localStorage.getItem('favoritesMovies');
  const parseData = dataLocal ? JSON.parse(dataLocal) : [];
  return parseData;
}

const initialState = {
  favoritesMovies: loadFavoritesMovies(),
  status: 'loading',
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavoritesMovie: (state, action) => {
      const dataFilm = action.payload;
      const isAlreadyFavorite = state.favoritesMovies.some(movie => movie.id === dataFilm.id);
      console.log('isAlreadyInFavorites');
      console.log(isAlreadyFavorite);
      console.log('isAlreadyInFavorites');

      if (!isAlreadyFavorite) {
        state.favoritesMovies.push(dataFilm);
        localStorage.setItem('favoritesMovies', JSON.stringify(state.favoritesMovies));
      }
    },
  },
});

export default favoritesSlice.reducer;
export const { addFavoritesMovie } = favoritesSlice.actions;
