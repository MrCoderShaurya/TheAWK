import React, { useState } from 'react';
import Intro from './index';
import Home from './home';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <Home />
      {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
    </>
  );
}



