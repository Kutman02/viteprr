import ContentLoader from 'react-content-loader';

const SceletonFilm = (props) => (
  <ContentLoader
    speed={1}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#878787"
    foregroundColor="#cfcece"
    {...props}>
    <rect x="0" y="0" rx="10" ry="10" width="130" height="400" />
  </ContentLoader>
);

export default SceletonFilm;
