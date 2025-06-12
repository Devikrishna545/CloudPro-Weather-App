import './App.css';
import MainRouter from './components/ReactRouter/MainRouter';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <MainRouter />
      </div>
    </div>
  );
}

export default App;
