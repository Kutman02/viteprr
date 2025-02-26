import MoviesCard from './MoviesCard';
function MoviesList() {
  let arrayFilms = [
    'kenguru jack',
    'kung fu panda',
    'kung fu panda 2',
    'kung fu panda 3',
    'kung fu panda 4',
    'kung fu panda 5',
    'kung fu panda 6',
    'kung fu panda 7',
    'kung fu panda 8',
    'kung fu panda 9',
  ];
  return (
    <div id="movies" className="movies anchor">
      {arrayFilms.map((value, index) => (
        <MoviesCard key={index} name={value} />
      ))}
    </div>
  );
}

export default MoviesList;
