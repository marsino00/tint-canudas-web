"use client";

import { useTranslations } from "next-intl";
import Head from "next/head";

export default function DeclaracionAccesibilidad() {
  const t = useTranslations("accessibility");

  const fechaActual = new Date().toLocaleDateString(undefined, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <Head>
        <title>{t("title")} | Tintoreria Canudas</title>
        <meta
          name="description"
          content={t("commitment.content").substring(0, 155) + "..."}
        />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <main id="main-content" className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-900">
            {t("title")}
          </h1>

          <section aria-labelledby="compromiso" className="mb-8">
            <h2
              id="compromiso"
              className="text-2xl font-bold mb-4 text-gray-800"
            >
              {t("commitment.title")}
            </h2>
            <p className="text-gray-700 mb-4">{t("commitment.content")}</p>
          </section>

          <section aria-labelledby="estandar" className="mb-8">
            <h2 id="estandar" className="text-2xl font-bold mb-4 text-gray-800">
              {t("standard.title")}
            </h2>
            <p className="text-gray-700 mb-4">{t("standard.content")}</p>
          </section>

          <section aria-labelledby="medidas" className="mb-8">
            <h2 id="medidas" className="text-2xl font-bold mb-4 text-gray-800">
              {t("measures.title")}
            </h2>
            <p className="text-gray-700 mb-4">{t("measures.intro")}</p>

            <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">
              {t("measures.navigation.title")}
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              {Array.from({ length: 5 }).map((_, index) => (
                <li key={`nav-${index}`}>
                  {t(`measures.navigation.items.${index}`)}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">
              {t("measures.visual.title")}
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              {Array.from({ length: 4 }).map((_, index) => (
                <li key={`visual-${index}`}>
                  {t(`measures.visual.items.${index}`)}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">
              {t("measures.operability.title")}
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              {Array.from({ length: 4 }).map((_, index) => (
                <li key={`op-${index}`}>
                  {t(`measures.operability.items.${index}`)}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">
              {t("measures.multimedia.title")}
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              {Array.from({ length: 3 }).map((_, index) => (
                <li key={`media-${index}`}>
                  {t(`measures.multimedia.items.${index}`)}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">
              {t("measures.forms.title")}
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              {Array.from({ length: 4 }).map((_, index) => (
                <li key={`form-${index}`}>
                  {t(`measures.forms.items.${index}`)}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="estado" className="mb-8">
            <h2 id="estado" className="text-2xl font-bold mb-4 text-gray-800">
              {t("status.title")}
            </h2>
            <p className="text-gray-700 mb-4">{t("status.content1")}</p>
            <p className="text-gray-700 mb-4">{t("status.content2")}</p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              {Array.from({ length: 2 }).map((_, index) => (
                <li key={`issue-${index}`}>{t(`status.issues.${index}`)}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="evaluacion" className="mb-8">
            <h2
              id="evaluacion"
              className="text-2xl font-bold mb-4 text-gray-800"
            >
              {t("evaluation.title")}
            </h2>
            <p className="text-gray-700 mb-4">{t("evaluation.content")}</p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              {Array.from({ length: 3 }).map((_, index) => (
                <li key={`method-${index}`}>
                  {t(`evaluation.methods.${index}`)}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="contacto" className="mb-8">
            <h2 id="contacto" className="text-2xl font-bold mb-4 text-gray-800">
              {t("contact.title")}
            </h2>
            <p className="text-gray-700 mb-4">{t("contact.content")}</p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>
                {t("contact.email")}:{" "}
                <a
                  href="mailto:tintoreriacanudas@gmail.com"
                  className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  tintoreriacanudas@gmail.com
                </a>
              </li>
              <li>
                {t("contact.phone")}:{" "}
                <a
                  href="tel:+34626952514"
                  className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  +34 626 95 25 14
                </a>
              </li>
              <li>
                {t("contact.contactForm")}:{" "}
                <a
                  href="https://www.tintoreriacanudas.com/#contact"
                  className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  www.tintoreriacanudas.com/#contact
                </a>
              </li>
            </ul>
          </section>

          <section aria-labelledby="procedimiento" className="mb-8">
            <h2
              id="procedimiento"
              className="text-2xl font-bold mb-4 text-gray-800"
            >
              {t("compliance.title")}
            </h2>
            <p className="text-gray-700 mb-4">{t("compliance.content1")}</p>
            <p className="text-gray-700 mb-4">{t("compliance.content2")}</p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              {Array.from({ length: 2 }).map((_, index) => (
                <li key={`auth-${index}`}>
                  {t(`compliance.authorities.${index}`)}
                </li>
              ))}
              <li>
                <a
                  href="https://administracionelectronica.gob.es/PAe/accesibilidad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  www.administracionelectronica.gob.es/PAe/accesibilidad
                </a>
              </li>
            </ul>
          </section>

          <section aria-labelledby="preparacion" className="mb-8">
            <h2
              id="preparacion"
              className="text-2xl font-bold mb-4 text-gray-800"
            >
              {t("preparation.title")}
            </h2>
            <p className="text-gray-700 mb-4">
              {t("preparation.prepared")} {fechaActual}.
            </p>
            <p className="text-gray-700 mb-4">
              {t("preparation.lastReview")} {fechaActual}.
            </p>
          </section>

          <section aria-labelledby="recursos" className="mb-8">
            <h2 id="recursos" className="text-2xl font-bold mb-4 text-gray-800">
              {t("resources.title")}
            </h2>
            <p className="text-gray-700 mb-4">{t("resources.content")}</p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              {Array.from({ length: 3 }).map((_, index) => (
                <li key={`resource-${index}`}>
                  <a
                    href={t(`resources.links.${index}.url`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {t(`resources.links.${index}.text`)}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}
