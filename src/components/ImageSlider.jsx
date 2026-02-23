import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ImageSlider({ images, alt, size = 'default' }) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1))

  const sizeClasses = {
    default: 'max-w-[300px] aspect-[9/17]',
    sm: 'max-w-[240px] aspect-[9/17]',
  }

  return (
    <div className={`relative w-full ${sizeClasses[size] || sizeClasses.default} mx-auto overflow-hidden rounded-2xl bg-black/40`}>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`${alt} screenshot ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          loading="lazy"
        />
      ))}

      <button
        onClick={prev}
        className="absolute z-20 left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/80 transition-all"
        aria-label="Previous image"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        onClick={next}
        className="absolute z-20 right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/80 transition-all"
        aria-label="Next image"
      >
        <ChevronRight size={16} />
      </button>

      <div className="absolute z-20 bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current
                ? 'bg-white w-5'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
