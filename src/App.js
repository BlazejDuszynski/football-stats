import "./App.css";
import Dropdown from "./Components/Layout/Dropdown";
import AppHeader from "./Components/Layout/AppHeader";
import Search from "./Components/UI/Search";
import SquadSection from "./Components/Layout/SquadSection";
import SquadProvider from "./Components/Store/SquadProvider";
import PlayerWindow from "./Components/Layout/Player/PlayerWindow";
import { Fragment, useState } from "react";

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
      <SquadProvider>
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
      </SquadProvider>
    </Fragment>
  );
}

export default App;
