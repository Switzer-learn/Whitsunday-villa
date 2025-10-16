"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function DesignSection() {
  const features = [
    {
      image: "/images/travertine-bath.webp",
      title: "Travertine Ensuite",
      caption: "Natural textures meet modern luxury in the villa's spa-inspired bathrooms."
    },
    {
      image: "/images/ocean-view-bath.webp",
      title: "Ocean-View Bath",
      caption: "A signature bath experience framed by panoramic Coral Sea views."
    },
    {
      image: "/images/heated-pool.webp",
      title: "Heated Pool",
      caption: "A 10-metre private pool, warmed for year-round enjoyment."
    }
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="font-montserrat text-4xl md:text-5xl font-semibold text-[#5E5E5E] mb-6">
            Architectural Serenity
          </h2>
          <p className="font-inter text-base md:text-lg leading-relaxed text-[#5E5E5E] max-w-4xl mx-auto">
            Every element of CoralAir Whitsundays is crafted for comfort and aesthetic harmony. Natural stone, travertine, and expansive glass create a dialogue between architecture and the sea.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="overflow-hidden border border-transparent hover:border-[#CBB489] rounded-xl"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={256}
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#5E5E5E]">{item.title}</h3>
                <p className="text-sm text-[#5E5E5E]">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}