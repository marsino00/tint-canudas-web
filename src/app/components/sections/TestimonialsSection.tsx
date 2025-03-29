"use client";

import { getEntries } from "@/app/lib/contentful";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

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

  const testimonialLoop =
    testimonials.length > 0 ? [...testimonials, ...testimonials] : [];

  return (
    <section
      id="testimonials"
      className="py-24 bg-[#d4b897]/5 relative scroll-mt-15"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-black mb-4">
            {t("navbar.testimonials") || "Testimonis"}
          </h2>
          <div className="w-24 h-1 bg-[#d4b897] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">{t("testimonials-desc")}</p>
        </motion.div>

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
                key={`${testimonial.sys.id}-${index}`}
                className="min-w-[300px] bg-white p-6 shadow-lg rounded-lg flex flex-col justify-between hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex justify-center mb-4 text-[#d4b897]">
                  {Array.from({ length: testimonial.fields.stars }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        fill="currentColor"
                        stroke="currentColor"
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    )
                  )}
                </div>
                <p className="text-gray-700 italic mb-4">
                  “{testimonial.fields.opinion}”
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
