import { useEffect, useRef } from "react";
import SplashScreen from "./components/splashscreen";
import Letter from "./components/letter";
import Intro from "./components/intro";
import MemoryPage from "./components/memorypage";
import PhotosPage from "./components/photospage";
import ClosingPage from "./components/closingpage";
import { Routes, Route, useNavigate } from "react-router-dom";
import bgMusic from "./assets/Sitaare Ikkis 128 Kbps.mp3";

function App() {
  const navigate = useNavigate();
  const openLetter = () => navigate("/letter");
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.log("Waiting for user interaction to play audio", error);
        });
      }
    };

    // Attempt to play on mount
    playAudio();

    // Play on first user interaction
    const handleInteraction = () => {
      playAudio();
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
    };

    document.addEventListener("click", handleInteraction);
    document.addEventListener("touchstart", handleInteraction);

    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
    };
  }, []);

  return (
    <>
      <audio ref={audioRef} src={bgMusic} loop autoPlay />
      <Routes>
        <Route path="/" element={<SplashScreen onButtonClick={() => navigate("/intro")} />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/intro" element={<Intro setShowLetter={openLetter} />} />
        <Route path="/memory-page" element={<MemoryPage />} />
        <Route path="/photos-page" element={<PhotosPage />} />
        <Route path="/closing-page" element={<ClosingPage />} />
      </Routes>
    </>
  );
}

export default App;