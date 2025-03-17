"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Leaf, Sparkles, Star } from "lucide-react";
import { useTranslations } from "next-intl";

export default function WhySection() {
  const t = useTranslations();

  const features = [
    {
      icon: <BadgeCheck className="h-12 w-12 text-[#d4b897]" />,
      title: "Calidad Garantizada",
      description: "Cuidamos cada prenda con la máxima atención al detalle",
    },
    {
      icon: <Sparkles className="h-12 w-12 text-[#d4b897]" />,
      title: "Tecnología Avanzada",
      description:
        "Utilizamos las últimas tecnologías en limpieza y cuidado textil",
    },
    {
      icon: <Leaf className="h-12 w-12 text-[#d4b897]" />,
      title: "Eco-Friendly",
      description:
        "Comprometidos con el medio ambiente usando productos biodegradables",
    },
    {
      icon: <Star className="h-12 w-12 text-[#d4b897]" />,
      title: "Experiencia",
      description: "Más de 20 años de experiencia en el sector",
    },
  ];

  // Variantes para animar el contenedor y cada tarjeta
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="why-choose-us" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            className="text-4xl font-bold text-black mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {t("navbar.why-choose-us")}
          </motion.h2>
          <div className="w-24 h-1 bg-[#d4b897] mx-auto mb-6"></div>
          <motion.p
            className="text-xl text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Descobreix per què la nostra dedicació i qualitat ens diferencien.
          </motion.p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-lg shadow-lg transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
