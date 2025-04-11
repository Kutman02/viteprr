import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './Pages/Home';
import Movie from './Pages/Movie';
import Favorites from './Pages/Favorites';
import Error from './Pages/404';
//import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />|
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Provider>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
