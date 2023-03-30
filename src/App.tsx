import { useContext } from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Register } from './pages/UserRegister';
import { Private } from './pages/Private';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';


function App() {
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
    window.location.href = window.location.href;
  }

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;