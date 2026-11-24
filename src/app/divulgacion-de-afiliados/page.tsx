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
  title: "Divulgación de Afiliados de Amazon | MiPrimerTelescopio.com",
  description: `Declaración transparente de participación en el Programa de Afiliados de Amazon Estados Unidos (${AMAZON_TAG_US}) y España (${AMAZON_TAG_ES}).`,
  alternates: { canonical: `${SITE_URL}/divulgacion-de-afiliados/` },
};

export default function DivulgacionAfiliadosPage() {
  return (
    <SimplePage
      title="Divulgación de Afiliados de Amazon"
      crumb="Divulgación de afiliados"
      href="/divulgacion-de-afiliados/"
      intro="Transparencia total sobre cómo sostenemos nuestras más de 1,500 guías gratuitas en español sin ningún costo extra para ti."
    >
      <h2>1. Participación oficial en Amazon Associates</h2>
      <p>
        <strong>MiPrimerTelescopio.com</strong>, sitio web titularidad de{" "}
        <strong>{LEGAL_OWNER}</strong> (domiciliado en {LEGAL_LOCATION} · email:{" "}
        <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>), participa en el
        Programa de Afiliados de <strong>Amazon.com Services LLC</strong>{" "}
        (Estados Unidos, ID de seguimiento: <code>{AMAZON_TAG_US}</code>) y en
        el Programa de Afiliados de <strong>Amazon EU</strong> (España, ID de
        seguimiento: <code>{AMAZON_TAG_ES}</code>).
      </p>
      <p>
        <em>
          &ldquo;En calidad de Afiliado de Amazon, MiPrimerTelescopio.com
          obtiene ingresos por las compras adscritas que cumplen los requisitos
          aplicables.&rdquo;
        </em>
      </p>

      <h2>2. ¿Sube el precio en Amazon al usar nuestros enlaces?</h2>
      <p>
        <strong>No, nunca pagas ni un centavo adicional.</strong> El precio y
        las ofertas disponibles en Amazon Estados Unidos o Amazon España son
        idénticos a los de una visita directa. La comisión que Amazon asigna
        proviene del margen comercial de la tienda y nos permite mantener en
        línea nuestras tablas de compatibilidad y el Asesor Astronómico IA.
      </p>

      <h2>3. Independencia en nuestras comparativas astronómicas</h2>
      <p>
        Ningún fabricante (Celestron, Sky-Watcher, Gskyer, Orion ni otro) paga
        por alterar nuestras evaluaciones. Señalamos abiertamente tanto las
        virtudes de cada modelo como las limitaciones de los oculares de serie,
        las monturas débiles o los diseños ópticos menos recomendables.
      </p>
    </SimplePage>
  );
}
