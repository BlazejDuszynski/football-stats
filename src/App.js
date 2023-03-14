import "./App.css";
import Dropdown from "./Components/Layout/Dropdown";
import AppHeader from "./Components/Layout/AppHeader";
import Search from "./Components/UI/Search";
import SquadSection from "./Components/Layout/SquadSection";
import SquadProvider from "./Components/Store/SquadProvider";
import PlayerWindow from "./Components/Layout/Player/PlayerWindow";
import { useContext, Fragment } from "react";
import PlayerWindowContext from "./Components/Store/playerWindow-context";
import PlayerWindowProvider from "./Components/Store/PlayerWindowProvider";

function App() {
  const { isPlayerWindowOpen } = useContext(PlayerWindowContext);

  console.log(isPlayerWindowOpen);

  return (
    <Fragment>
      <div className="App">
        <PlayerWindowProvider>
          {isPlayerWindowOpen && <PlayerWindow />}
          <AppHeader />
          <SquadProvider>
            <Search>
              <Dropdown />
            </Search>
            <SquadSection />
          </SquadProvider>
        </PlayerWindowProvider>
      </div>
    </Fragment>
  );
}

export default App;
