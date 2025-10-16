"use client"
import { motion } from 'framer-motion';

export default function ExperienceSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto py-32">
      <div className="relative h-[70vh] lg:sticky lg:top-24 overflow-hidden">
        <motion.img
          src="/images/villa-balcony.webp"
          alt="Luxurious villa balcony overlooking the pristine turquoise waters of Airlie Beach with panoramic views of the Coral Sea"
          className="w-full h-full object-cover"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          loading="lazy"
        />
      </div>

      <div className="space-y-6">
        <motion.h2
          className="text-4xl font-montserrat font-semibold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Secluded Tropical Elegance
        </motion.h2>

        <p className="font-playfair italic text-[#CBB489] text-2xl">
          &quot;Where every sunrise feels entirely your own.&quot;
        </p>

        <p className="text-lg text-[#5E5E5E] leading-relaxed">
          Nestled in private acreage, CoralAir offers a tranquil escape with panoramic Coral Sea views and the freedom to unwind in complete privacy.
        </p>
      </div>
    </section>
  );
}