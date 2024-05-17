import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './screens/Home.jsx';
import SignUp from './screens/SignUp.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
