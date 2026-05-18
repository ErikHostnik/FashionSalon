import './CarouselStrip.css'

const CAROUSEL_IMAGES = [
  { src: '/images/carousel/dress-1.jpg', alt: 'Elegantna obleka po meri' },
  { src: '/images/carousel/dress-2.jpg', alt: 'Večerna obleka' },
  { src: '/images/carousel/dress-3.jpg', alt: 'Maturantska obleka' },
  { src: '/images/carousel/dress-4.jpg', alt: 'Poročna obleka' },
  { src: '/images/carousel/dress-5.jpg', alt: 'Koktejlna obleka' },
  { src: '/images/carousel/dress-6.jpg', alt: 'Posebna kreacija' },
  { src: '/images/carousel/dress-7.jpg', alt: 'Obleka po meri' },
  { src: '/images/carousel/dress-8.jpg', alt: 'Modna kreacija' },
]

export default function CarouselStrip({ speed = 40 }) {
  const items = [...CAROUSEL_IMAGES, ...CAROUSEL_IMAGES]

  return (
    <div className="carousel-strip" aria-hidden="true">
      <div
        className="carousel-track"
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((img, i) => (
          <div key={i} className="carousel-item">
            <img
              src={img.src}
              alt={img.alt}
              loading={i < 4 ? 'eager' : 'lazy'}
              onError={e => {
                e.target.style.display = 'none'
                e.target.parentElement.classList.add('placeholder')
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
