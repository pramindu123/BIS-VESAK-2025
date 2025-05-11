import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import BackgroundVideo from './components/BackgroundVideo';
import ParticleCanvas from './components/ParticleCanvas';
import CardModal from './components/CardModal';

const Title = styled.h1`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0;
  padding-top: 10px;
  text-align: center;
  color: #f1e191;
  font-size: 6em;
  font-family: 'Abhaya Libre', serif;
  z-index: 2;
  font-weight: 700;
  white-space: nowrap;
  background: none;
  @media (max-width: 900px) {
    position: absolute;
    font-size: 4.5em;
    width: 100%;
    left: 0;
    transform: none;
    top: 0;
    margin: 0 40px;
    padding-top: 32px;
    text-align: center;
  }
  @media (max-width: 600px) {
    position: static;
    top: unset;
    left: unset;
    width: 100%;
    padding-top: 0;
    margin-bottom: 12px;
    margin-top: 64px;
    font-size: 3.8em;
    white-space: normal;
    background: none;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

const GreetingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  @media (max-width: 600px) {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }
`;

const Greeting = styled.div`
  position: absolute;
  top: 160px;
  left: 100px;
  color: #ffffff;
  font-size: 1.2em;
  text-align: left;
  max-width: 480px;
  line-height: 1.8em;
  background: rgba(0, 0, 0, 0.4);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
  text-shadow: 0 0 10px #ffd700;
  margin-bottom: 24px;
  z-index: 2;
  @media (max-width: 900px) {
    font-size: 1.1em;
  }
  @media (max-width: 600px) {
    position: static;
    top: unset;
    left: unset;
    max-width: 90vw;
    width: 100%;
    font-size: 1em;
    margin-left: auto;
    margin-right: auto;
    padding: 10px 8px;
    background: rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(2px);
    text-align: center;
  }
`;

const Button = styled.button`
  position: absolute;
  bottom: 70px;
  left: 60px;
  z-index: 2;
  padding: 10px 20px;
  background: #ffd700;
  color: black;
  font-size: 1em;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 0 15px #ffd700;
  transition: background 0.3s ease;
  margin-bottom: 0;
  @media (min-width: 900px) {
    margin-top: 40px;
  }
  &:hover {
    background: #ffcc00;
  }
`;

const DownloadCard = styled(Button)`
  left: auto;
  right: 40px;
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  border: 1px solid #ffd700;
  backdrop-filter: blur(4px);
  margin-left: 0;
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const Footer = styled.footer`
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  padding: 10px 0;
  text-align: center;
  z-index: 2;
`;

const Logo = styled.img`
  height: 40px;
`;

const FadeOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  z-index: -1;
  animation: fadeIn 2s ease-out forwards;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
  width: 100%;
`;

const App: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const musicRef = useRef<HTMLAudioElement>(null);
  const narrationRef = useRef<HTMLAudioElement>(null);

  const handlePlayClick = () => {
    if (!isPlaying) {
      if (musicRef.current) {
        musicRef.current.volume = 0.5;
        musicRef.current.play().catch(err => console.log("Autoplay failed:", err));
      }
      if (narrationRef.current) {
        narrationRef.current.volume = 1.0;
        narrationRef.current.play().catch(err => console.log("Narration autoplay failed:", err));
      }
    } else {
      musicRef.current?.pause();
      narrationRef.current?.pause();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <GlobalStyles />
      <BackgroundVideo />
      <FadeOverlay />
      <ParticleCanvas />
      <Title>
        පින්බර වෙසක් මංගල්‍යයක් වේවා !
      </Title>
      <section id="greeting-section">
        <GreetingContainer>
          <Greeting>
            උතුම් සදහම් සුවඳ මෙත් කරුණා.<br /> පියුමන් සිත් තුළ පිපේවා..<br />
            බුදුරදුන් පාමුල දිලෙන්නා වූ රන්වන් පහන් සිළු සේ. සියලු සිත් සතන් දිලේවා..<br /><br />
            තිලෝගුරු අප සම්මා සම්බුදුරජාණන් වහන්සේගේ උතුම් වූ තෙමඟුල සමරන 
            මේ වෛශාඛ්‍ය මංග්‍යලයේ සදහම් සිසිල දසත පැතිරේවා !<br /><br />
            ඔබ සැමට සුපහන් බැතිබර සිත් උපදින සුපින්බර වෙසක් පුර පසළොස්වක පොහෝ දිනයක් වේවා !!🤍
          </Greeting>
        </GreetingContainer>
        <Button onClick={handlePlayClick}>
          {isPlaying ? "Click to Stop" : "Click to Listen"}
        </Button>
        <DownloadCard onClick={() => setIsModalOpen(true)}>
          View Vesak Card
        </DownloadCard>
      </section>

      <audio ref={musicRef} loop>
        <source src="/music.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <audio ref={narrationRef} preload="auto">
        <source src="/narration.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <CardModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <Footer>
        <Logo src="/association-logo.png" alt="Association Logo" />
      </Footer>
    </>
  );
};

export default App;
