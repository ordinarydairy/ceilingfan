export default function Gallery({ seals }) {
  if (seals.length === 0) return <p>No seals yet!</p>

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem', padding: '1rem' }}>
      {seals.map(seal => (
        <div key={seal.id}>
          <img src="/seal.png" width={100} />
          {/* render accessory on top here later */}
          <p>{seal.name}</p>
          <p style={{ fontSize: '0.75rem', color: 'gray' }}>#{seal.id}</p>
        </div>
      ))}
    </div>
  )
}