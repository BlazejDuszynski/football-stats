import "./App.css";
import Dropdown from "./Components/Layout/Dropdown";
import AppHeader from "./Components/Layout/AppHeader";
import Search from "./Components/UI/Search";
import Button from "./Components/UI/Button";
import SquadSection from "./Components/Layout/SquadSection";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Search>
        <Dropdown />
      </Search>
      <SquadSection />
    </div>
  );
}

export default App;
