import "./App.css";
import Dropdown from "./Components/Layout/Dropdown";
import AppHeader from "./Components/Layout/AppHeader";
import Search from "./Components/UI/Search";
import SquadSection from "./Components/Layout/SquadSection";
import SquadProvider from "./Components/Store/SquadProvider";
import PlayerWindow from "./Components/Layout/Player/PlayerWindow";
import { Fragment, useState } from "react";
import PlayerProvider from "./Components/Store/PlayerProvider";
import LandingPage from "./Components/Layout/LandingPage";

function App() {
  const [isPlayerWindowOpen, setIsPlayerWindowOpen] = useState(false);

  const openPlayerWindowHandler = () => {
    setIsPlayerWindowOpen(true);
  };

  const closePlayerWindowHandler = () => {
    setIsPlayerWindowOpen(false);
  };

  return (
    <Fragment>
      <LandingPage />
      <SquadProvider>
        <PlayerProvider>
          <div className="App">
            {isPlayerWindowOpen && (
              <PlayerWindow onPlayerWindowClose={closePlayerWindowHandler} />
            )}
            <AppHeader />
            <Search>
              <Dropdown />
            </Search>
            <SquadSection onPlayerWindowOpen={openPlayerWindowHandler} />
          </div>
        </PlayerProvider>
      </SquadProvider>
    </Fragment>
  );
}

export default App;
