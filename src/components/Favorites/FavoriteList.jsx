import FavoritesCart from '../FavoritesCart/FavoritesCart';
function FavoriteList() {
  return (
    <>
      {' '}
      <div className="top-movies">
        <p>Top Rated Films</p>
        <FavoritesCart />
        <FavoritesCart />
      </div>
    </>
  );
}
export default FavoriteList;
