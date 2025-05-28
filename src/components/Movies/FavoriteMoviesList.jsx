import MoviesCard from './MoviesCard';

const FavoriteMoviesList = ({ favorites }) => {
  console.log('favorites', favorites);

   if (films.filteredMovies.length > 0) {

    moviesToShow = films.filteredMovies;
  } else if (films.filteredMoviesCategoryes.length > 0) {

    moviesToShow = films.filteredMoviesCategoryes;
  } else {
    moviesToShow = films.films;

  }
  if (favorites.length === 0) {
    return <p className="noFavorites">У вас нет избранных фильмов</p>;
  }

  return favorites.favoritesMovies.map((value, index) => <MoviesCard key={index} {...value} />);
};
export default FavoriteMoviesList;


//favoritesMovies, filteredMovies, filteredMoviesCategoryes