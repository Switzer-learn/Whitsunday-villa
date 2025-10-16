"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Montserrat, Lexend_Zetta } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const lexend_zetta = Lexend_Zetta({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const navigationItems = [
  { name: "HOME", href: "#home" },
  { name: "LOCATION", href: "#location" },
  { name: "GALLERY", href: "#gallery" },
  { name: "CONTACT US", href: "#cta" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const heroHeight = window.innerHeight;
      setIsScrolled(scrollTop > heroHeight * 0.1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll logic (with delay for mobile)
  const scrollToSection = (href: string, delay = 0) => {
    const elementId = href.replace("#", "");
    const scrollAction = () => {
      if (elementId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.getElementById(elementId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    };
    if (delay > 0) setTimeout(scrollAction, delay);
    else scrollAction();
  };

  // Scroll spy (active section)
  useEffect(() => {
    const sectionIds = navigationItems.map((item) => item.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: 0.3 }
    );
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled && "bg-white/95 backdrop-blur-md shadow-lg"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 lg:h-20">

          {/* ✅ Desktop Navigation (Restored Original Style) */}
          <div className="hidden md:flex justify-center items-center space-x-8 lg:space-x-12">
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative text-sm lg:text-base font-medium tracking-[1px] transition-all duration-300 hover:scale-105 ${
                  isScrolled
                    ? "text-gray-600 hover:text-gray-800"
                    : "text-blue-300 bg-clip-text hover:text-blue-500 text-shadow-background"
                } ${lexend_zetta.className}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {item.name}

                {/* Active underline (adaptive color) */}
                {activeSection === item.href.replace("#", "") && (
                  <motion.div
                    layoutId="underline"
                    className={`absolute -bottom-2 left-0 right-0 h-[2px] rounded-full ${
                      isScrolled ? "bg-blue-500" : "bg-white"
                    }`}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            className={`md:hidden p-2 rounded-lg ${
              isScrolled
                ? "text-gray-600 hover:bg-gray-100"
                : "text-blue-300 hover:bg-white/10"
            }`}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={isMobileMenuOpen ? "open" : "closed"}
              variants={{
                closed: { rotate: 0 },
                open: { rotate: 180 },
              }}
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
                animate={isMobileMenuOpen ? "open" : "closed"}
                variants={{
                  closed: {
                    d: "M4 6h16M4 12h16M4 18h16",
                  },
                  open: {
                    d: "M6 6l12 12M6 18l12-12",
                  },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.svg>
          </motion.button>
        </div>

        {/* ✅ Mobile Navigation */}
        <motion.div
          className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 mb-4 shadow-lg overflow-hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="px-4 py-3 space-y-3">
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToSection(item.href, 300);
                }}
                className={`block w-full text-left text-sm font-medium tracking-widest transition-all duration-200 ${
                  activeSection === item.href.replace("#", "")
                    ? "text-blue-600"
                    : "text-gray-600"
                } hover:text-blue-600 active:bg-gray-100 active:scale-95 ${montserrat.className}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20,
                }}
                transition={{
                  delay: isMobileMenuOpen ? index * 0.1 : 0,
                  duration: 0.2,
                }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;
