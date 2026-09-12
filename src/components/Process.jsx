import { FiMessageSquare, FiEdit3, FiLayers, FiScissors, FiPackage } from 'react-icons/fi'

const steps = [
  { icon: <FiMessageSquare />, title: 'Consultation', desc: 'Discuss your style, occasion and vision with our designers.' },
  { icon: <FiEdit3 />, title: 'Measurement', desc: '25+ precise body measurements taken by master tailors.' },
  { icon: <FiLayers />, title: 'Fabric Selection', desc: 'Choose from 500+ premium imported fabrics & linings.' },
  { icon: <FiScissors />, title: 'Fitting', desc: 'Three dedicated fittings to sculpt the perfect silhouette.' },
  { icon: <FiPackage />, title: 'Delivery', desc: 'Your finished garment, pressed and delivered in luxury packaging.' },
]

export default function Process() {
  return (
    <section className="section process" id="process">
      <div className="container">
        <div className="center">
          <h2 className="section-title">The Bespoke <span className="gold">Process</span></h2>
          <div className="underline"></div>
        </div>
        <div className="process-grid">
          {steps.map((s) => (
            <div className="step" key={s.title}>
              <div className="step-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
