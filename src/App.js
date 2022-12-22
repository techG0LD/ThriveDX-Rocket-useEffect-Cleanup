import React, { useState } from 'react';
import './App.css';
import RocketLauncher from './RocketLauncher.jsx'

function App() {
  let [launch, setLaunch] = useState(true)

  return (
    <main>
      <h1>Learning Cleanup!</h1>
      <RocketLauncher />
    </main>
  );
}

export default App;