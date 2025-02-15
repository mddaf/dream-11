import { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import PlayerSelection from './components/PlayerSelection';

const App = () => {
  const [coins, setCoins] = useState(0); // Initialize coin count at 0

  // Function to add coins
  const addCoins = () => {
    setCoins((prevCoins) => prevCoins + 6000000); // Add 6 million coins
  };

  return (
    <div className="w-[90%] mx-auto">
      <Header coins={coins} /> {/* Pass coins to Header for display */}
      <Banner onClaim={addCoins} /> {/* Pass addCoins to Banner for button click */}
      <PlayerSelection />
    </div>
  );
};

export default App;
