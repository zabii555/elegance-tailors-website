const cats = [
  { img: '/images/custom-suit.png', title: 'Custom Suits', desc: 'Tailored perfection for every occasion.' },
  { img: '/images/man-suit.png', title: 'Custom Shirts', desc: 'Fine fabrics with flawless fits.' },
  { img: '/images/tuxedo.png', title: 'Tuxedo & Formal', desc: 'Black-tie elegance, redefined.' },
  { img: '/images/wedding-groom.png', title: 'Wedding Series', desc: 'Look unforgettable on your big day.' },
]

export default function Categories() {
  return (
    <section className="categories" id="collections">
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="section-title">Our <span className="gold">Collections</span></h2>
        <div className="cat-grid">
          {cats.map((c) => (
            <div className="cat-card" key={c.title}>
              <img src={c.img} alt={c.title} />
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
