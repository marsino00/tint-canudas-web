"use client";

import { getEntries } from "@/app/lib/contentful";
import { motion } from "framer-motion";
import { BadgeCheck, Leaf, Sparkles, Star } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState, useEffect, JSX } from "react";

// Definición de tipo para los datos de la sección Why
export type WhyData = {
  fields: {
    title: string;
    description: string; // mapeado desde "desc"
    icon: string; // nombre del icono, por ejemplo, "BadgeCheck"
  };
  sys: {
    id: string;
  };
};

export default function WhySection() {
  const t = useTranslations();
  const selectedLocale = useLocale();
  const [data, setData] = useState<WhyData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWhyData() {
      try {
        const entries = await getEntries({
          content_type: "whySection",
          locale: selectedLocale,
        });
        const mappedData = entries.map((item) => ({
          fields: {
            title: item.fields.title as string,
            description: item.fields.desc as string, // usamos "desc" para la descripción
            icon: item.fields.icon as string,
          },
          sys: {
            id: item.sys.id,
          },
        }));
        setData(mappedData);
      } catch (error) {
        console.error("Error fetching why section data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchWhyData();
  }, [selectedLocale]);

  // Mapeo de iconos: asocia el nombre recibido con el componente correspondiente
  const iconMap: Record<string, JSX.Element> = {
    BadgeCheck: <BadgeCheck className="h-12 w-12 text-[#d4b897]" />,
    Sparkles: <Sparkles className="h-12 w-12 text-[#d4b897]" />,
    Leaf: <Leaf className="h-12 w-12 text-[#d4b897]" />,
    Star: <Star className="h-12 w-12 text-[#d4b897]" />,
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (loading) {
    return (
      <section id="why-choose-us" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl text-gray-600">Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="why-choose-us" className="py-16 bg-white scroll-mt-14">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            className="text-4xl font-bold text-black mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {t("navbar.why-choose-us") || "Per què escollir-nos?"}
          </motion.h2>
          <div className="w-24 h-1 bg-[#d4b897] mx-auto mb-6"></div>
          <motion.p
            className="text-xl text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t("why-desc")}
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {data.length > 0 ? (
            data.map((feature) => (
              <motion.div
                key={feature.sys.id}
                className="text-center p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex justify-center mb-4">
                  {iconMap[feature.fields.icon] || null}
                </div>
                <h2 className="text-xl font-semibold mb-2">
                  {feature.fields.title}
                </h2>
                <p className="text-gray-600">{feature.fields.description}</p>
              </motion.div>
            ))
          ) : (
            <motion.div
              className="col-span-full text-center text-gray-600"
              variants={itemVariants}
            >
              No hi ha dades disponibles.
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
