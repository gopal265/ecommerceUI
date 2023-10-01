import './App.css';
import Login from './Components/Login/Login';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Overview from "./Components/Login/DashBoard/OverView"
import Registeruser from "./Components/Login/RegisterUser"
import VerifyOtp from "./Components/Login\/VerifyOtp"
import Home from './Components/Home/Home'
import UpdateUser from './Components/Login/UpdateUser';
import { useEffect } from 'react';
import Payment from './Components/Payment';




function App() {
  const {user} = useSelector(state => state.user)
  return (
    <div className="App app-width">
      <BrowserRouter >
      
      <Routes>
      <Route path='/' Component={Home} />
      <Route path='/login' Component={Login} />
      <Route path='/verifyOtp' Component={VerifyOtp} />
      <Route path='/registerUser' Component={Registeruser} />
      <Route path='/dashboard'  element={<Overview user={user} />} />
      <Route path='/updateUser' Component={UpdateUser} />
      <Route path='/Payment' Component={Payment} />
      
      
     
      

      </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
