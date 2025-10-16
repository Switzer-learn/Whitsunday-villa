"use client"
import { motion } from 'framer-motion';
import { Montserrat, Playfair, Cinzel_Decorative } from 'next/font/google';

const montserrat = Montserrat({

  weight: ['100', '400', '700', '900'],
  subsets: ['latin'],

})

const cinzelDecorative = Cinzel_Decorative({
  weight: ['400', '700', '900'],
  subsets: ['latin']

})

const playfair = Playfair({
  weight: [
    '400', '700', '900'
  ],
  subsets: ['latin']
})


export default function HeroSection() {
  return (
    <section
      className="relative py-10 h-screen flex flex-col text-center text-white overflow-hidden"
      role="banner"
      aria-label="CoralAir Whitsundays Hero Section"
      id='home'
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-villa.webp"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/videos/hero-videos.mp4" type="video/mp4" />
      </video>

      {/* Content Container */}
      <div className="flex flex-col justify-between h-full w-full bg-gradient-to-b from-blue-200/70 to-transparent py-10 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <div className='flex flex-col'>
            {/* Main Headline */}
            <motion.h1
              className={`text-xl md:text-4xl ${cinzelDecorative.className} font-semibold leading-tight tracking-tight`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              CoralAir
            </motion.h1>
            <motion.h1
              className={`text-lg md:text-2xl ${montserrat.className} font-semibold tracking-widest`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              WHITSUNDAY
            </motion.h1>
          </div>



          {/* Subheadline */}
          <motion.p
            className={`text-lg md:text-2xl ${playfair.className} italic leading-relaxed`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            A sanctuary above the sea
          </motion.p>
        </div>
        {/* CTA Button */}
        <motion.a
          href="#availability"
          className="mx-auto w-60 backdrop-blur-3xl inline-block rounded-xl bg-white/10 px-6 py-3 text-lg font-medium tracking-wide hover:bg-[#CBB489] hover:text-[#121212] hover:scale-105 transition-all duration-300 ease-out"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2, ease: "easeOut" }
          }}
          whileTap={{ scale: 0.95 }}
          aria-label="Request availability for CoralAir Whitsundays"
        >
          Request Availability
        </motion.a>

      </div>


      {/* Bottom Indicator */}
      <motion.div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm tracking-wide text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        Begin the Journey ↓
      </motion.div>
    </section>
  );
}