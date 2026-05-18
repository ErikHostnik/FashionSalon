import { useReveal } from '../hooks/useReveal'
import './SivanjeSection.css'

const services = [
  {
    title: 'Izvirno, lahko tudi drzno',
    text: 'Skupaj z vami izrišemo skico oblačila, izberemo primerno blago, pripravimo do prvega preizkusa, morebiti izpopolnimo in dokončamo vaše novo oblačilo, ki ga boste z veseljem nosili.',
    image: '/images/sections/service-1.jpg',
    delay: 'reveal-delay-1',
  },
  {
    title: 'Za vse, ki želite lastno kreacijo',
    text: 'Le pomislimo, kako se počutimo ob raznih dogodkih, obletnicah mature, polnih jubilejih, ... kaj vse nam takrat roji po mislih? S pogledi zagotovo "ošvrknemo" druge goste.',
    image: '/images/sections/service-2.jpg',
    delay: 'reveal-delay-2',
  },
  {
    title: 'Elegantno, drzno, klasično, športno, poslovno',
    text: 'Šivanje po meri je tisti stavek, ki ga jemljemo skrajno resno. Bodisi, da potrebujete elegantno obleko, drzno, klasično, poslovno ali casual, smo mi pravi naslov za vas.',
    image: '/images/sections/service-3.jpg',
    delay: 'reveal-delay-3',
  },
]

export default function SivanjeSection() {
  const heading = useReveal()
  const cards = useReveal(0.08)

  return (
    <section className="sivanje-section">
      <div className="sivanje-hero">
        <div className="sivanje-hero-overlay" />
        <div
          className={`sivanje-hero-content reveal${heading.visible ? ' visible' : ''}`}
          ref={heading.ref}
        >
          <div className="gold-rule" />
          <h2 className="sivanje-title">Šivanje po meri</h2>
          <p className="sivanje-subtitle">
            Želite biti lepe/i ob vaši svečani priložnosti, poroki, birmi,
            obhajilu, maturantskem plesu, obletnici,&nbsp;..
          </p>
        </div>
      </div>

      <div className="sivanje-cards-wrap section-inner">
        <div
          className={`sivanje-cards reveal${cards.visible ? ' visible' : ''}`}
          ref={cards.ref}
        >
          {services.map((svc, i) => (
            <article key={i} className={`service-card ${svc.delay}`}>
              <div className="service-card-img">
                <img
                  src={svc.image}
                  alt={svc.title}
                  loading="lazy"
                  onError={e => {
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('placeholder')
                  }}
                />
              </div>
              <div className="service-card-body">
                <h3 className="service-card-title">{svc.title}</h3>
                <p className="service-card-text">{svc.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
