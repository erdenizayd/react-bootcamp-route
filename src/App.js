import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/logincomponent';
import Homepage from './components/homepagecomponent';
import Signup from './components/signincomponent';

function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />}/>
        <Route path="/" element={<Homepage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
