"use client";

import { useTranslations } from "next-intl";

export default function PoliticaPrivacidadPage() {
  const t = useTranslations("politica-privacidad");

  return (
    <main className="min-h-screen bg-white py-8">
      <div className="max-w-4xl mx-auto px-4 text-gray-700">
        {/* Título principal */}
        <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>

        {/* 1. Introducción */}
        <h2 className="text-xl font-semibold mb-2">{t("section1Title")}</h2>
        <p className="mb-4">{t("section1P1")}</p>
        <p className="mb-4">{t("section1P2")}</p>

        {/* 2. Responsable del Tratamiento */}
        <h2 className="text-xl font-semibold mb-2">{t("section2Title")}</h2>
        <ul className="list-disc list-inside mb-4">
          <li>{t("section2ListItem1")}</li>
          <li>{t("section2ListItem2")}</li>
          <li>{t("section2ListItem3")}</li>
          <li>{t("section2ListItem4")}</li>
          <li>{t("section2ListItem5")}</li>
        </ul>

        {/* 3. Datos Personales Recopilados */}
        <h2 className="text-xl font-semibold mb-2">{t("section3Title")}</h2>
        <p className="mb-4">{t("section3P1")}</p>
        <ul className="list-disc list-inside mb-4">
          <li>{t("section3ListItem1")}</li>
          <li>{t("section3ListItem2")}</li>
          <li>{t("section3ListItem3")}</li>
        </ul>

        {/* 4. Finalidad del Tratamiento de Datos */}
        <h2 className="text-xl font-semibold mb-2">{t("section4Title")}</h2>
        <ul className="list-disc list-inside mb-4">
          <li>{t("section4ListItem1")}</li>
          <li>{t("section4ListItem2")}</li>
          <li>{t("section4ListItem3")}</li>
          <li>{t("section4ListItem4")}</li>
        </ul>

        {/* 5. Base Legal del Tratamiento */}
        <h2 className="text-xl font-semibold mb-2">{t("section5Title")}</h2>
        <p className="mb-4">{t("section5P1")}</p>

        {/* 6. Conservación de los Datos */}
        <h2 className="text-xl font-semibold mb-2">{t("section6Title")}</h2>
        <p className="mb-4">{t("section6P1")}</p>

        {/* 7. Comunicación de Datos a Terceros */}
        <h2 className="text-xl font-semibold mb-2">{t("section7Title")}</h2>
        <p className="mb-4">{t("section7P1")}</p>

        {/* 8. Derechos de los Usuarios */}
        <h2 className="text-xl font-semibold mb-2">{t("section8Title")}</h2>
        <p className="mb-4">{t("section8P1")}</p>
        <ul className="list-disc list-inside mb-4">
          <li>{t("section8ListItem1")}</li>
          <li>{t("section8ListItem2")}</li>
          <li>{t("section8ListItem3")}</li>
          <li>{t("section8ListItem4")}</li>
          <li>{t("section8ListItem5")}</li>
          <li>{t("section8ListItem6")}</li>
        </ul>
        <p className="mb-4">{t("section8P2")}</p>

        {/* 9. Medidas de Seguridad */}
        <h2 className="text-xl font-semibold mb-2">{t("section9Title")}</h2>
        <p className="mb-4">{t("section9P1")}</p>

        {/* 10. Cambios en la Política de Privacidad */}
        <h2 className="text-xl font-semibold mb-2">{t("section10Title")}</h2>
        <p className="mb-4">{t("section10P1")}</p>
      </div>
    </main>
  );
}
