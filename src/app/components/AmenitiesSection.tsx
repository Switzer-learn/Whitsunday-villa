"use client"
import { motion } from 'framer-motion';

export default function AmenitiesSection() {
  const amenities = [
    {
      title: "Heated Pool",
      desc: "Swim in comfort, day or night."
    },
    {
      title: "Ocean-View Bath",
      desc: "A private moment with a view."
    },
    {
      title: "Tennis Court",
      desc: "Play surrounded by tropical greenery."
    },
    {
      title: "Media Room",
      desc: "Dedicated projector room for family nights."
    },
    {
      title: "Gourmet Kitchen",
      desc: "Quartz benchtops, gas cooktop, and modern design."
    },
    {
      title: "Balcony Lounge",
      desc: "Unwind with a sunset and Coral Sea breeze."
    }
  ];

  return (
    <section className="py-24 overflow-x-auto scroll-smooth scroll-snap-x mandatory px-6">
      <div className="grid md:grid-cols-3 gap-6 min-w-max grid-cols-1">
        {amenities.map((amenity) => (
          <motion.div
            key={amenity.title}
            className="scroll-snap-center min-w-[250px] bg-white p-6 rounded-xl shadow-sm"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl text-[#CBB489] font-semibold">{amenity.title}</h3>
            <p className="text-sm text-[#5E5E5E] italic">{amenity.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}