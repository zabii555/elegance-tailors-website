const mens = [
  { img: '/images/navy-suit.png', title: 'Navy Three-Piece', desc: 'Midnight blue, hand-finished', price: 'From $499' },
  { img: '/images/custom-suit.png', title: 'Classic Custom Suit', desc: 'Charcoal wool, bespoke cut', price: 'From $459' },
  { img: '/images/diamond-suit.png', title: 'Diamond Print Suit', desc: 'Statement three-piece', price: 'From $549' },
  { img: '/images/tuxedo.png', title: 'Royal Tuxedo', desc: 'Black-tie masterpiece', price: 'From $599' },
  { img: '/images/frock-coat.png', title: 'Frock Coat Series', desc: 'Timeless formal elegance', price: 'From $649' },
  { img: '/images/grey-suit.png', title: 'Summer Grey Suit', desc: 'Lightweight wedding wear', price: 'From $429' },
  { img: '/images/wedding-groom.png', title: 'Groom Collection', desc: 'Your big day, perfected', price: 'From $699' },
  { img: '/images/man-suit.png', title: 'Smart Casual Blazer', desc: 'Modern everyday style', price: 'From $359' },
]

const womens = [
  { img: '/images/evening-gown.png', title: 'Sky Evening Gown', desc: 'Embroidered couture gown', price: 'From $799' },
  { img: '/images/green-gown.png', title: 'Emerald Slit Gown', desc: 'Red-carpet ready', price: 'From $749' },
  { img: '/images/bridal-gown.png', title: 'Lace Bridal Gown', desc: 'Hand-stitched lace dream', price: 'From $1,299' },
  { img: '/images/bridal-gown2.png', title: 'Classic Bridal', desc: 'Timeless off-shoulder', price: 'From $1,199' },
  { img: '/images/women-suit.png', title: 'Rose Power Suit', desc: 'Corporate elegance', price: 'From $549' },
]

export default function Collections() {
  return (
    <section className="section collections" id="collections">
      <div className="container">
        <div className="center">
          <h2 className="section-title">Our <span className="gold">Collections</span></h2>
          <div className="underline"></div>
          <p style={{ color: '#999', maxWidth: 560, margin: '0 auto', lineHeight: 1.8 }}>
            Handcrafted garments for men and women — every piece cut, stitched
            and finished by master tailors in our atelier.
          </p>
        </div>

        <h3 className="coll-group-title">— Men's Collection —</h3>
        <div className="coll-grid">
          {mens.map((c) => (
            <div className="coll-card" key={c.title}>
              <img src={c.img} alt={c.title} />
              <div className="card-body">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <span className="price">{c.price}</span>
              </div>
            </div>
          ))}
        </div>

        <h3 className="coll-group-title">— Women's Collection —</h3>
        <div className="coll-grid">
          {womens.map((c) => (
            <div className="coll-card" key={c.title}>
              <img src={c.img} alt={c.title} />
              <div className="card-body">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <span className="price">{c.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
