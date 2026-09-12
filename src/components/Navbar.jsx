import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = ['Home', 'Collections', 'Our Tailors', 'Process', 'Reviews', 'Contact Us']

  return (
    <nav className="navbar">
      <div className="logo">ELE<span>GANCE</span></div>
      <ul className={open ? 'nav-links open' : 'nav-links'}>
        {links.map((l) => (
          <li key={l}>
            <a href={'#' + l.toLowerCase().replace(/\s/g, '')} onClick={() => setOpen(false)}>{l}</a>
          </li>
        ))}
        <li><a href="#contactus" className="nav-cta" onClick={() => setOpen(false)}>Book Fitting</a></li>
      </ul>
      <a className="nav-google" href="https://www.google.com/maps/search/?api=1&query=12+Fashion+Avenue+City+Center" target="_blank" rel="noreferrer" aria-label="Find us on Google Maps">
        <FcGoogle />
      </a>
      <button className="hamburger" onClick={() => setOpen(!open)} aria-label="menu">
        {open ? <FiX /> : <FiMenu />}
      </button>
    </nav>
  )
}
