import Video from '../components/Movie/Video';
import MainInfo from '../components/Movie/MainInfo/MainInfo';
import { useParams } from 'react-router-dom';
function Movie() {

  return (
    <main>
      <Video />
      <MainInfo />
    </main>
  );
}
export default Movie;
