"use client"
import { motion } from 'framer-motion';

export default function AirSection() {
  return (
    <section className="relative py-40 text-center text-white bg-[url('/images/heart-reef.webp')] bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-black/50" />
      <motion.h2
        className="relative z-10 text-3xl md:text-5xl font-playfair italic text-[#CBB489]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        The ultimate Whitsundays perspective — from above.
      </motion.h2>
    </section>
  );
}