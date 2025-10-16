"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

export default function LocationSection() {
  const travelTimes = [
    {
      location: "Port of Airlie",
      time: "3 min"
    },
    {
      location: "Coral Sea Marina",
      time: "7 min"
    },
    {
      location: "Whitsunday Airport",
      time: "8 min"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="bg-[#FAF6F1]" id='location'>
      <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto py-32 px-6">
        {/* Map Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/coralair-location-map.webp"
              alt="CoralAir Whitsundays location map showing proximity to Port of Airlie Marina, Coral Sea Marina, and Whitsunday Airport"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="space-y-8">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="font-montserrat text-4xl md:text-5xl font-semibold tracking-tight text-[#5E5E5E]"
          >
            Perfectly Placed in the Heart of the Whitsundays
          </motion.h2>

          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="font-inter text-lg leading-relaxed text-[#5E5E5E]"
          >
            CoralAir Whitsundays is less than one kilometre from Port of Airlie Marina — your launch point to the Great Barrier Reef and the 74 tropical islands. The property offers the rare balance of privacy and proximity: a hidden sanctuary within easy reach of every adventure.
          </motion.p>

          {/* Travel Time Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-3 gap-4"
          >
            {travelTimes.map((item) => (
              <motion.div
                key={item.location}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }
                  }
                }}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                className="bg-white rounded-lg border border-[#CBB489]/20 p-6 text-center hover:border-[#CBB489]/40 transition-colors"
              >
                <div className="flex items-center justify-center w-8 h-8 mx-auto mb-3">
                  <MapPin className="w-5 h-5 text-[#CBB489]" />
                </div>
                <h3 className="font-montserrat text-sm font-semibold text-[#5E5E5E] mb-1">
                  {item.location}
                </h3>
                <p className="font-inter text-sm text-[#5E5E5E]">
                  {item.time}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              transition: {
                duration: 0.2,
                ease: "easeOut"
              }
            }}
            whileTap={{
              scale: 0.95
            }}
            className="inline-flex items-center px-6 py-3 border border-[#CBB489] text-[#CBB489] hover:bg-[#CBB489] hover:text-white transition-colors duration-300 font-inter text-sm font-medium rounded-lg"
          >
            View on Map
          </motion.button>
        </div>
      </div>
    </section>
  );
}