import { useReveal } from '../hooks/useReveal'
import './GallerySection.css'

const GALLERY_IMAGES = [
  { src: '/images/gallery/g-1.jpg', alt: 'Kreacija 1' },
  { src: '/images/gallery/g-2.jpg', alt: 'Kreacija 2' },
  { src: '/images/gallery/g-3.jpg', alt: 'Kreacija 3' },
  { src: '/images/gallery/g-4.jpg', alt: 'Kreacija 4' },
  { src: '/images/gallery/g-5.jpg', alt: 'Kreacija 5' },
  { src: '/images/gallery/g-6.jpg', alt: 'Kreacija 6' },
  { src: '/images/gallery/g-7.jpg', alt: 'Kreacija 7' },
  { src: '/images/gallery/g-8.jpg', alt: 'Kreacija 8' },
  { src: '/images/gallery/g-9.jpg', alt: 'Kreacija 9' },
  { src: '/images/gallery/g-10.jpg', alt: 'Kreacija 10' },
]

export default function GallerySection() {
  const heading = useReveal()
  const items = [...GALLERY_IMAGES, ...GALLERY_IMAGES]

  return (
    <section className="gallery-section" aria-labelledby="gallery-heading">
      <div
        className={`gallery-heading reveal${heading.visible ? ' visible' : ''}`}
        ref={heading.ref}
      >
        <div className="gold-rule" style={{ margin: '0 auto 1.5rem' }} />
        <h2 className="gallery-title" id="gallery-heading">Galerija slik</h2>
      </div>

      <div className="gallery-strip" aria-label="Galerija oblačil po meri">
        <div className="gallery-track">
          {items.map((img, i) => (
            <div key={i} className="gallery-item">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                onError={e => {
                  e.target.style.display = 'none'
                  e.target.parentElement.classList.add('placeholder')
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
