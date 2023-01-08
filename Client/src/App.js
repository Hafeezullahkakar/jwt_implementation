
import './App.css';
import LoginPage from './components/LoginPage';
import LoginPageBoot from './components/LoginPageBoot';
import Dashboard from './components/Dashboard';
import Home from './components/Home';

import { BrowserRouter, Routes, Route  } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<LoginPageBoot />} />
      <Route path='/dashboard' element={<Dashboard />} />



    </Routes>
   
    </BrowserRouter>
  );
}

export default App;
