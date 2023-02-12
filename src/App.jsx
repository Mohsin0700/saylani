import './App.css';
import Navbar from './Components/Navigation/Navbar'
import Welcome from './Pages/WelcomePage/welcome';
import { Routes, Route } from 'react-router-dom';
import Signup from './Pages/SignupPage/Signup';
import SignIn from './Pages/LoginPage/SignIn'
import Homepage from './Pages/Homepage/Homepage';
import Account from './Pages/Account/Account';
import Cartx from './Pages/Cart/Cart';



function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Homepage />} />
        <Route path='/cart' element={<Cartx />} />
      </Routes>
    </div>
  );
}

export default App;
