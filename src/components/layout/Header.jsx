import { Link } from 'react-router-dom';
import logo from '../../assets/icons/icon.png';
import heart from '../../assets/icons/heart.png';
export default function Header() {
  return (
    <header>
      <Link className="header__logo-flex" to="/">
        <img src={logo} alt="logo"></img>
        <div className="header__logo-flex_sitename">
          <p>REACT</p>
          <p>CINEMA</p>
        </div>
      </Link>
      <ul className="header__navbar-flex">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/movie">Movies</Link>
        <Link to="#categoryes">FAQ</Link>
        <Link to="#categoryes">Help</Link>
      </ul>
      <div className="header__auth-flex">
        <div className="favorites__movies">
          <img src={heart} alt="" />
          <p>0</p>
        </div>
        <a href="./favorites.html">Account</a>
      </div>
    </header>
  );
}
