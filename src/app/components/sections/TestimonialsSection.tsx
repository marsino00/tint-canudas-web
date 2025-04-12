"use client";

import { getEntries } from "@/app/lib/contentful";
import { motion, useAnimation } from "framer-motion";
import { Star, Pause, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useState, useRef } from "react";

export type TestimonialData = {
  fields: {
    opinion: string;
    reviewAuthor: string;
    stars: number;
  };
  sys: {
    id: string;
  };
};

export default function TestimonialSection() {
  const t = useTranslations();
  const selectedLocale = useLocale();
  const [testimonials, setTestimonials] = useState<TestimonialData[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const controls = useAnimation();
  const carouselRef = useRef<HTMLDivElement>(null);

  // Referencia para el anuncio de voz
  const liveRegionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchTestimonials() {
      const entries = await getEntries({
        content_type: "testimonialSection",
        locale: selectedLocale,
      });
      const mappedData = entries.map((item) => ({
        fields: {
          opinion: item.fields.opinion as string,
          reviewAuthor: item.fields.reviewAuthor as string,
          stars: item.fields.stars as number,
        },
        sys: {
          id: item.sys.id,
        },
      }));
      setTestimonials(mappedData);
    }
    fetchTestimonials();
  }, [selectedLocale]);

  // Start or pause animation based on isPaused state
  useEffect(() => {
    if (!isPaused && testimonials.length > 0) {
      controls.start({
        x: "-50%",
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        },
      });
    } else {
      controls.stop();
    }
  }, [isPaused, testimonials, controls]);

  // Actualizar región en vivo para anunciar cambios
  useEffect(() => {
    if (testimonials.length > 0 && liveRegionRef.current) {
      const currentTestimonial = testimonials[currentSlideIndex];
      liveRegionRef.current.textContent = `Mostrando testimonio ${
        currentSlideIndex + 1
      } de ${testimonials.length}: ${currentTestimonial.fields.opinion} por ${
        currentTestimonial.fields.reviewAuthor
      }`;
    }
  }, [currentSlideIndex, testimonials]);

  // Detectar prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsPaused(true);
    }

    const handleChange = () => {
      setIsPaused(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const togglePause = () => {
    setIsPaused(!isPaused);
    // Anunciar cambio de estado para lectores de pantalla
    if (liveRegionRef.current) {
      liveRegionRef.current.textContent = !isPaused
        ? "Carrusel pausado"
        : "Carrusel en movimiento";
    }
  };

  const goToPrevSlide = () => {
    if (testimonials.length === 0) return;

    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );

    if (carouselRef.current) {
      const slideWidth = 300 + 32; // slide width + margin
      const newPosition = -(currentSlideIndex * slideWidth);
      controls.set({ x: `${newPosition}px` });
    }
  };

  const goToNextSlide = () => {
    if (testimonials.length === 0) return;

    setCurrentSlideIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );

    if (carouselRef.current) {
      const slideWidth = 300 + 32; // slide width + margin
      const newPosition = -(currentSlideIndex * slideWidth);
      controls.set({ x: `${newPosition}px` });
    }
  };

  // Handle keyboard events
  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case "ArrowLeft":
        goToPrevSlide();
        break;
      case "ArrowRight":
        goToNextSlide();
        break;
      case " ": // Space key
        event.preventDefault(); // Prevent page scroll
        togglePause();
        break;
      default:
        break;
    }
  };

  const testimonialLoop =
    testimonials.length > 0 ? [...testimonials, ...testimonials] : [];

  return (
    <section
      id="testimonials"
      className="py-24 bg-[#d4b897]/5 relative scroll-mt-15"
    >
      {/* Región en vivo para anuncios de accesibilidad */}
      <div
        ref={liveRegionRef}
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      ></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-6"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl font-bold text-black mb-4"
            id="testimonials-heading"
          >
            {t("navbar.testimonials") || "Testimonis"}
          </h2>
          <div className="w-24 h-1 bg-[#d4b897] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">{t("testimonials-desc")}</p>
        </motion.div>

        {/* Carousel controls */}
        <div
          className="flex justify-center gap-4 mb-6"
          role="group"
          aria-label="Controles del carrusel"
        >
          <button
            onClick={goToPrevSlide}
            onKeyDown={handleKeyDown}
            aria-label="Testimonio anterior"
            className="p-2 bg-[#d4b897] text-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d4b897] focus:ring-opacity-100 hover:bg-[#c5a988]"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>
          <button
            onClick={togglePause}
            onKeyDown={handleKeyDown}
            aria-label={isPaused ? "Reanudar carrusel" : "Pausar carrusel"}
            aria-pressed={isPaused}
            className="p-2 bg-[#d4b897] text-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d4b897] focus:ring-opacity-100 hover:bg-[#c5a988]"
          >
            {isPaused ? (
              <Play className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Pause className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
          <button
            onClick={goToNextSlide}
            onKeyDown={handleKeyDown}
            aria-label="Testimonio siguiente"
            className="p-2 bg-[#d4b897] text-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d4b897] focus:ring-opacity-100 hover:bg-[#c5a988]"
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Carousel with testimonials */}
        <div
          className="overflow-hidden"
          role="region"
          aria-roledescription="carrusel"
          aria-label="Testimonios de clientes"
          aria-describedby="testimonials-heading"
          aria-live={isPaused ? "polite" : "off"}
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <motion.div
            ref={carouselRef}
            className="flex space-x-8"
            animate={controls}
            initial={{ x: "0%" }}
          >
            {testimonialLoop.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.sys.id}-${index}`}
                className="min-w-[300px] bg-white p-6 shadow-lg rounded-lg flex flex-col justify-between hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                tabIndex={0}
                role="group"
                aria-roledescription="diapositiva"
                aria-label={`Testimonio ${
                  (index % testimonials.length) + 1
                } de ${testimonials.length}`}
              >
                <div
                  className="flex justify-center mb-4 text-[#d4b897]"
                  aria-label={`Valoración: ${testimonial.fields.stars} de 5 estrellas`}
                >
                  {Array.from({ length: testimonial.fields.stars }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        fill="currentColor"
                        stroke="none"
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    )
                  )}
                  {Array.from({ length: 5 - testimonial.fields.stars }).map(
                    (_, i) => (
                      <Star
                        key={i + testimonial.fields.stars}
                        className="h-5 w-5 text-gray-300"
                        aria-hidden="true"
                      />
                    )
                  )}
                </div>
                <p className="text-gray-700 italic mb-4">
                  &quot;{testimonial.fields.opinion}&quot;
                </p>
                <h4 className="mt-auto font-semibold text-black text-center">
                  — {testimonial.fields.reviewAuthor}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
