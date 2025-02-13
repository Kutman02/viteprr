import './App.css';
import star from './assets/icons/star.png';
import ImageFılm from './assets/ImageFılm.jpg';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Banner from './components/Home/Banner';
import Filter from './components/Home/Filter';
function App() {
  return (
    <>
      <Header />
      <Banner />
      <div className="container">
        <Filter />
        <div id="movies" className="movies anchor">
          <a className="movies__card" href="./movie.html">
            <div className="movies__card-rating">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <img src={ImageFılm} alt="" />
          </a>
          <a className="movies__card" href="./movie.html">
            <div className="movies__card-rating">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <img src={ImageFılm} alt="" />
          </a>

          <a className="movies__card" href="./movie.html">
            <div className="movies__card-rating">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <img src={ImageFılm} alt="" />
          </a>
        </div>
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
