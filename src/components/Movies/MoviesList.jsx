import { useContext } from 'react';
import MoviesCard from './MoviesCard';
import { Films } from '../../App';

function MoviesList() {
  const films = useContext(Films);

  return (
    <div id="movies" className="movies anchor">
      {films.map((value, index) => (
        <MoviesCard key={index} {...value} />
      ))}
    </div>
  );
}

export default MoviesList;
