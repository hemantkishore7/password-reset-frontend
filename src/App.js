
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Auth';
import './App.css';
import Home from './Pages/Home';
import Forgetpassword from './Pages/ForgetPassword';
import ResetPassword from './Pages/ResetPassword';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/forget' element={<Forgetpassword/>}/>
        <Route path='/reset' element={<ResetPassword/>}/>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
