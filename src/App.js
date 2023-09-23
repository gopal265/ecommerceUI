import './App.css';
import Login from './Components/Login/Login';

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
