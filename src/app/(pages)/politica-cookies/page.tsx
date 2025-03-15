"use client";

import { useTranslations } from "next-intl";

export default function PoliticaCookiesPage() {
  // Ajusta la clave del namespace si tu JSON está organizado de otra manera.
  const t = useTranslations("politica-cookies");

  return (
    <main className="min-h-screen bg-white py-8">
      <div className="max-w-4xl mx-auto px-4 text-gray-700">
        {/* Título principal */}
        <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>

        {/* 1. ¿Qué son las Cookies? */}
        <h2 className="text-xl font-semibold mb-2">{t("section1Title")}</h2>
        <p className="mb-4">{t("section1P1")}</p>

        {/* 2. Tipos de Cookies que Utilizamos */}
        <h2 className="text-xl font-semibold mb-2">{t("section2Title")}</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>{t("section2Bullet1.title")}:</strong>{" "}
            {t("section2Bullet1.desc")}
          </li>
          <li>
            <strong>{t("section2Bullet2.title")}:</strong>{" "}
            {t("section2Bullet2.desc")}
          </li>
          <li>
            <strong>{t("section2Bullet3.title")}:</strong>{" "}
            {t("section2Bullet3.desc")}
          </li>
          <li>
            <strong>{t("section2Bullet4.title")}:</strong>{" "}
            {t("section2Bullet4.desc")}
          </li>
        </ul>

        {/* 3. Finalidad de las Cookies */}
        <h2 className="text-xl font-semibold mb-2">{t("section3Title")}</h2>
        <ul className="list-disc list-inside mb-4">
          <li>{t("section3ListItem1")}</li>
          <li>{t("section3ListItem2")}</li>
          <li>{t("section3ListItem3")}</li>
          <li>{t("section3ListItem4")}</li>
        </ul>

        {/* 4. Configuración y Desactivación de Cookies */}
        <h2 className="text-xl font-semibold mb-2">{t("section4Title")}</h2>
        <p className="mb-4">{t("section4P1")}</p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Chrome:</strong>{" "}
            <a
              href="https://support.google.com/chrome/answer/95647?hl=es"
              className="text-blue-600 underline"
            >
              {t("section4BrowserList.chrome")}
            </a>
          </li>
          <li>
            <strong>Firefox:</strong>{" "}
            <a
              href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies"
              className="text-blue-600 underline"
            >
              {t("section4BrowserList.firefox")}
            </a>
          </li>
          <li>
            <strong>Safari:</strong>{" "}
            <a
              href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
              className="text-blue-600 underline"
            >
              {t("section4BrowserList.safari")}
            </a>
          </li>
          <li>
            <strong>Edge:</strong>{" "}
            <a
              href="https://support.microsoft.com/es-es/help/4468242/microsoft-edge-browsing-data-and-privacy"
              className="text-blue-600 underline"
            >
              {t("section4BrowserList.edge")}
            </a>
          </li>
        </ul>
        <p className="mb-4">{t("section4P2")}</p>

        {/* 5. Cookies de Terceros */}
        <h2 className="text-xl font-semibold mb-2">{t("section5Title")}</h2>
        <p className="mb-4">{t("section5P1")}</p>

        {/* 6. Aceptación de la Política de Cookies */}
        <h2 className="text-xl font-semibold mb-2">{t("section6Title")}</h2>
        <p className="mb-4">{t("section6P1")}</p>

        {/* 7. Actualizaciones y Cambios en la Política de Cookies */}
        <h2 className="text-xl font-semibold mb-2">{t("section7Title")}</h2>
        <p className="mb-4">{t("section7P1")}</p>
      </div>
    </main>
  );
}
