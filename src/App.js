import "./App.css";
import Dropdown from "./Components/Layout/Dropdown";
import AppHeader from "./Components/Layout/AppHeader";
import Search from "./Components/UI/Search";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Search>
        <Dropdown />
      </Search>
    </div>
  );
}

export default App;
