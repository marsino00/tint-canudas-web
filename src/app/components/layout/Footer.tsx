"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="bg-white py-3">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-800 mb-4 font-semibold">
          {t("text1")}
        </p>

        <div className="flex flex-wrap justify-center items-center gap-20">
          <Image
            src="/l1.png"
            alt="Imagen 1"
            width={150}
            height={150}
            className="object-contain"
            style={{ width: "150px", height: "150px" }}
          />
          <Image
            src="/l2.png"
            alt="Imagen 2"
            width={150}
            height={150}
            className="object-contain"
            style={{ width: "150px", height: "150px" }}
          />
          <Image
            src="/l3.png"
            alt="Imagen 3"
            width={150}
            height={150}
            className="object-contain"
            style={{ width: "150px", height: "150px" }}
          />
          <Image
            src="/l4.png"
            alt="Imagen 4"
            width={150}
            height={150}
            className="object-contain"
            style={{ width: "150px", height: "150px" }}
          />
          <Image
            src="/l5.png"
            alt="Imagen 5"
            width={150}
            height={150}
            className="object-contain"
            style={{ width: "150px", height: "150px" }}
          />
        </div>

        <div className="mt-6 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
          <Link href="/aviso-legal" className="hover:text-gray-900">
            {t("legal-advice")}
          </Link>
          <Link href="/politica-privacidad" className="hover:text-gray-900">
            {t("privacy-policy")}
          </Link>
          <Link href="/politica-cookies" className="hover:text-gray-900">
            {t("cookies-policy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
