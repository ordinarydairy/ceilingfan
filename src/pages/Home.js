import { useState, useEffect, useRef } from 'react'
import SealForm from '../components/SealForm'
import Seal from '../components/Seal';
import Card from 'react-bootstrap/Card';

export default function Home({ seals, addSeal }) {
  const sealsRef = useRef([])
  const [, forceRender] = useState(0)

  const [hoveredSeal, setHoveredSeal] = useState(null)

  useEffect(() => {
    sealsRef.current = seals.map(s => ({
      ...s,
      x: s.x ?? Math.random() * window.innerWidth,
      y: s.y ?? Math.random() * window.innerHeight,
      vx: s.vx ?? 2,
      vy: s.vy ?? 2,
    }))
  }, [seals])

  useEffect(() => {
    let animId
    function tick() {
      sealsRef.current = sealsRef.current.map(seal => {
        let { x, y, vx, vy } = seal
        x += vx
        y += vy
        if (x < 0 || x > window.innerWidth - 80) vx *= -1
        if (y < 0 || y > window.innerHeight - 80) vy *= -1
        return { ...seal, x, y, vx, vy }
      })
      forceRender(n => n + 1)
      animId = requestAnimationFrame(tick)
    }
    animId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>

      <SealForm addSeal={addSeal} />

      {sealsRef.current.map(seal => (
        <div key={seal.id} style={{ position: 'absolute', left: seal.x, top: seal.y }}
        onMouseEnter={() => setHoveredSeal(seal)}
        onMouseLeave={() => setHoveredSeal(null)}
        >
          <Seal accessory={seal.accessory} width ={100} />

          {hoveredSeal?.id === seal.id && (
            <div style={{
                position: 'absolute',
                top: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'white',
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '4px 10px',
                whiteSpace: 'nowrap',
                fontSize: '0.85rem',
                boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                pointerEvents: 'none',
                
            }}>
                {seal.name}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}