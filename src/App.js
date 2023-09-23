import './App.css';
import Login from './Components/Login/Login';
import { BrowserRouter,Routes,Route ,Navigate} from 'react-router-dom';
import VerifyOtp from './Components/Login/VerifyOtp';
import Registeruser from './Components/Login/RegisterUser';
import Overview from './Components/Login/DashBoard/OverView';
import { useSelector } from 'react-redux';
function App() {
  const {loading, user, isAuthentication, error} = useSelector(state => state.user)
  return (
    <div className="App app-width">
      <BrowserRouter >
      <Routes>
      <Route path='/' Component={Login} />
      <Route path='/verifyOtp' Component={VerifyOtp} />
      <Route path='/registerUser' Component={Registeruser} />
      {loading === false && (isAuthentication && <Route path='/dashboard' element={<Overview user={user}/>}/>)}
      {loading === false && (isAuthentication === false &&<Route path="/dashboard" element={<Navigate to="/" />} />)}

      </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
