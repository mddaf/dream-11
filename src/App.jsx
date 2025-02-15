import Header from "./components/Header"
import Banner from "./components/Banner"
// import Players from "./components/Players"
import PlayersToggle from "./components/PlayersToggle"
// import Toggle from "./components/Toggle"

const App =() =>{
  return (
  <div className="w-[90%] mx-auto">
    <Header></Header>
    <Banner></Banner>
    <PlayersToggle></PlayersToggle>
    {/* <Toggle></Toggle> */}
  </div>
)
}

export default App