"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";
import { Instagram } from "lucide-react";
import { getEntries } from "@/app/lib/contentful";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { ContentfulImage, HeroData } from "@/app/types/data";

export default function HeroSection() {
  const t = useTranslations();
  const selectedLocale = useLocale();
  const [data, setData] = useState<HeroData[]>([]);

  useEffect(() => {
    async function fetchHeroData() {
      const entries = await getEntries({
        content_type: "heroSection",
        locale: selectedLocale,
      });

      const mappedProducts = entries.map((item) => ({
        fields: {
          title: item.fields.title as string,
          heroImage: item.fields.heroImage as ContentfulImage,
          subtitle: item.fields.subtitle as string,
        },
        sys: {
          id: item.sys.id,
        },
      }));
      setData(mappedProducts);
    }

    fetchHeroData();
  }, [selectedLocale]);

  const imageUrl = data[0]?.fields?.heroImage?.fields?.file?.url
    ? `https:${data[0].fields.heroImage.fields.file.url}`
    : "/jerseis.jpg";

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center"
    >
      <Image
        src={imageUrl}
        alt="Ropa limpia y cuidadosamente doblada en Tintorería Canudas"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/60"></div>

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
          {data[0]?.fields?.title ?? "Cargando..."}
        </motion.h1>

        <motion.p
          className="text-xl md:text-3xl text-white/90 font-light mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          {data[0]?.fields?.subtitle ?? "Cargando..."}
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
            <a href="#contact">{t("navbar.contact")}</a>
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
              <Instagram className="mr-2 h-5 w-5" aria-hidden="true" />
              {t("follow")}
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
