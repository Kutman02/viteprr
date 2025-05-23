import MoviesCard from './MoviesCard';

const FavoriteMoviesList = ({ favorites }) => {
  if (favorites.length === 0) {
    return <p className="noFavorites">У вас нет избранных фильмов</p>;
  }
  
  return favorites.map((value, index) => <MoviesCard key={index} {...value} />);
};
export default FavoriteMoviesList;
