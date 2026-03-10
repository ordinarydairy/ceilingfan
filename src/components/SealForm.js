import { useState } from 'react'
import { CardBody } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const ACCESSORIES = ['none', 'hat1', 'sunglasses', 'hat2']

export default function SealForm({ addSeal }) {
    const [name,setName] = useState('')
    const [user,setUser] = useState('')
    const [selectedAccessory, setSelectedAccessory] = useState('none')

  function handleSubmit() {
    if (!name.trim()) return
    if (!user.trim()) return // don't allow blank names
    addSeal(name.trim(), (!user.trim()), selectedAccessory)
    setName('')
    setUser('')
    setSelectedAccessory('none')
  }

  return (
    <div>
    <Card className="bg-dark text-white m-4 p-2" style={{width: '18rem'}}>
    <CardBody>
      Name: <input
        type="text"
        placeholder="name your ceiling"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      by: <input
        type="text"
        placeholder="your name"
        value={user}
        onChange={e => setUser(e.target.value)}
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
      </CardBody>
      </Card>
    </div>

    
  )
}
