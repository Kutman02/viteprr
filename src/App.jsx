import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './Pages/Home';
import Movie from './Pages/Movie';
import Favorites from './Pages/Favorites';
import Error from './Pages/404';
import { createContext, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';

export const Films = createContext();
function App() {
  const [count, changecount] = useState(0);
  const [value, changeValue] = useState([]);

  useEffect(() => {
    async function FetchFilms() {
      await fetch('https://67c56962c4649b9551b69643.mockapi.io/ReactCinema')
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          changeValue(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    FetchFilms();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />|
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Provider>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
