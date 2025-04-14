import { useSelector } from 'react-redux';
import { searchParamsYoutube } from '../../tools/searchParamInYoutube';

function Video() {
  const { searchFilm } = useSelector((store) => store.movies);
  console.log(searchFilm);
  const trailerUrl = searchFilm.film.trailerUrl;

  const videoUrl = searchParamsYoutube(trailerUrl);

  return (
    <>
      {searchFilm.status === 'loading' ? (
        <p>Loading...</p>
      ) : (
        <div className="video-wrapper">
          <iframe
            width="100%"
            height="700"
            src={`https://www.youtube.com/embed/${videoUrl}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
        </div>
      )}
    </>
  );
}
export default Video;
