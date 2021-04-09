import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Table from './components/Table';
import MenuButton from './components/MenuButton';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <MenuButton/>
      <Table/>
      </div>
  );
}

export default App;