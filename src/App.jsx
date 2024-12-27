import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import "./index.css";
import LoginPage from './Auth/Login';
import DashboardLayout from './Dashboard/DashboardLayout';
import HomePage from './HomePage';
import Register from './Auth/Register';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} /> {/* Define the dhasboard page route */}
        <Route path="/Login" element={<LoginPage/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Dashboard" element={<DashboardLayout/>} />
      </Routes>
    </Router>
  )
}

export default App
