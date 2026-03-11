import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import { db } from './firebase'
import { collection, onSnapshot, addDoc } from 'firebase/firestore'
import 'bootstrap/dist/css/bootstrap.min.css';




export function App() {

  const [seals, setSeals] = useState([])
    useEffect(() => {
    const unsub = onSnapshot(collection(db, 'seals'), snapshot => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setSeals(data)
    })
    return () => unsub() // cleanup on unmount
    }, [])


    async function addSeal(name, user, bio, accessory){
      await addDoc(collection(db, 'seals'), {
        id: seals.length + 1,
        name,
        user,
        bio, 
        accessory,
        birthday: new Date().toLocaleDateString(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,

      })
    }

  return (
    <BrowserRouter>
      <nav className="m-3" style={{ position: 'relative', zIndex: 100 , paddingHorizontal: '30px'}}>
        <Link style={{paddingHorizontal: '30px'}} to="/">Home</Link>
         &ensp;/&ensp;
        <Link style={{paddingHorizontal: '30px'}} to="/gallery">Gallery</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home seals={seals} addSeal={addSeal}/>} />
        <Route path="/gallery" element={<Gallery seals={seals}/>} />
      </Routes>
      <footer className="m-2">
        made with  <img src="/seal.png" height={'10px'}></img>  by me &#40;claire&#41; • be good kids, don't make me add a report button
      </footer>
    </BrowserRouter>
   
    
  )
}




export default App;
