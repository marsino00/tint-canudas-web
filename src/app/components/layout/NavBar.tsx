"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

type NavBarProps = {
  containerClassName?: string;
  linkClassName?: string;
  onLinkClick?: () => void;
};

export default function NavBar({
  containerClassName = "",
  linkClassName = "",
  onLinkClick,
}: NavBarProps) {
  const t = useTranslations("navbar");

  const links = [
    { href: "/#why-choose-us", label: t("why-choose-us") },
    { href: "/#services", label: t("services") },
    { href: "/#about", label: t("about") },
    { href: "/#testimonials", label: t("testimonials") },
    { href: "/#contact", label: t("contact") },
  ];
  return (
    <nav className={containerClassName}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={linkClassName}
          onClick={onLinkClick}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
