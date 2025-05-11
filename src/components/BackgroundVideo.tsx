import styled from 'styled-components';

const Video = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-width: 100%;
  min-height: 100%;
  z-index: -2;
`;

const BackgroundVideo = () => {
  return (
    <Video autoPlay muted loop playsInline preload="auto">
      <source src="/video1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </Video>
  );
};

export default BackgroundVideo; 