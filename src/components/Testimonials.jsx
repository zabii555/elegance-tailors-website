import { FaStar } from 'react-icons/fa'

const reviews = [
  { img: '/images/review-2.png', name: 'Daniel Carter', role: 'Business Executive', text: 'The navy three-piece they made for me is the best suit I have ever owned. The fit is absolutely perfect — true craftsmanship from start to finish.' },
  { img: '/images/review-1.png', name: 'Amara Okafor', role: 'Lawyer', text: 'My power suit turned heads at the office. The attention to detail and the personal service made the whole experience feel truly premium.' },
  { img: '/images/review-3.png', name: 'Lucas Moretti', role: 'Groom, 2025', text: 'From measurement to delivery, the whole experience felt personal and premium. My wedding suit was a masterpiece. Highly recommended!' },
  { img: '/images/review-4.png', name: 'Emma Collins', role: 'Bride', text: 'My bridal gown was beyond my dreams — hand-stitched lace, perfect fit, delivered on time. I cried when I first tried it on.' },
  { img: '/images/review-africa.png', name: 'Nia Thompson', role: 'Fashion Blogger', text: 'I have reviewed ateliers across three continents. Elegance stands out for quality, honesty and pure tailoring skill. Five stars, always.' },
  { img: '/images/review-5.png', name: 'Hannah Brooks', role: 'Evening Wear Client', text: 'The emerald gown they crafted for my gala got me compliments all night. Worth every penny — this is real couture.' },
]

export default function Testimonials() {
  return (
    <section className="section testimonials" id="reviews">
      <div className="container">
        <div className="center">
          <h2 className="section-title">Client <span className="gold">Testimonials</span></h2>
          <div className="underline"></div>
        </div>
        <div className="reviews-grid">
          {reviews.map((r) => (
            <div className="review-card" key={r.name}>
              <div className="stars">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <blockquote>"{r.text}"</blockquote>
              <div className="review-author">
                <img src={r.img} alt={r.name} />
                <div>
                  <h4>{r.name}</h4>
                  <span>{r.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
