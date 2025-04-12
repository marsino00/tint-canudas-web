"use client";

import { getEntries } from "@/app/lib/contentful";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AboutSectionEntry, ContentfulImage } from "@/app/types/data";

export default function AboutSection() {
  const t = useTranslations();
  const selectedLocale = useLocale();
  const [data, setData] = useState<AboutSectionEntry[]>([]);

  useEffect(() => {
    async function fetchWhyData() {
      try {
        const entries = await getEntries({
          content_type: "aboutSection",
          locale: selectedLocale,
        });

        const mappedData = entries.map((item) => ({
          fields: {
            aboutText: item.fields.aboutText as string,
            aboutText2: item.fields.aboutText2 as string,
            aboutImage: item.fields.aboutImage as ContentfulImage,
          },
          sys: {
            id: item.sys.id,
          },
        }));
        setData(mappedData);
      } catch (error) {
        console.error("Error fetching why section data:", error);
      }
    }
    fetchWhyData();
  }, [selectedLocale]);

  const imageUrl = data[0]?.fields?.aboutImage?.fields?.file?.url
    ? `https:${data[0].fields.aboutImage.fields.file.url}`
    : "/jerseis2.jpg";

  return (
    <section id="about" className="py-24 bg-white scroll-mt-15">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
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
              {data[0]?.fields?.aboutText ?? "Cargando..."}
            </motion.p>
            <motion.p
              className="text-lg leading-relaxed mb-6 text-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {data[0]?.fields?.aboutText2 ?? "Cargando..."}
            </motion.p>
          </motion.div>

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
                src={imageUrl}
                alt="Nuestra historia"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
