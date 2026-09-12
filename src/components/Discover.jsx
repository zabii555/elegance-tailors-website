import { FiCheck } from 'react-icons/fi'

export default function Discover() {
  return (
    <section className="section discover" id="aboutus">
      <div className="container discover-grid">
        <div className="discover-img">
          <img src="images/fitting.png" alt="Perfect fitting session" />
          <div className="discover-badge">
            <h3>35+</h3>
            <p>Years of Craft</p>
          </div>
        </div>
        <div className="discover-text">
          <h2>Discover true <span className="gold">Quality</span></h2>
          <div className="underline"></div>
          <p>We provide you with great suits that suit you and your lifestyle.
             Our suits are made from the highest quality fabrics and guaranteed to
             give you functionality, durability and comfort.</p>
          <ul className="check-list">
            <li><FiCheck className="gold" /> 500+ premium imported fabrics</li>
            <li><FiCheck className="gold" /> Hand-stitched canvas construction</li>
            <li><FiCheck className="gold" /> Free lifetime alterations</li>
            <li><FiCheck className="gold" /> 3 fitting sessions included</li>
          </ul>
          <a href="#ourtators" className="btn">Learn about us</a>
        </div>
      </div>
    </section>
  )
}
