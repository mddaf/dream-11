import { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import PlayerSelection from './components/PlayerSelection';

const App = () => {
  const [coins, setCoins] = useState(0);

  
  const addCoins = (amount) => setCoins((prevCoins) => prevCoins + amount);

  
  const deductCoins = (amount) => setCoins((prevCoins) => prevCoins - amount);

  return (
    <div className="w-[90%] mx-auto">
      <Header coins={coins} />
      <Banner onClaim={() => addCoins(6000000)} />
      <PlayerSelection coins={coins} deductCoins={deductCoins} />
    </div>
  );
};

export default App;
