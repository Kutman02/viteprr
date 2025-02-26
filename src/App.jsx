import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './Pages/Home';
//import Movie from './Pages/Movie';
//import Favorites from './Pages/Favorites';
function App() {
  return (
    <>
      <Header />
      <Home />
      {/*<Favorites />*/}
      {/*<Movie />*/}
      <Footer />
    </>
  );
}

export default App;
