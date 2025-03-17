"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavBar from "./NavBar";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const desktopLinkClasses =
    "relative inline-block text-[#333333] font-semibold pb-1 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-[20%] after:bg-[#d4b897] after:transition-all after:duration-300 hover:after:w-full";

  const desktopContainerClasses = "hidden md:flex items-center space-x-8";

  const mobileLinkClasses =
    "text-[#333333] font-semibold transition duration-300 hover:text-[#c5a988]";

  const mobileContainerClasses =
    "md:hidden bg-white border-t border-gray-200 px-10 py-4 flex flex-col space-y-4";

  return (
    <header className="fixed w-full bg-white z-50 shadow-sm h-20">
      <div className="w-full px-4 flex justify-between items-center h-full shadow-2xl">
        <Link href="/" className="flex items-center">
          <div className="rounded-full p-1 transition-transform duration-300 hover:scale-110">
            <Image
              className="cursor-pointer h-18 w-auto"
              priority
              src="/logo.png"
              width={478}
              height={478}
              alt="Logo de Tintorería Canudas"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <NavBar
          containerClassName={desktopContainerClasses}
          linkClassName={desktopLinkClasses}
        />

        {/* Botón de menú para móvil */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Alterna el menú"
        >
          <svg
            className="h-6 w-6 text-[#333333]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <NavBar
          containerClassName={mobileContainerClasses}
          linkClassName={mobileLinkClasses}
          onLinkClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}
