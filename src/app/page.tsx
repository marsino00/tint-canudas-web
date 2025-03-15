"use client";

import Image from "next/image";
import { useState } from "react";
import {
  WashingMachine,
  Shirt,
  Scissors,
  ShirtIcon,
  Leaf,
  MapPin,
  Phone,
  Clock,
  Instagram,
  BadgeCheck,
  Sparkles,
  Star,
} from "lucide-react";
import Button from "./components/ui/Button";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Mensaje enviado correctamente");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const services = [
    {
      title: "Ropa de Hogar",
      icon: <WashingMachine className="h-8 w-8 text-[#d4b897] mb-4" />,
      image: "./globe.svg",
      items: ["Edredons", "Mantes", "Fundes sofà", "Cortines"],
    },
    {
      title: "Ropa de Vestir",
      icon: <Shirt className="h-8 w-8 text-[#d4b897] mb-4" />,
      image: "./globe.svg",
      items: [
        "Anoracs",
        "Pantalons",
        "Vestits home i dona",
        "Vestits nuvi i núvia",
      ],
    },
    {
      title: "Accesorios",
      icon: <Scissors className="h-8 w-8 text-[#d4b897] mb-4" />,
      image: "./globe.svg",
      items: [
        "Sabates",
        "Bolsos",
        "Camises i bruses",
        "Jerseis llana i sintètics",
      ],
    },
    {
      title: "Servicios Especiales",
      icon: <ShirtIcon className="h-8 w-8 text-[#d4b897] mb-4" />,
      image: "./globe.svg",
      items: [
        "Tenyit de roba",
        "Servei de bugaderia per a empreses i particulars",
      ],
    },
  ];

  const features = [
    {
      icon: <BadgeCheck className="h-12 w-12 text-[#d4b897]" />,
      title: "Calidad Garantizada",
      description: "Cuidamos cada prenda con la máxima atención al detalle",
    },
    {
      icon: <Sparkles className="h-12 w-12 text-[#d4b897]" />,
      title: "Tecnología Avanzada",
      description:
        "Utilizamos las últimas tecnologías en limpieza y cuidado textil",
    },
    {
      icon: <Leaf className="h-12 w-12 text-[#d4b897]" />,
      title: "Eco-Friendly",
      description:
        "Comprometidos con el medio ambiente usando productos biodegradables",
    },
    {
      icon: <Star className="h-12 w-12 text-[#d4b897]" />,
      title: "Experiencia",
      description: "Más de 20 años de experiencia en el sector",
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section
        id="inicio"
        className="relative h-screen flex items-center justify-center"
      >
        <Image
          src="./globe.svg"
          alt="Tintorería Canudas"
          fill
          className="object-cover brightness-[0.35]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
                Tintorería Canudas
              </h1>
              <p className="text-xl md:text-3xl mb-10 text-white/90 font-light">
                Nuestra tintorería, tu tranquilidad
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-[#d4b897] text-black hover:bg-[#c5a988] px-8 py-6 text-lg transition-all duration-300"
                >
                  <a href="#contacto">Solicitar Presupuesto</a>
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
                  >
                    <Instagram className="mr-2 h-5 w-5" />
                    Síguenos en Instagram
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-[#d4b897]/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Els Nostres Serveis
            </h2>
            <div className="w-24 h-1 bg-[#d4b897] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Cuidamos tu ropa con la atención y profesionalidad que merece
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="h-2 bg-[#d4b897] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="pt-8">
                  {service.icon}
                  <div className="text-xl font-bold text-black group-hover:text-[#d4b897] transition-colors duration-300">
                    {service.title}
                  </div>
                </div>
                <div>
                  <ul className="space-y-3">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-1.5 h-1.5 bg-[#d4b897] rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold mb-6 text-black">
                Sobre Nosotros
              </h2>
              <div className="w-24 h-1 bg-[#d4b897] mb-8"></div>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                Situada en el corazón de Navarcles, Barcelona, Tintorería
                Canudas se ha consolidado como un referente indiscutible en el
                cuidado textil de la zona. Nuestro negocio familiar destaca por
                su enfoque meticuloso y compromiso con la excelencia, ofreciendo
                tratamientos de limpieza excepcionales para sus prendas más
                preciadas.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                Lo que nos diferencia es nuestro personal altamente capacitado y
                el uso de tecnologías avanzadas en máquinas y productos de
                limpieza. Cada miembro de nuestro equipo está comprometido no
                solo con la limpieza, sino también con el mantenimiento de la
                integridad y longevidad de cada prenda.
              </p>
              <div className="flex items-center text-gray-700 mt-8">
                <Leaf className="h-6 w-6 text-[#d4b897] mr-3" />
                <p className="text-sm">
                  Comprometidos con el medio ambiente, utilizamos productos
                  biodegradables y procedimientos eco-amigables.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="./globe.svg"
                  alt="Nuestra historia"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-[#d4b897]/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Contacto</h2>
            <div className="w-24 h-1 bg-[#d4b897] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Estamos aquí para atenderte</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 shadow-xl border-0">
              <h3 className="text-2xl font-bold mb-8">
                Información de contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mt-1 text-[#d4b897]" />
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg mb-1">Dirección</h4>
                    <p className="text-gray-700">
                      Carrer Nou, 64
                      <br />
                      Navarcles, Barcelona
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mt-1 text-[#d4b897]" />
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg mb-1">Teléfono</h4>
                    <p className="text-gray-700">+34 626 95 25 14</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 mt-1 text-[#d4b897]" />
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg mb-1">Horario</h4>
                    <p className="text-gray-700">
                      Lunes a Viernes:
                      <br />
                      9:00 - 13:00
                      <br />
                      17:00 - 20:00
                      <br />
                      <span className="text-gray-500">
                        Fines de semana: Cerrado
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Instagram className="h-6 w-6 mt-1 text-[#d4b897]" />
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg mb-1">Instagram</h4>
                    <a
                      href="https://www.instagram.com/tintoreriacanudas/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#d4b897] hover:text-[#c5a988] transition-colors duration-300"
                    >
                      @tintoreriacanudas
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 shadow-xl border-0">
              <h3 className="text-2xl font-bold mb-8">Envíanos un mensaje</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nombre completo
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-gray-300 focus:border-[#d4b897] focus:ring-[#d4b897]"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-gray-300 focus:border-[#d4b897] focus:ring-[#d4b897]"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Teléfono
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-gray-300 focus:border-[#d4b897] focus:ring-[#d4b897]"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border-gray-300 focus:border-[#d4b897] focus:ring-[#d4b897]"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#d4b897] text-black hover:bg-[#c5a988]"
                >
                  Enviar mensaje
                </Button>
              </form>
            </div>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2982.4770452461654!2d1.9012263!3d41.7483844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4f1b7c4b5c761%3A0x1c0a6f5f1f9b0c0a!2sCarrer%20Nou%2C%2064%2C%2008270%20Navarcles%2C%20Barcelona!5e0!3m2!1sen!2ses!4v1650000000000!5m2!1sen!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
