import React, { useState } from 'react';
import './App.css';
import RocketLauncher from './RocketLauncher'

function App() {
  let [launch, setLaunch] = useState(true)
  let [rocketName, setRocketName] = useState('Apollo')

  const handleChange = (e) => {
    setRocketName(e.target.value)
  }

  return (
    <main>
      <h1>Learning Cleanup!</h1>
      <button onClick={() => setLaunch(!launch)}>
        {launch ? 'Abort launch' : "Start Launch"}
      </button>
      {/* changing the input will run a component update & trigger cleanup */}
      <input type="text" placeholder="Rocket name" onChange={handleChange}/>
      {launch? <RocketLauncher/> : null}
    </main>
  );
}

export default App;