"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutSection() {
  const t = useTranslations();
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Columna de texto */}
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl font-bold mb-6 text-black"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t("navbar.about")}
            </motion.h2>
            <div className="w-24 h-1 bg-[#d4b897] mb-8"></div>
            <motion.p
              className="text-lg leading-relaxed mb-6 text-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Situada en el corazón de Navarcles, Barcelona, Tintorería Canudas
              se ha consolidado como un referente indiscutible en el cuidado
              textil de la zona. Nuestro negocio familiar destaca por su enfoque
              meticuloso y compromiso con la excelencia, ofreciendo tratamientos
              de limpieza excepcionales para sus prendas más preciadas.
            </motion.p>
            <motion.p
              className="text-lg leading-relaxed mb-6 text-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Lo que nos diferencia es nuestro personal altamente capacitado y
              el uso de tecnologías avanzadas en máquinas y productos de
              limpieza. Cada miembro de nuestro equipo está comprometido no solo
              con la limpieza, sino también con el mantenimiento de la
              integridad y longevidad de cada prenda.
            </motion.p>
          </motion.div>

          {/* Columna de imagen */}
          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/jerseis2.jpg"
                alt="Nuestra historia"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
