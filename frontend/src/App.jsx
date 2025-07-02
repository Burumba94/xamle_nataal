import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Home from './pages/Home';
import Register from './pages/Register';
import Photographers from './pages/Photographers';
import Events from './pages/Events';
import Shop from './pages/Shop';
import XamlePro from './pages/XamlePro';
import './styles/index.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/xamle-pro" element={<XamlePro />} />
        <Route path="/photographers" element={<Photographers />} />
        <Route path="/events" element={<Events />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
};

export default App;