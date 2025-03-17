"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";
import { Instagram } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center"
    >
      <Image
        src="/jerseis.jpg"
        alt="Tintorería Canudas"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <motion.div
        className="relative text-center max-w-3xl px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          Tintoreria Canudas
        </motion.h1>

        <motion.p
          className="text-xl md:text-3xl text-white/90 font-light mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          {/* Nuestra tintorería, tu tranquilidad */}
          La nostra tintoreria, la teva tranquil•litat
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <Button
            size="lg"
            className="bg-[#d4b897] text-black hover:bg-[#c5a988] px-8 py-6 text-lg transition-all duration-300"
          >
            <a href="#contact">Contacta&apos;ns</a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg transition-all duration-300"
          >
            <a
              href="https://www.instagram.com/tintoreriacanudas/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Segueix-nos a Instagram
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
