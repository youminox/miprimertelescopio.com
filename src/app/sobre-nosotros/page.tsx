import type { Metadata } from "next";
import SimplePage from "@/components/SimplePage";
import {
  SITE_URL,
  LEGAL_OWNER,
  LEGAL_LOCATION,
  LEGAL_EMAIL,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Sobre Nosotros | MiPrimerTelescopio.com",
  description: `Conoce la misión de MiPrimerTelescopio.com, fundado por ${LEGAL_OWNER} en ${LEGAL_LOCATION}, la guía en español para elegir tu primer telescopio y accesorios compatibles en Amazon EE. UU.`,
  alternates: { canonical: `${SITE_URL}/sobre-nosotros/` },
};

export default function SobreNosotrosPage() {
  return (
    <SimplePage
      title="Sobre MiPrimerTelescopio.com"
      crumb="Sobre nosotros"
      href="/sobre-nosotros/"
      intro="Nacimos para que cualquier persona en español pueda elegir su primer telescopio o regalar uno sin caer en equipos frustrantes ni comprar accesorios incompatibles."
    >
      <h2>¿Por qué creamos MiPrimerTelescopio.com?</h2>
      <p>
        Dar el primer paso en la astronomía amateur debería ser inolvidable al
        ver por primera vez los cráteres de la Luna o los anillos de Saturno.
        Sin embargo, cientos de principiantes abandonan porque compraron un
        telescopio con trípode tembloroso, aumentos irreales o que no cabía en
        su balcón o clóset.
      </p>
      <p>
        En <strong>MiPrimerTelescopio.com</strong> reunimos más de{" "}
        <strong>1,500 guías en español</strong> divididas por marcas líderes (
        <strong>Celestron, Sky-Watcher, Gskyer y Orion</strong>), rangos de
        presupuesto, apertura real, facilidad de montaje, espacio en casa y
        compatibilidad exacta de oculares, lentes de Barlow, buscadores,
        adaptadores para celular, monturas y estuches en Amazon Estados Unidos.
      </p>

      <h2>Titular responsable del proyecto</h2>
      <p>
        El portal es propiedad y está editado por <strong>{LEGAL_OWNER}</strong>
        , domiciliado en <strong>{LEGAL_LOCATION}</strong>.
      </p>
      <ul>
        <li>
          <strong>Titular y Fundador:</strong> {LEGAL_OWNER}
        </li>
        <li>
          <strong>Domicilio:</strong> {LEGAL_LOCATION}
        </li>
        <li>
          <strong>Contacto directo:</strong>{" "}
          <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>
        </li>
      </ul>
    </SimplePage>
  );
}
