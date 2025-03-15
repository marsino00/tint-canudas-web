"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Button from "../ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Contacto", href: "#contacto" },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="px-4 py-1">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a
              href="#inicio"
              onClick={(e) => scrollToSection(e, "#inicio")}
              className="flex items-center"
            >
              <Image
                src="/logo.svg"
                alt="Tintorería Canudas"
                width={400}
                height={300}
                className="h-30 w-auto"
                priority
              />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
            <Button>
              <a
                href="#contacto"
                onClick={(e) => scrollToSection(e, "#contacto")}
              >
                Solicitar Servicio
              </a>
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </a>
            ))}
            <Button className="w-full mt-4">
              <a
                href="#contacto"
                onClick={(e) => scrollToSection(e, "#contacto")}
              >
                Solicitar Servicio
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
