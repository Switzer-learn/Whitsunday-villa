"use client"
import { motion } from 'framer-motion';

const galleryImages = [
  {
    src: '/images/hero-villa.webp',
    alt: 'Aerial view of CoralAir Whitsundays luxury villa surrounded by tropical landscape'
  },
  {
    src: '/images/ocean-balcony.webp',
    alt: 'Private balcony overlooking the pristine ocean waters'
  },
  {
    src: '/images/heated-pool.webp',
    alt: 'Heated infinity pool with stunning ocean backdrop'
  },
  {
    src: '/images/luxury-bedroom.webp',
    alt: 'Master bedroom with panoramic ocean views and premium furnishings'
  },
  {
    src: '/images/travertine-bath.webp',
    alt: 'Luxurious travertine bathroom with modern fixtures and ocean views'
  },
  {
    src: '/images/villa-exterior.webp',
    alt: 'Stunning exterior architecture of the luxury villa'
  },
  {
    src: '/images/heart-reef.webp',
    alt: 'Aerial view of the famous Heart Reef in the Great Barrier Reef'
  },
  {
    src:'/images/media-room.webp',
    alt:'media room'
  },
  {
    src:'/images/billiard-room.webp',
    alt:'billiard room'
  }
];

export default function GallerySection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto bg-[#FAF6F1]" id='gallery'>
      <h2 className="text-4xl font-montserrat mb-10">See the Beauty</h2>
      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {galleryImages.map((image) => (
          <motion.img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className="rounded-xl object-cover w-full"
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        ))}
      </div>
    </section>
  );
}