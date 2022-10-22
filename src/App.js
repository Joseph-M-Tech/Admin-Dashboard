import './App.css'
import MainDashboard from './components/MainDashboard/MainDashboard';
import RightSide from './components/RightSide/RightSide';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <MainDashboard/>
        <RightSide/>
      </div>
    </div>
  );
}

export default App;