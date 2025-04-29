import { Link } from 'react-router-dom';
import star from '../../assets/icons/star.png';
function MoviesCard(props) {
  //console.log(props.title);
  return (
    <Link className="movies__card" to={`/movie/${props.id}`}>
      <div className="movies__card-rating">
        <p>{props.categoryes.find((item) => typeof item === 'string' && item.includes('+'))}</p>
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
      </div>
      <img src={props.imageUrl} alt="" />
      <div className="movies__card-title">
        <p>{props.title}</p>
        <p>({props.categoryes.find((item) => typeof item === 'number')})</p>
      </div>
    </Link>
  );
}

export default MoviesCard;
