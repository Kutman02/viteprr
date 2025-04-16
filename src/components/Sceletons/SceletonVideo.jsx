import ContentLoader from 'react-content-loader';

const SceletonVideo = (props) => (
  <ContentLoader
    speed={2}
    width={1217}
    height={700}
    viewBox="0 0 1217 700"
    backgroundColor="#878787"
    foregroundColor="#cfcece"
    {...props}>
    <rect x="0" y="0" rx="10" ry="10" width="1217" height="700" />
  </ContentLoader>
);

export default SceletonVideo;
