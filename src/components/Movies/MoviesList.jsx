import MoviesCard from './MoviesCard';
import SceletonFilm from '../Sceletons/SceletonFilm';

import { useSelector } from 'react-redux';

function MoviesList() {

  const a useLocation();
  console.log('a');
  console.log(a);
  console.log('a');
  

  const { films, status } = useSelector((store) => store.movies);
  const { favoritesMovies } = useSelector((store) => store.favorites);
  console.log('favoritesMovies');
  console.log(favoritesMovies);
  console.log('favoritesMovies');

  return (
    <div id="movies" className="movies anchor">
      {status === 'loading'
        ? [...new Array(12)].map((_, index) => <SceletonFilm key={index} />)
        : films.map((value, index) => <MoviesCard key={index} {...value} />)}
    </div>
  );
}

export default MoviesList;
