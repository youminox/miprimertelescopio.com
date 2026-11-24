import type { Metadata } from "next";
import SimplePage from "@/components/SimplePage";
import {
  SITE_URL,
  LEGAL_OWNER,
  LEGAL_LOCATION,
  LEGAL_EMAIL,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Política de Privacidad | MiPrimerTelescopio.com",
  description: `Política de privacidad y protección de datos personales de MiPrimerTelescopio.com, gestionado por ${LEGAL_OWNER} (${LEGAL_LOCATION}).`,
  alternates: { canonical: `${SITE_URL}/politica-de-privacidad/` },
};

export default function PrivacidadPage() {
  return (
    <SimplePage
      title="Política de Privacidad"
      crumb="Política de privacidad"
      href="/politica-de-privacidad/"
      intro="Cómo protegemos y tratamos la información técnica y las consultas enviadas en MiPrimerTelescopio.com."
    >
      <h2>1. Responsable del tratamiento de datos</h2>
      <ul>
        <li>
          <strong>Responsable:</strong> {LEGAL_OWNER}
        </li>
        <li>
          <strong>Domicilio:</strong> {LEGAL_LOCATION}
        </li>
        <li>
          <strong>Correo electrónico para ejercicio de derechos:</strong>{" "}
          <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>
        </li>
      </ul>

      <h2>2. Qué datos recopilamos y con qué finalidad</h2>
      <p>
        En MiPrimerTelescopio.com no solicitamos cuentas de usuario ni datos
        bancarios. Únicamente se procesan los siguientes datos mínimos:
      </p>
      <ul>
        <li>
          <strong>Consultas en el Asesor Astronómico IA:</strong> los mensajes
          enviados voluntariamente al chat en línea, junto con un identificador
          anónimo de sesión y la URL de origen, se emplean para responder tus
          dudas sobre telescopios y compatibilidad de accesorios y mejorar la
          precisión de nuestras guías. Te pedimos no ingresar datos personales
          sensibles en la conversación.
        </li>
        <li>
          <strong>Comunicaciones por correo electrónico:</strong> si escribes a{" "}
          <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>, utilizaremos tu
          dirección únicamente para responder tu solicitud.
        </li>
        <li>
          <strong>Métricas técnicas y atribución de afiliados:</strong> conteo
          agregado de clics salientes hacia guías internas y listados de Amazon.
        </li>
      </ul>

      <h2>3. Normativa aplicable y derechos del usuario</h2>
      <p>
        Cumplimos los principios de la Ley N.º 29733 (Ley de Protección de Datos
        Personales del Perú), así como los estándares internacionales del RGPD
        europeo y leyes estatales de privacidad de EE. UU. (CCPA/CPRA). Puedes
        ejercer tus derechos de acceso, rectificación o eliminación escribiendo a{" "}
        <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>.
      </p>
    </SimplePage>
  );
}
