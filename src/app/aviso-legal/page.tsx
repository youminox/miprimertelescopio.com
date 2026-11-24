import type { Metadata } from "next";
import SimplePage from "@/components/SimplePage";
import {
  SITE_URL,
  LEGAL_OWNER,
  LEGAL_LOCATION,
  LEGAL_EMAIL,
} from "@/lib/content";
import { AMAZON_TAG_US, AMAZON_TAG_ES } from "@/lib/amazon";

export const metadata: Metadata = {
  title: "Aviso Legal y Condiciones de Uso | MiPrimerTelescopio.com",
  description: `Información legal oficial de MiPrimerTelescopio.com, titularidad de ${LEGAL_OWNER}, domiciliado en ${LEGAL_LOCATION} (${LEGAL_EMAIL}).`,
  alternates: { canonical: `${SITE_URL}/aviso-legal/` },
};

export default function AvisoLegalPage() {
  return (
    <SimplePage
      title="Aviso Legal y Condiciones de Uso"
      crumb="Aviso legal"
      href="/aviso-legal/"
      intro="Identificación oficial del responsable del portal MiPrimerTelescopio.com, condiciones generales de acceso, propiedad intelectual y seguridad de observación solar."
    >
      <h2>1. Datos identificativos del titular</h2>
      <p>
        En cumplimiento del deber de transparencia informativa aplicable al
        comercio electrónico y servicios digitales, se informa que el sitio web{" "}
        <strong>https://miprimertelescopio.com</strong> (en adelante,{" "}
        <strong>MiPrimerTelescopio.com</strong>) es propiedad y está operado
        por:
      </p>
      <ul>
        <li>
          <strong>Titular responsable:</strong> {LEGAL_OWNER}
        </li>
        <li>
          <strong>Domicilio legal:</strong> {LEGAL_LOCATION}
        </li>
        <li>
          <strong>Correo electrónico oficial de contacto:</strong>{" "}
          <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>
        </li>
      </ul>

      <h2>2. Objeto y naturaleza informativa del sitio web</h2>
      <p>
        MiPrimerTelescopio.com es una guía editorial independiente en español
        orientada a ayudar a quienes buscan su primer telescopio o desean regalar
        uno a un aficionado a la astronomía, comparando marcas como Celestron,
        Sky-Watcher, Gskyer y Orion según presupuesto, apertura, facilidad de
        montaje y espacio en casa, e indicando qué cuerpos celestes se pueden
        observar y qué accesorios (oculares, lentes de Barlow, buscadores,
        adaptadores para celular, monturas y estuches) son compatibles en Amazon
        Estados Unidos.
      </p>

      <h2>3. Propiedad intelectual y marcas registradas</h2>
      <p>
        Los textos originales, comparativas, diseño y diagramas de este sitio
        están protegidos por derechos de autor a favor de {LEGAL_OWNER}. Todas
        las marcas comerciales de terceros citadas con fines descriptivos y de
        compatibilidad (Amazon, Celestron, Sky-Watcher, Gskyer, Orion y sus
        respectivas líneas de producto) pertenecen a sus legítimos titulares.
      </p>

      <h2>4. Enlaces de afiliación a Amazon</h2>
      <p>
        MiPrimerTelescopio.com participa en el Programa de Afiliados de
        Amazon.com Associates (ID de seguimiento:{" "}
        <strong>{AMAZON_TAG_US}</strong>) y en el Programa de Afiliados de
        Amazon EU (ID de seguimiento: <strong>{AMAZON_TAG_ES}</strong>). Al
        hacer clic en enlaces hacia Amazon y realizar compras que cumplan los
        requisitos aplicables, el titular percibe una comisión publicitaria sin
        ningún incremento de precio para el usuario.
      </p>

      <h2>5. Advertencia crítica de seguridad solar</h2>
      <p>
        Jamás observes el Sol ni apuntes un telescopio o buscador óptico hacia
        el Sol sin un filtro solar frontal certificado bajo la norma{" "}
        <strong>ISO 12312-2</strong> debidamente asegurado delante de la
        apertura principal. Nunca utilices filtros que se enroscan en el ocular.
        La observación solar indebida produce lesiones oculares permanentes en
        fracciones de segundo.
      </p>
    </SimplePage>
  );
}
