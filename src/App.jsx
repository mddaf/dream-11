import Header from "./components/Header"
import Banner from "./components/Banner"
// import Players from "./components/Players"
import PlayersToggle from "./components/PlayersToggle"

const App =() =>{
  return (
  <div className="w-[90%] mx-auto">
    <Header></Header>
    <Banner></Banner>
    <PlayersToggle></PlayersToggle>
  </div>
)
}

export default App