import MoviesCard from './MoviesCard';
import SceletonFilm from '../Sceletons/SceletonFilm';

import { useSelector } from 'react-redux';

function MoviesList() {
  const { films, status } = useSelector((store) => {
    return store.movies;
  });

  return (
    <div id="movies" className="movies anchor">
      {status === 'loading'
        ? [...new Array(12)].map((_, index) => <SceletonFilm key={index} />)
        : films.map((value, index) => <MoviesCard key={index} {...value} />)}
    </div>
  );
}

export default MoviesList;
