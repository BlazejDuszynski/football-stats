import "./App.css";
import Dropdown from "./Components/Layout/Dropdown";
import AppHeader from "./Components/Layout/AppHeader";
import Search from "./Components/UI/Search";
import SquadSection from "./Components/Layout/SquadSection";
import SquadProvider from "./Components/Store/SquadProvider";
import PlayerWindow from "./Components/Layout/Player/PlayerWindow";

function App() {
  return (
    <div className="App">
      <PlayerWindow />
      <AppHeader />
      <SquadProvider>
        <Search>
          <Dropdown />
        </Search>
        <SquadSection />
      </SquadProvider>
    </div>
  );
}

export default App;
