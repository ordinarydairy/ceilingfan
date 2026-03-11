import { useState } from 'react'
import { CardBody } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const ACCESSORIES = ['none', 'hat', 'glasses', 'stache', 'cone']

export default function SealForm({ addSeal }) {
    const [name,setName] = useState('')
    const [user,setUser] = useState('')
    const [bio,setBio] = useState('')
    const [selectedAccessory, setSelectedAccessory] = useState('none')

  function handleSubmit() {
    if (!name.trim()) return
    if (!user.trim()) return // don't allow blank names
    addSeal(name.trim(), user.trim(), bio.trim(), selectedAccessory)
    setName('')
    setUser('')
    setBio('')
    setSelectedAccessory('none')
  }

  return (
    <div>
    <Card className="bg-dark text-white m-4 p-2" style={{width: '18rem', borderRadius: '20px'}}>
    <CardBody>
      Name: <input
        type="text"
        placeholder="your ceiling"
        maxLength={20}
        value={name}
        onChange={e => setName(e.target.value)}
      />
      by: <input
        type="text"
        placeholder="your name"
        value={user}
        maxLength={12}
        onChange={e => setUser(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="bio"
        value={bio}
        maxLength={50}
        style={{height: '50px'}}
        onChange={e => setBio(e.target.value)}/>

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

      <button onClick={handleSubmit}>add ceiling</button>
      </CardBody>
      </Card>
    </div>

    
  )
}
