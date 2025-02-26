import { Link } from 'react-router-dom';
import star from '../../assets/icons/star.png';
import ImageFılm from '../../assets/ImageFılm.jpg';
function MoviesCard(props) {
  return (
    <Link className="movies__card" to="/movie">
      <div className="movies__card-rating">
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
      </div>
      <img src={ImageFılm} alt="" />
    </Link>
  );
}

export default MoviesCard;
