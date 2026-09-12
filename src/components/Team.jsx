const tailors = [
  { img: 'images/tailor-peter.png', name: 'Peter Anderson', role: 'Master Tailor', desc: '35 years of bespoke craftsmanship. Trained in Savile Row, London.' },
  { img: 'images/tailor-elder.png', name: 'Giuseppe Romano', role: 'Head Cutter', desc: 'The hands behind our signature silhouettes since 1995.' },
  { img: 'images/designer-woman.png', name: 'Sofia Laurent', role: 'Head of Womenswear', desc: 'Couture specialist creating gowns worn on red carpets.' },
  { img: 'images/tailor-young.png', name: 'Marco Silva', role: 'Fitting Specialist', desc: 'Ensures every garment fits like a second skin.' },
]

export default function Team() {
  return (
    <section className="section team" id="ourtators">
      <div className="container">
        <div className="center">
          <h2 className="section-title">Meet Our <span className="gold">Master Tailors</span></h2>
          <div className="underline"></div>
          <p style={{ color: '#999', maxWidth: 560, margin: '0 auto', lineHeight: 1.8 }}>
            Behind every perfect garment is a craftsman with decades of dedication.
          </p>
        </div>
        <div className="team-grid">
          {tailors.map((t) => (
            <div className="team-card" key={t.name}>
              <img src={t.img} alt={t.name} />
              <div className="card-body">
                <h3>{t.name}</h3>
                <div className="role">{t.role}</div>
                <p>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
