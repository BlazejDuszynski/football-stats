import "./App.css";
import Dropdown from "./Components/Layout/Dropdown";
import AppHeader from "./Components/Layout/AppHeader";
import Search from "./Components/UI/Search";
import SquadSection from "./Components/Layout/SquadSection";
import SquadProvider from "./Components/Store/SquadProvider";

function App() {
  return (
    <div className="App">
      <SquadProvider>
        <AppHeader />
        <Search>
          <Dropdown />
        </Search>
        <SquadSection />
      </SquadProvider>
    </div>
  );
}

export default App;
