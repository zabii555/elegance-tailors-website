export default function Media() {
  return (
    <section className="section media">
      <div className="container media-grid">
        <img src="/images/atelier.png" alt="Inside our atelier" />
        <div>
          <h2 className="section-title">PETER IN THE <span className="gold">MEDIA</span></h2>
          <div className="underline"></div>
          <p>
            Featured in leading fashion magazines and television shows, our craft
            has been recognized worldwide for excellence in bespoke tailoring.
            From Vogue editorials to national television features, the Elegance
            name has become synonymous with quality.
          </p>
          <a href="#reviews" className="btn">Read More</a>
        </div>
      </div>
    </section>
  )
}
