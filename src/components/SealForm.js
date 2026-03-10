import { useState } from 'react'

const ACCESSORIES = ['none', 'hat1', 'sunglasses', 'hat2']

export default function SealForm({ addSeal }) {
    const [name,setName] = useState('')
    const [selectedAccessory, setSelectedAccessory] = useState('none')

  function handleSubmit() {
    if (!name.trim()) return // don't allow blank names
    addSeal(name.trim(), selectedAccessory)
    setName('')
    setSelectedAccessory('none')
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Name your seal"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <div>
        {ACCESSORIES.map(accessory => (
          <button
            key={accessory}
            onClick={() => setSelectedAccessory(accessory)}
            style={{
              outline: selectedAccessory === accessory ? '2px solid blue' : 'none'
            }}
          >
            {accessory}
          </button>
        ))}
      </div>

      <button onClick={handleSubmit}>Add Seal</button>
    </div>

    
  )
}
