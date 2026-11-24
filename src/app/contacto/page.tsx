import type { Metadata } from "next";
import SimplePage from "@/components/SimplePage";
import OpenChatButton from "@/components/OpenChatButton";
import {
  SITE_URL,
  LEGAL_OWNER,
  LEGAL_LOCATION,
  LEGAL_EMAIL,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Contacto Oficial | MiPrimerTelescopio.com",
  description: `Comunícate con ${LEGAL_OWNER} (${LEGAL_LOCATION}) en ${LEGAL_EMAIL} o consulta a nuestro Asesor Astronómico IA.`,
  alternates: { canonical: `${SITE_URL}/contacto/` },
};

export default function ContactoPage() {
  return (
    <SimplePage
      title="Contacto"
      crumb="Contacto"
      href="/contacto/"
      intro="¿Tienes dudas para elegir tu primer telescopio, un regalo especial o accesorios compatibles? Estamos a tu disposición."
    >
      <h2>1. Datos oficiales de contacto</h2>
      <ul>
        <li>
          <strong>Titular responsable:</strong> {LEGAL_OWNER}
        </li>
        <li>
          <strong>Domicilio:</strong> {LEGAL_LOCATION}
        </li>
        <li>
          <strong>Correo electrónico oficial:</strong>{" "}
          <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>
        </li>
      </ul>

      <h2>2. Recomendación instantánea con nuestro Asesor IA</h2>
      <p>
        Si deseas saber hoy mismo qué telescopio Celestron, Sky-Watcher, Gskyer
        u Orion comprar según tu presupuesto y espacio en casa, o qué oculares,
        lente de Barlow 2x, adaptador de celular y estuche son compatibles,
        nuestro <strong>Asesor Astronómico IA</strong> responde al instante las
        24 horas:
      </p>
      <div className="my-6">
        <OpenChatButton
          label="Abrir Asesor Astronómico IA Ahora"
          className="btn btn-buy shine"
        />
      </div>
    </SimplePage>
  );
}
