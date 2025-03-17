"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

export default function TestimonialSection() {
  const t = useTranslations();
  const testimonials = [
    {
      name: "Marta",
      comment:
        "Excelente servicio, mi ropa quedó impecable. ¡Repetiré sin duda!",
    },
    {
      name: "Carlos",
      comment:
        "Trato muy profesional y cercano. Se nota la experiencia del equipo.",
    },
    {
      name: "Laura",
      comment: "Respetuosos con el medio ambiente y con un resultado perfecto.",
    },
    {
      name: "Juan",
      comment: "La calidad y rapidez son insuperables. Muy recomendable.",
    },
    {
      name: "Ana",
      comment:
        "Atención impecable, siempre confío en ellos para mi ropa más delicada.",
    },
  ];

  const testimonialLoop = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 bg-[#d4b897]/5 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-black mb-4">
            {t("navbar.testimonials")}
          </h2>
          <div className="w-24 h-1 bg-[#d4b897] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            El que opinen els nostres clients sobre nosaltres
          </p>
        </motion.div>

        {/* Contenedor del slider */}
        <div className="overflow-hidden">
          <motion.div
            className="flex space-x-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {testimonialLoop.map((testimonial, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] bg-white p-6 shadow-lg rounded-lg flex flex-col justify-between hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.03 }}
              >
                {/* Fila de 5 estrellas filled */}
                <div className="flex justify-center mb-4 text-[#d4b897]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      fill="currentColor"
                      stroke="none"
                      className="h-5 w-5"
                    />
                  ))}
                </div>
                {/* Comentario */}
                <p className="text-gray-700 italic mb-4">
                  “{testimonial.comment}”
                </p>
                {/* Nombre */}
                <h4 className="mt-auto font-semibold text-black text-center">
                  — {testimonial.name}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
