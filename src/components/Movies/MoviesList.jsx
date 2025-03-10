//import { useContext } from 'react';
//import MoviesCard from './MoviesCard';
//import { Films } from '../../App';
import { useDispatch } from 'react-redux';
import { test } from '../../Redux/slices/moviesSlice';

function MoviesList() {
  const dispatch = useDispatch();
  //const films = useContext(Films);

  return (
    <div id="movies" className="movies anchor">
      <button onClick={() => dispatch(test('hellooo'))}></button>
      {/*{films.map((value, index) => (
        <MoviesCard key={index} {...value} />
      ))}*/}
    </div>
  );
}

export default MoviesList;
