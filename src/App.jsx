import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './Pages/Home';
import Movie from './Pages/Movie';
import Favorites from './Pages/Favorites';
import Error from './Pages/404';
import { createContext, useEffect, useState } from 'react';

export const Films = createContext();
function App() {
  const [value, changeValue] = useState(0);

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
        <Films.Provider value={value}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Films.Provider>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
