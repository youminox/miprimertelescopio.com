import type { Metadata } from "next";
import SimplePage from "@/components/SimplePage";
import {
  SITE_URL,
  LEGAL_OWNER,
  LEGAL_LOCATION,
  LEGAL_EMAIL,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Política Editorial y Metodología Óptica | MiPrimerTelescopio.com",
  description: `Cómo evaluamos telescopios Celestron, Sky-Watcher, Gskyer y Orion y accesorios compatibles en MiPrimerTelescopio.com (${LEGAL_OWNER}).`,
  alternates: { canonical: `${SITE_URL}/politica-editorial/` },
};

export default function PoliticaEditorialPage() {
  return (
    <SimplePage
      title="Política Editorial y Metodología Óptica"
      crumb="Política editorial"
      href="/politica-editorial/"
      intro="Los criterios astronómicos, ópticos y de compatibilidad que aplicamos en cada guía de MiPrimerTelescopio.com."
    >
      <h2>1. Dirección editorial responsable</h2>
      <p>
        Toda la estructura editorial de <strong>MiPrimerTelescopio.com</strong>{" "}
        está supervisada por <strong>{LEGAL_OWNER}</strong> ({LEGAL_LOCATION} ·{" "}
        <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>).
      </p>

      <h2>2. Nuestros 5 criterios de evaluación transparente</h2>
      <ul>
        <li>
          <strong>1. Apertura real frente a aumentos falsos:</strong> calculamos
          el aumento máximo útil real (aprox. <code>2 × apertura en mm</code>) y
          descartamos promesas engañosas de cajas genéricas.
        </li>
        <li>
          <strong>2. Expectativas honestas de observación:</strong> explicamos
          con claridad qué se ve a través del ocular (cráteres lunares, bandas
          de Júpiter, anillos de Saturno y nebulosas tenues en blanco y negro),
          evitando confundir la observación visual con fotos de larga exposición.
        </li>
        <li>
          <strong>3. Presupuesto, montaje y espacio en casa:</strong> comparamos
          refuerzo de montura, tiempo real de armado sin herramientas, peso y
          dimensiones guardadas para balcones o departamentos pequeños.
        </li>
        <li>
          <strong>4. Accesorios de fábrica y mejoras compatibles:</strong>{" "}
          documentamos exactamente qué oculares, buscador, Barlow o adaptador
          incluye cada modelo y qué accesorios <code>1.25&quot;</code> o{" "}
          <code>2&quot;</code> son compatibles y valen la pena.
        </li>
        <li>
          <strong>5. Seguridad solar absoluta:</strong> recordamos en toda guía
          pertinente el uso obligatorio de filtros frontales certificados ISO
          12312-2.
        </li>
      </ul>

      <h2>3. Actualización y correcciones</h2>
      <p>
        Si detectas que un fabricante actualizó los accesorios incluidos de
        fábrica en un modelo específico, escríbenos a{" "}
        <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>.
      </p>
    </SimplePage>
  );
}
