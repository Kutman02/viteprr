import MoviesCard from './MoviesCard';

const MoviesCards = ({ films }) => {
  return films.map((value, index) => <MoviesCard key={index} {...value} />);
};

export default MoviesCards;
