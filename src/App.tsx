import React from 'react';
import { CursorProvider } from './context/CursorContext';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RedThreadTheory from './components/RedThreadTheory';
import ElevenElevenTheory from './components/ElevenElevenTheory';
import TwelveGrapesTheory from './components/TwelveGrapesTheory';
import SoulmatesTheory from './components/SoulmatesTheory';
import PastLifeTheory from './components/PastLifeTheory';
import MoonStarsTheory from './components/MoonStarsTheory';
import CandleFlameTheory from './components/CandleFlameTheory';
import LoveKnotTheory from './components/LoveKnotTheory';
import ShootingStarTheory from './components/ShootingStarTheory';
import ConnectionCalculator from './components/ConnectionCalculator';
import Footer from './components/Footer';
import FloatingWords from './components/FloatingWords';
import BackgroundEffect from './components/BackgroundEffect';

function App() {
  return (
    <CursorProvider>
      <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-rose-950 via-pink-900 to-purple-950">
        <CustomCursor />
        <BackgroundEffect />
        <FloatingWords />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <RedThreadTheory />
            <ElevenElevenTheory />
            <TwelveGrapesTheory />
            <SoulmatesTheory />
            <PastLifeTheory />
            <MoonStarsTheory />
            <CandleFlameTheory />
            <LoveKnotTheory />
            <ShootingStarTheory />
            <ConnectionCalculator />
          </main>
          <Footer />
        </div>
      </div>
    </CursorProvider>
  );
}

export default App;