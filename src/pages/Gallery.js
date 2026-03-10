import Card from 'react-bootstrap/Card';

export default function Gallery({ seals }) {
  if (seals.length === 0) return <p>No seals yet!</p>

  return (
    <div style={{ display: 'grid', alignItems: 'center', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem', padding: '1rem' }}>
      <Card className="p-2 m-1 py-3" style={{alignItems: 'center'}}>
      {seals.map(seal => (
        <div key={seal.id}>
          <img src="/seal.png" width={100} />
          {/* render accessory on top here later */}
          <Card.Title>{seal.name}</Card.Title>
          <Card.Subtitle>by {seal.user} • born MM/DD/YYYY</Card.Subtitle>
          <p style={{ fontSize: '0.75rem', color: 'gray' }}>#{seal.id}</p>
        </div>
      ))}
      </Card>
    </div>
  )
}

/* future: add user submitted image toggle */