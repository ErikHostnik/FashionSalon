import { useReveal } from '../hooks/useReveal'
import './HeritageSection.css'

export default function HeritageSection() {
  const { ref, visible } = useReveal(0.15)

  return (
    <section className="heritage-section" aria-labelledby="heritage-heading">
      <div className="heritage-bg" aria-hidden="true" />
      <div className="heritage-overlay" aria-hidden="true" />

      <div
        className={`heritage-content reveal${visible ? ' visible' : ''}`}
        ref={ref}
      >
        <div className="gold-rule" style={{ margin: '0 auto 1.5rem' }} />
        <h2 className="heritage-title" id="heritage-heading">
          V modnem svetu že od leta 1997
        </h2>
        <p className="heritage-text">
          Ne razmišljamo le o obleki, temveč o celostni podobi.
          <br />
          Kakšen stil oblačil vam pristoji glede na vaš karakter, vašo postavo, katera barva,&nbsp;...
          <br />
          svetujemo vam tudi kakšno držo postaviti, da bi vas kamera ujela v najlepšem trenutku.
          <br />
          Pomembne so nam le zadovoljne stranke.
        </p>
        <p className="heritage-hours">Delovni čas: po dogovoru</p>
        <a href="mailto:modnisalonrenate@gmail.com" className="heritage-cta">
          Kontaktirajte nas
        </a>
      </div>
    </section>
  )
}
