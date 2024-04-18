import { useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/navbar";
import Hero from "./Components/Hero/hero";

const App = () => {
  let heroData = [
    { text1: "Dive into", text2: "what  you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" },
  ];
  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setplayStatus] = useState(false);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setplayStatus={setplayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
};

export default App;
