"use client";

import { getEntries } from "@/app/lib/contentful";
import { motion } from "framer-motion";
import { Scissors, Shirt, ShirtIcon, WashingMachine } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useEffect, JSX } from "react";
import { ContentfulImage } from "@/app/types/data";

export type ServiceData = {
  fields: {
    title: string;
    servicesList: string[];
    icon: string;
    serviceImage: ContentfulImage;
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
        {/* ... (Título de la sección) ... */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          // ... (props de motion) ...
        >
          {data.map((service) => {
            const imageSrc = /* ... tu lógica para imageSrc ... */ "";
            // Intenta obtener una descripción de Contentful para la imagen, si no, usa el título
            const imageAlt =
              service.fields.serviceImage?.fields?.description ||
              service.fields.serviceImage?.fields?.title ||
              service.fields.title; // <-- MEJORA: Si el título no describe la IMAGEN, añade un alt más específico aquí o en Contentful

            return (
              <motion.div
                key={service.sys.id}
                className="group flex flex-col bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                // ... (props de motion) ...
              >
                <div className="relative h-[250px]">
                  <Image
                    src={imageSrc}
                    // alt={service.fields.title} // <-- ANTES (Podría ser insuficiente)
                    alt={imageAlt} // <-- DESPUÉS (Prioriza descripción, fallback a título)
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-5 flex-1">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 flex items-center justify-center bg-[#d4b897]/10 rounded-full mb-3">
                      {/* Añadimos aria-hidden a los iconos decorativos */}
                      {React.cloneElement(
                        iconMap[service.fields.icon] || (
                          <ShirtIcon className="h-8 w-8 text-[#d4b897]" />
                        ),
                        { "aria-hidden": true }
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-black mb-4 transition-colors duration-300 group-hover:text-[#d4b897]">
                      {service.fields.title}
                    </h3>
                  </div>
                  {/* ... (ul de servicios) ... */}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
