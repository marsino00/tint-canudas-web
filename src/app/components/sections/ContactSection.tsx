"use client";

import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { getEntries } from "@/app/lib/contentful";
import { AlertMessage } from "../ui/AlertMessage";

export interface RichTextNode {
  nodeType: string;
  value?: string;
  marks?: { type: string }[];
  data?: Record<string, unknown>;
  content?: RichTextNode[];
}

export interface RichText {
  content: RichTextNode[];
}

export type ContactData = {
  fields: {
    address: string;
    phone: string;
    schedule: RichText;
  };
  sys: {
    id: string;
  };
};

export default function ContactSection() {
  const t = useTranslations();
  const selectedLocale = useLocale();
  const [data, setData] = useState<ContactData[]>([]);

  const [alert, setAlert] = useState<{
    show: boolean;
    type: "success" | "error";
    message: string;
  }>({
    show: false,
    type: "success",
    message: "",
  });

  useEffect(() => {
    async function fetchTestimonials() {
      const entries = await getEntries({
        content_type: "contactSection",
        locale: selectedLocale,
      });
      const mappedData = entries.map((item) => ({
        fields: {
          address: item.fields.address as string,
          phone: item.fields.phone as string,
          schedule: item.fields.schedule as RichText,
        },
        sys: {
          id: item.sys.id,
        },
      }));
      setData(mappedData);
    }
    fetchTestimonials();
  }, [selectedLocale]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setAlert({
          show: true,
          type: "success",
          message: "Mensaje enviado correctamente",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setAlert({
          show: true,
          type: "error",
          message: "Error al enviar el mensaje",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setAlert({
        show: true,
        type: "error",
        message: "Error al enviar el mensaje",
      });
    }
  };

  const closeAlert = () => {
    setAlert((prev) => ({ ...prev, show: false }));
  };

  const address = data[0]?.fields?.address ?? "Cargando...";
  const phone = data[0]?.fields?.phone ?? "Cargando...";
  const schedule =
    data[0]?.fields?.schedule?.content?.[0]?.content?.[0]?.value ?? "Cargando";

  return (
    <section id="contact" className="py-24 bg-white scroll-mt-5">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-black mb-4">
            {t("navbar.contact")}
          </h2>
          <div className="w-24 h-1 bg-[#d4b897] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">{t("contact-desc")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="p-8 shadow-xl border-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">{t("contact-info")}</h3>
            <div className="space-y-6">
              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <MapPin
                  className="h-6 w-6 mt-1 text-[#d4b897]"
                  aria-hidden="true"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-lg mb-1">{t("address")}</h4>
                  <p className="text-gray-700">{address}</p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Phone
                  className="h-6 w-6 mt-1 text-[#d4b897]"
                  aria-hidden="true"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-lg mb-1">{t("phone")}</h4>
                  <p className="text-gray-700">{phone}</p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Clock
                  className="h-6 w-6 mt-1 text-[#d4b897]"
                  aria-hidden="true"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-lg mb-1">
                    {t("schedule")}
                  </h4>
                  <p className="text-gray-700 whitespace-pre-line">
                    {schedule}
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Instagram
                  className="h-6 w-6 mt-1 text-[#d4b897]"
                  aria-hidden="true"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-lg mb-1">Instagram</h4>
                  <a
                    href="https://www.instagram.com/tintoreriacanudas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#664e30] hover:text-[#482f15] transition-colors duration-300 font-medium underline"
                  >
                    @tintoreriacanudas
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="p-8 shadow-xl border-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">
              {t("contact-form.title")}
            </h3>

            {alert.show && (
              <AlertMessage
                type={alert.type}
                message={alert.message}
                onClose={closeAlert}
              />
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("contact-form.name")}
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-600 px-4 py-2 rounded focus:outline-none focus:border-[#d4b897] focus:ring-1 focus:ring-[#d4b897] transition"
                  required
                  placeholder={t("contact-form.placeholder.name")}
                  autoComplete="name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("contact-form.email")}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-600 px-4 py-2 rounded focus:outline-none focus:border-[#d4b897] focus:ring-1 focus:ring-[#d4b897] transition"
                  required
                  placeholder={t("contact-form.placeholder.email")}
                  autoComplete="email"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("phone")}
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-600 px-4 py-2 rounded focus:outline-none focus:border-[#d4b897] focus:ring-1 focus:ring-[#d4b897] transition"
                  required
                  placeholder="666 66 66 66"
                  autoComplete="tel"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("contact-form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-600 px-4 py-2 rounded focus:outline-none focus:border-[#d4b897] focus:ring-1 focus:ring-[#d4b897] transition"
                  required
                  placeholder={t("contact-form.placeholder.message")}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#d4b897] text-black hover:bg-[#c5a988] transition-colors"
              >
                {t("contact-form.send")}
              </Button>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2982.4770452461654!2d1.9012263!3d41.7483844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4f1b7c4b5c761%3A0x1c0a6f5f1f9b0c0a!2sCarrer%20Nou%2C%2064%2C%2008270%20Navarcles%2C%20Barcelona!5e0!3m2!1sen!2ses!4v1650000000000!5m2!1sen!2ses"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            title="Ubicación de la tintorería"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
