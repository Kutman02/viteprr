import Banner from '../Home/Banner';
import Filter from '../../components/Home/Filter';
import MoviesList from '../../Movies/MoviesList';
function Home() {
  return (
    <>
      <Banner />
      <div className="container">
        <Filter />
        <MoviesList />

        <div className="movies__scroll">
          <button>
            <i className="fa-solid fa-arrow-down"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
