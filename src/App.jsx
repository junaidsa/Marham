import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/Style.Css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom'

import Header from "./Components/Header"



function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Header />} /> 
     
      
     
    </Routes>
    
  </Router>
  )
}

export default App
