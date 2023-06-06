
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Auth';
import './App.css';
import Home from './Pages/Home';
import Forgetpassword from './Pages/ForgetPassword';
import ResetPassword from './Pages/ResetPassword';
import Signup from './Pages/Signup';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/forget' element={<Forgetpassword/>}/>
        <Route path='/reset/:id/:token' element={<ResetPassword/>}/>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
