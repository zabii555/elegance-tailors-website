const imgs = [
  'images/navy-suit.png', 'images/evening-gown.png', 'images/tuxedo.png',
  'images/bridal-gown.png', 'images/diamond-suit.png', 'images/green-gown.png',
  'images/grey-suit.png', 'images/women-suit.png',
]

export default function Gallery() {
  return (
    <section className="section gallery" id="shop">
      <div className="container">
        <div className="center">
          <h2 className="section-title">SIGNATURE <span className="gold">STYLES</span></h2>
          <div className="underline"></div>
        </div>
        <div className="gallery-grid">
          {imgs.map((src, i) => <img key={i} src={src} alt={`Style ${i + 1}`} />)}
        </div>
      </div>
    </section>
  )
}
