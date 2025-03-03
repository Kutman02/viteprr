import Banner from '../components/Home/Banner';
import Filter from '../components/Filter/Filter';
import MoviesList from '../components/Movies/MoviesList';
import MoviesScroll from '../components/Movies/MoviesScroll';
function Home(props) {
  console.log(props);

  return (
    <>
      <Banner />
      <div className="container">
        <Filter />
        <MoviesList {...props} />
        <MoviesScroll />
      </div>
    </>
  );
}

export default Home;
