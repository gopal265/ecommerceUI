import './App.css';
import Login from './Components/Login/Login';
import Bag from './Components/Bag/Bag';
import Address from './Components/Bag/Address';

function App() {
  return (
    <div className="App app-width">
      <Login />
      <Bag />
      <Address />
    </div>
  );
}

export default App;
