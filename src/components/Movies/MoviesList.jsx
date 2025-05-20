import MoviesCard from './MoviesCard';
import SceletonFilm from '../Sceletons/SceletonFilm';

import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import FavoriteMoviesList from './FavoriteMoviesList';

function MoviesList() {
  const path = useLocation();

  const { films, status } = useSelector((store) => store.movies);
  const { favoritesMovies } = useSelector((store) => store.favorites);

  return (
    <div id="movies" className="movies anchor">
      {
      path.pathname === '/favorites' ? (
<FavoriteMoviesList favorites={favoritesMovies} />
      )}
    </div>
  );
}

export default MoviesList;
