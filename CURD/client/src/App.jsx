
import './App.css'
import Signup from './components/Signup'
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Login from './components/Login';
import OtpVarifiy from './components/OtpVarifiy';
import Admin from './components/Admin';
import Notfound from './components/Notfound';
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Admin />} />
          <Route path={"/signup"} element={<Signup />} />
          <Route path={"/login"} element={<Login />} />
          
          <Route path={"/OTP"} element={<OtpVarifiy />} />
          <Route path={"*"} element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
