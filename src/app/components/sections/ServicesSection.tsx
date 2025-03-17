"use client";

import { getEntries } from "@/app/lib/contentful";
import { motion } from "framer-motion";
import { Scissors, Shirt, ShirtIcon, WashingMachine } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useEffect, JSX } from "react";
import { ContentfulImage } from "@/app/types/data"; // Asegúrate de tener este tipo definido

export type ServiceData = {
  fields: {
    title: string;
    servicesList: string[];
    icon: string;
    serviceImage: ContentfulImage; // Nuevo campo
  };
  sys: {
    id: string;
  };
};

export default function ServicesSection() {
  const t = useTranslations();
  const selectedLocale = useLocale();
  const [data, setData] = useState<ServiceData[]>([]);

  useEffect(() => {
    async function fetchServicesData() {
      const entries = await getEntries({
        content_type: "servicesSection",
        locale: selectedLocale,
      });
      const mappedData = entries.map((item) => ({
        fields: {
          title: item.fields.title as string,
          servicesList: item.fields.servicesList as string[],
          icon: item.fields.icon as string,
          serviceImage: item.fields.serviceImage as ContentfulImage,
        },
        sys: {
          id: item.sys.id,
        },
      }));
      setData(mappedData);
    }
    fetchServicesData();
  }, [selectedLocale]);

  const iconMap: Record<string, JSX.Element> = {
    WashingMachine: <WashingMachine className="h-8 w-8 text-[#d4b897]" />,
    Shirt: <Shirt className="h-8 w-8 text-[#d4b897]" />,
    Scissors: <Scissors className="h-8 w-8 text-[#d4b897]" />,
    ShirtIcon: <ShirtIcon className="h-8 w-8 text-[#d4b897]" />,
  };

  const imageMap: Record<string, string> = {
    "Roba de la Llar": "/s1.jpg",
    "Roba de Vestir": "/s2.jpg",
    Accessoris: "/s3.jpg",
    "Serveis Especials": "/s4.jpg",
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="py-24 bg-[#d4b897]/5 scroll-mt-10">
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
            {t("navbar.services")}
          </h2>
          <div className="w-24 h-1 bg-[#d4b897] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">{t("services-desc")}</p>
        </motion.div>

        {/* Grid de tarjetas */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {data.map((service) => {
            // Construimos la URL de la imagen si existe en serviceImage; de lo contrario, usamos el fallback
            const imageSrc = service.fields.serviceImage?.fields?.file?.url
              ? `https:${service.fields.serviceImage.fields.file.url}`
              : imageMap[service.fields.title.trim()] || "/default.jpg";

            return (
              <motion.div
                key={service.sys.id}
                className="group flex flex-col bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
              >
                {/* Imagen superior */}
                <div className="relative h-50">
                  <Image
                    src={imageSrc}
                    alt={service.fields.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Contenido de la tarjeta */}
                <div className="p-5 flex-1">
                  <div className="flex items-center gap-5">
                    {/* Contenedor del icono */}
                    <div className="w-14 h-14 flex items-center justify-center bg-[#d4b897]/10 rounded-full mb-3">
                      {iconMap[service.fields.icon] || null}
                    </div>
                    {/* Título */}
                    <h3 className="text-xl font-bold text-black mb-4 transition-colors duration-300 group-hover:text-[#d4b897]">
                      {service.fields.title}
                    </h3>
                  </div>
                  {/* Lista de servicios */}
                  <ul className="space-y-2 text-gray-700">
                    {service.fields.servicesList.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-[#d4b897] rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
