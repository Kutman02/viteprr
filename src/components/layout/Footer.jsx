import facebook from '../../assets/icons/facebook.png';
import instagram from '../../assets/icons/instagram.png';
import youtube from '../../assets/icons/youtube.png';
import linkedin from '../../assets/icons/linkedin.png';

export default function Footer() {
  return (
    <footer>
      <div className="footer__padding">
        <div className="site__info">
          <p>REACT CINEMA</p>
          <div>
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={youtube} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>
        <div className="footer__hrefs">
          <div>
            <p>Main</p>
            <p>Topic</p>
            <p>Topic</p>
            <p>Topic</p>
          </div>
          <div>
            <p>FAQ</p>
            <p>Topic</p>
            <p>Topic</p>
            <p>Topic</p>
          </div>
          <div>
            <p>Reports</p>
            <p>Topic</p>
            <p>Topic</p>
            <p>Topic</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
