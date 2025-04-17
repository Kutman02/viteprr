import { createSlice } from '@reduxjs/toolkit';
function loadFaviritesMovies() {
  const dataLocal = localStorage.getItem('favoritesMovies');
  const parseData = dataLocal ? JSON.parse(dataLocal) : [];
  return parseData;
}

const initialState = {
  favoritesMovies: loadFaviritesMovies(),
  status: 'loading',
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavoritesMovie: (state, action) => {
      const dataFilm = action.payload;
      const isAlreadyInFavorite = state.favoritesMovies.some(movie => movie.id === dataFilm.id);

      console.log('=========================');
      console.log(isAlreadyInFavorite);
      console.log('=========================');

      if (!isAlreadyInFavorite) {
        state.favoritesMovies.push(dataFilm);
        localStorage.setItem('favoritesMovies', state.favoritesMovies);
      }
    },
  },
});

export default favoritesSlice.reducer;
export const { addFavoritesMovie } = favoritesSlice.actions;
