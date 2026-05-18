import { useEffect, useState } from 'react'
import CarouselStrip from '../components/CarouselStrip'
import SivanjeSection from '../components/SivanjeSection'
import HeritageSection from '../components/HeritageSection'
import GallerySection from '../components/GallerySection'
import './Home.css'

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <section className="hero-section" aria-labelledby="hero-heading">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-overlay" aria-hidden="true" />

        <div className="hero-content">
          <p className={`hero-eyebrow${loaded ? ' visible' : ''}`}>
            Renata Pečnik s.p.
          </p>
          <h1
            className={`hero-title${loaded ? ' visible' : ''}`}
            id="hero-heading"
          >
            Modni salon<br />
            <em>Renate</em>
          </h1>
          <p className={`hero-subtitle${loaded ? ' visible' : ''}`}>
            Tudi Vi boste zasijali v najlepši luči
          </p>
          <a
            href="#sivanje"
            className={`hero-cta${loaded ? ' visible' : ''}`}
          >
            Spoznajte nas
          </a>
        </div>

        <div className={`hero-scroll-hint${loaded ? ' visible' : ''}`} aria-hidden="true">
          <span />
        </div>
      </section>

      <div id="sivanje">
        <CarouselStrip speed={38} />
      </div>

      <SivanjeSection />
      <HeritageSection />
      <GallerySection />
    </>
  )
}
