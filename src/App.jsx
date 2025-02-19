import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Banner from './components/Home/Banner';
import Filter from './components/Home/Filter';
import MoviesList from './Movies/MoviesList';
import Home from './components/Pages/Home';
function App() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}

export default App;
