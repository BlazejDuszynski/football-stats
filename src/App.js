import "./App.css";
import Dropdown from "./Components/Layout/Dropdown";
import AppHeader from "./Components/Layout/AppHeader";
import Search from "./Components/UI/Search";
import Button from "./Components/UI/Button";
import SquadSection from "./Components/Layout/SquadSection";
import SquadProvider from "./Components/Store/SquadProvider";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Search>
        <Dropdown />
      </Search>
      <SquadProvider>
        <SquadSection />
      </SquadProvider>
    </div>
  );
}

export default App;
