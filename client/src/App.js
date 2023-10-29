import logo from './logo.svg';
import './App.css';
import LeftPanel from "./components/panels/LeftPanel";
import MiddlePanel from "./components/panels/MiddlePanel";
import RightPanel from "./components/panels/RightPanel";

function App() {
  const logs = [];
  return (
    <div className="App">
      <LeftPanel logs={logs}/>
      <MiddlePanel logs={logs}/>
      <RightPanel logs={logs}/>
    </div>
  );
}

export default App;
