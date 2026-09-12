import { useState } from 'react'
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    e.target.reset()
  }

  return (
    <section className="section contact" id="contactus">
      <div className="container contact-grid">
        <div className="contact-info">
          <h2 className="section-title">CONTACT <span className="gold">INFO</span></h2>
          <div className="underline"></div>
          <p><FiMapPin className="gold" /> 12 Fashion Avenue, City Center</p>
          <a className="google-map-link" href="https://www.google.com/maps/search/?api=1&query=12+Fashion+Avenue+City+Center" target="_blank" rel="noreferrer">
            <FcGoogle /> View us on Google Maps
          </a>
          <p><FiPhone className="gold" /> +92 300 1234567</p>
          <p><FiMail className="gold" /> info@elegancetailors.com</p>
          <p><FiClock className="gold" /> Mon – Sat: 10 AM – 9 PM</p>
          <form className="contact-form" style={{ marginTop: 28 }} onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="4" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn">{sent ? 'Message Sent ✓' : 'Send Message'}</button>
          </form>
        </div>
        <img src="/images/fabrics.png" alt="Premium fabrics" />
      </div>
    </section>
  )
}
