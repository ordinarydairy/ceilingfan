import Card from 'react-bootstrap/Card';
import Seal from '../components/Seal';

export default function Gallery({ seals }) {
  if (seals.length === 0) return <p>No seals yet!</p>

  function getFontSize(name) {
    if (name.length > 20 ) return '0.6 rem'
    return '1 rem'
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem', padding: '1rem' }}>
      {seals.map(seal => (
        <div key={seal.id}>
        <Card className="p-2 m-1" style={{alignItems: 'left'}}>
          <center><Seal accessory={seal.accessory} width ={100} /></center>
          {/* render accessory on top here later */}
          <Card.Title style={{fontSize: getFontSize(seal.name)}}>{seal.name}</Card.Title>
          <Card.Subtitle>by {seal.user} </Card.Subtitle>
          {seal.bio}
          <footer style={{ fontSize: '0.75rem', color: 'gray' }}>#{seal.id} • born {seal.birthday}</footer>
        </Card>
        </div>
      ))}
    </div>
  )
}

/* future: add user submitted image toggle */