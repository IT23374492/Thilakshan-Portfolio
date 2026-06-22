import React from 'react';
import './App.css';
import Navbar from './page/navbar';
import Hero from './page/hero';
import About from './page/about';
import Experience from './page/experience';
import Pro from './page/project';
import Skills from './page/skills';
import Education from './page/education';
import Foot from './page/footer';

function App() {
  return (
    <div className="App overflow-x-hidden">
      {/* Ambient floating blobs — purely decorative */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Pro />
        <Skills />
        <Education />
        <Foot />
      </div>
    </div>
  );
}

export default App;
