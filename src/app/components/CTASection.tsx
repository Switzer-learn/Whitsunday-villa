"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="bg-[#121212] text-white text-center py-24" id='cta'>
      <motion.p
        className="text-2xl md:text-4xl font-playfair italic"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Your Whitsundays story begins where the sea meets the sky.
      </motion.p>
      <div className='flex mx-auto gap-5 justify-center'>
        <Link
          href="#availability"
          className="mt-8 inline-block border border-[#CBB489] px-8 py-4 hover:bg-[#CBB489] hover:text-black transition"
        >
          Request Availability
        </Link>
        <Link
          href='https://wa.me/62895351011860'
          className="mt-8 inline-block border border-[#CBB489] px-8 py-4 hover:bg-green-500 hover:text-white transition">
          Whatsapp Us for Booking
        </Link>
      </div>

    </section>
  );
}