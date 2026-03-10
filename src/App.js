import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import Gallery from './pages/Gallery'



export function App() {

  const [seals, setSeals] = useState([])

    function addSeal(name, accessory){
      const newSeal = {
        id: Math.random().toString(36).slice(2, 7),
        name,
        accessory,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,

      }
  setSeals(prev => [...prev, newSeal])
    }

  return (
    <BrowserRouter>
      <nav style={{ position: 'relative', zIndex: 100 }}>
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home seals={seals} addSeal={addSeal}/>} />
        <Route path="/gallery" element={<Gallery seals={seals}/>} />
      </Routes>
    </BrowserRouter>
   
    
  )
}




export default App;
