import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home.jsx';
import Login from './screens/Login.jsx';
import SignUp from './screens/SignUp.jsx';
import TradingScreen from './screens/Trading.jsx';
import UserProfile from './screens/UserInfo.jsx';

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/infouser' element={<UserProfile />} />
        <Route path='/operac' element={<TradingScreen />} />
      </Routes>
    </Router>
=======
    <div id='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
>>>>>>> origin/main
  );
}

export default App;
