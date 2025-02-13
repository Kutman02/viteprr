import logo from '../../assets/icons/icon.png';
import heart from '../../assets/icons/heart.png';
export default function Header() {
  return (
    <header>
      <a className="header__logo-flex" href="./index.html">
        <img src={logo} alt="logo"></img>
        <div className="header__logo-flex_sitename">
          <p>REACT</p>
          <p>CINEMA</p>
        </div>
      </a>
      <ul className="header__navbar-flex">
        <a href="./index.html">Home</a>
        <a href="./favorites.html">Favorites</a>
        <a href="#categoryes">Movies</a>
        <a href="#categoryes">FAQ</a>
        <a href="#categoryes">Help</a>
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
