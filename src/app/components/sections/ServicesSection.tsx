"use client";

import { motion } from "framer-motion";
import { Scissors, Shirt, ShirtIcon, WashingMachine } from "lucide-react";
import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      title: "Ropa de Hogar",
      icon: <WashingMachine className="h-8 w-8 text-[#d4b897]" />,
      image: "/s1.jpg",
      items: ["Edredons", "Mantes", "Fundes de sofà", "Cortines"],
    },
    {
      title: "Ropa de Vestir",
      icon: <Shirt className="h-8 w-8 text-[#d4b897]" />,
      image: "/s2.jpg",
      items: [
        "Anoracs",
        "Pantalons",
        "Vestits d'home i de dona",
        "Vestits de nuvi i de núvia",
      ],
    },
    {
      title: "Accesorios",
      icon: <Scissors className="h-8 w-8 text-[#d4b897]" />,
      image: "/s3-1.jpg",
      items: [
        "Sabates",
        "Bolsos",
        "Camises i bruses",
        "Jerseis de llana i sintètics",
      ],
    },
    {
      title: "Servicios Especiales",
      icon: <ShirtIcon className="h-8 w-8 text-[#d4b897]" />,
      image: "/s4.jpg",
      items: [
        "Tenyit de roba",
        "Servei de bugaderia per a empreses i particulars",
      ],
    },
  ];

  // Variantes de animación para el contenedor (stagger) y cada tarjeta
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="py-24 bg-[#d4b897]/5">
      <div className="container mx-auto px-4">
        {/* Encabezado de la sección */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-black mb-4">
            Els Nostres Serveis
          </h2>
          <div className="w-24 h-1 bg-[#d4b897] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Cuidamos tu ropa con la atención y profesionalidad que merece
          </p>
        </motion.div>

        {/* Grid de tarjetas */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              // Añadimos "group" para que los children puedan usar group-hover
              className="group flex flex-col bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              {/* Imagen superior */}
              <div className="relative h-50">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Contenido principal de la tarjeta */}
              <div className="p-5 flex-1">
                <div className="flex items-center gap-5">
                  {/* Contenedor del icono con fondo sutil */}
                  <div className="w-14 h-14 flex items-center justify-center bg-[#d4b897]/10 rounded-full mb-3">
                    {service.icon}
                  </div>

                  {/* Título con transition-colors y group-hover */}
                  <h3 className="text-xl font-bold text-black mb-4 transition-colors duration-300 group-hover:text-[#d4b897]">
                    {service.title}
                  </h3>
                </div>

                {/* Lista de servicios */}
                <ul className="space-y-2 text-gray-700">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#d4b897] rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
