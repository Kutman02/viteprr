import { useSelector } from 'react-redux';
import { searchParamsYoutube } from '../../tools/searchParamInYoutube';
import SceletonVideo from '../Sceletons/SceletonVideo';

function Video() {
  const { searchFilm, status } = useSelector((store) => store.movies);

  if (status === 'loading') {
    return (
      <div className="video-wrapper">
        <SceletonVideo />
      </div>
    );
  }

  const trailerUrl = searchFilm?.film?.trailerUrl;
  const videoUrl = trailerUrl ? searchParamsYoutube(trailerUrl) : '';
  return (
    <>
      <iframe
        width="1217"
        height="700"
        src={`https://www.youtube.com/embed/${videoUrl}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen></iframe>
    </>
  );
}
export default Video;
