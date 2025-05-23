import ImageFılm from '../../assets/ImageFılm.jpg';
function FavoritesCart() {
  return (
    <>
      {' '}
      <div className="top-movies__card">
        <div className="top-movies__card-padding">
          <img src={ImageFılm} alt="" />
          <div className="top-movies__card-info">
            <div className="top-movies__card-info-title">
              <p>Бегущий по лезвию 2049</p>
              <p>Ридли Скотт</p>
            </div>
            <div className="top-movies__card-info-description">
              <p>Film</p>
              <p>2019</p>
              <p>180m</p>
              <p>9.1</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FavoritesCart;
