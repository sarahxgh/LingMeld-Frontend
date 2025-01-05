import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import "./index.css";
import LoginPage from './Auth/Login';
import DashboardLayout from './Dashboard/DashboardLayout';
import HomePage from './HomePage';
import Register from './Auth/Register';
import LearningPage from './Dashboard/LearningPage';
import DashboardPage from './Dashboard/DashboardPage';
import ArabicEnforcement from './Learning/ArEnforcement';
import Details from './Learning/Details';
import QuizzingPage from './Learning/QuizzingPage';
import SettingsPage from './Dashboard/SettingsPage';
import Translation from './Learning/Translation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout/>}>
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/Learning" element={<LearningPage/>} />
        <Route path="/ArEnforcement" element={<ArabicEnforcement/>} />
        <Route path='/Details' element={<Details/>}/>
        <Route path='/QuizzingPage' element={<QuizzingPage/>}/>
        <Route path='/translation' element={<Translation/>}/>
        <Route path='/Settings' element={<SettingsPage/>} />
        </Route> {/* Define the layout of the dashboard pages */}

        <Route index element={<HomePage />} />
        <Route path="/Login" element={<LoginPage/>} />
        <Route path="/Register" element={<Register/>} />
        

      </Routes>

    </Router>
  )
}

export default App
