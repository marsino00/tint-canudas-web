"use client";

import { useTranslations } from "next-intl";

export default function AvisoLegalPage() {
  const t = useTranslations("aviso-legal");

  return (
    <main className="min-h-screen bg-white py-8">
      <div className="max-w-4xl mx-auto px-4 text-gray-700">
        <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>

        <h2 className="text-xl font-semibold mb-2">{t("section1Title")}</h2>
        <p className="mb-4">{t("section1P1")}</p>
        <p className="mb-4">{t("section1P2")}</p>
        <ul className="list-disc list-inside mb-4">
          <li>{t("section1ListItem1")}</li>
          <li>{t("section1ListItem2")}</li>
          <li>{t("section1ListItem3")}</li>
        </ul>

        {/* II. TÉRMINOS Y CONDICIONES GENERALES DE USO */}
        <h2 className="text-xl font-semibold mb-2">{t("section2Title")}</h2>
        <p className="mb-4">{t("section2P1")}</p>
        <p className="mb-4">{t("section2P2")}</p>
        <p className="mb-4">{t("section2P3")}</p>
        <p className="mb-4">{t("section2P4")}</p>
        <p className="mb-4">{t("section2P5")}</p>

        {/* III. ACCESO Y NAVEGACIÓN: EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD */}
        <h2 className="text-xl font-semibold mb-2">{t("section3Title")}</h2>
        <p className="mb-4">{t("section3P1")}</p>
        <p className="mb-4">{t("section3P2")}</p>

        {/* IV. POLÍTICA DE ENLACES */}
        <h2 className="text-xl font-semibold mb-2">{t("section4Title")}</h2>
        <p className="mb-4">{t("section4P1")}</p>
        <p className="mb-4">{t("section4P2")}</p>

        {/* V. PROPIEDAD INTELECTUAL E INDUSTRIAL */}
        <h2 className="text-xl font-semibold mb-2">{t("section5Title")}</h2>
        <p className="mb-4">{t("section5P1")}</p>
        <p className="mb-4">{t("section5P2")}</p>
        <p className="mb-4">{t("section5P3")}</p>

        {/* VI. ACCIONES LEGALES, LEGISLACIÓN APLICABLE Y JURISDICCIÓN */}
        <h2 className="text-xl font-semibold mb-2">{t("section6Title")}</h2>
        <p className="mb-4">{t("section6P1")}</p>
      </div>
    </main>
  );
}
