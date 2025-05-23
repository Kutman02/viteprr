import MoviesCard from './MoviesCard';

const MoviesCards = ({ films }) => {
  const moviesToShow = films.filteredMovies.length > 0 ? films.filteredMovies : films.films;
  return moviesToShow.map((value, index) => <MoviesCard key={index} {...value} />);
};

export default MoviesCards;
