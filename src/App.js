import React from 'react';

const { useState } = React;

function App() {

  const [gamemode, setGamemode] = useState('start');

  return (
    <div>
      {gamemode === 'start' && <div>Start</div>}
      {gamemode === 'battle' && <div>Battle</div>}
      {gamemode === 'gameOver' && <div>Game Over</div>}
    </div>
  );
}

export default App;

