import Header from "./components/Header"
import Banner from "./components/Banner"
import PlayerSelection from "./components/PlayerSelection"

const App =() =>{
  return (
  <div className="w-[90%] mx-auto">
    <Header></Header>
    <Banner></Banner>
    <PlayerSelection></PlayerSelection>
  </div>
)
}

export default App