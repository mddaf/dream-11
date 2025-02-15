import { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import PlayerSelection from './components/PlayerSelection';
import Footer from './components/footer';

const App = () => {
  const [coins, setCoins] = useState(0);

  
  const addCoins = (amount) => setCoins((prevCoins) => prevCoins + amount);

  
  const deductCoins = (amount) => setCoins((prevCoins) => prevCoins - amount);

  return (
    <div >
      <div className="w-[90%] mx-auto font-sora">
      <Header coins={coins} />
      <Banner onClaim={() => addCoins(6000000)} />
      <PlayerSelection coins={coins} deductCoins={deductCoins} />
      </div>
      <div>
      <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
