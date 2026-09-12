const stats = [
  { num: '35+', label: 'Years Experience' },
  { num: '12k+', label: 'Happy Clients' },
  { num: '500+', label: 'Premium Fabrics' },
  { num: '98%', label: 'Satisfaction Rate' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats-grid">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <h3>{s.num}</h3>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
