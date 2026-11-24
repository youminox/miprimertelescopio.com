import type { Metadata } from "next";
import SimplePage from "@/components/SimplePage";
import {
  SITE_URL,
  LEGAL_OWNER,
  LEGAL_LOCATION,
  LEGAL_EMAIL,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Política de Cookies | MiPrimerTelescopio.com",
  description: `Información sobre el uso de almacenamiento local y cookies en MiPrimerTelescopio.com (${LEGAL_OWNER}, ${LEGAL_LOCATION}).`,
  alternates: { canonical: `${SITE_URL}/politica-de-cookies/` },
};

export default function CookiesPage() {
  return (
    <SimplePage
      title="Política de Cookies"
      crumb="Política de cookies"
      href="/politica-de-cookies/"
      intro="Detalle transparente sobre el uso de almacenamiento técnico, cookies publicitarias y atribución de afiliados en MiPrimerTelescopio.com."
    >
      <h2>1. Almacenamiento técnico propio</h2>
      <p>
        MiPrimerTelescopio.com emplea claves ligeras en el almacenamiento local
        de tu navegador (<code>localStorage</code> y{" "}
        <code>sessionStorage</code>) exclusivamente para recordar tu preferencia
        de tienda Amazon (<code>mpt_amazon_region</code>: EE. UU. o España) y
        mantener tu historial reciente en el Asesor Astronómico IA (
        <code>mpt_chat_session</code> y <code>mpt_chat_messages</code>).
      </p>

      <h2>2. Cookies de terceros (Amazon y Google)</h2>
      <ul>
        <li>
          <strong>Amazon Associates:</strong> al hacer clic voluntariamente en
          un enlace de afiliado hacia <code>amazon.com</code> o{" "}
          <code>amazon.es</code>, Amazon establece sus propias cookies en su
          dominio para atribuir correctamente las compras adscritas dentro de su
          ventana reglamentaria.
        </li>
        <li>
          <strong>Google AdSense:</strong> este sitio puede mostrar anuncios
          gestionados por Google conforme a sus políticas de privacidad y
          medición de audiencia.
        </li>
      </ul>

      <h2>3. Cómo gestionar o eliminar cookies</h2>
      <p>
        Puedes borrar el almacenamiento local y bloquear cookies desde los
        ajustes de privacidad de Chrome, Safari, Firefox o Edge. Para cualquier
        consulta comunícate con <strong>{LEGAL_OWNER}</strong> ({LEGAL_LOCATION}
        ) al correo <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>.
      </p>
    </SimplePage>
  );
}
