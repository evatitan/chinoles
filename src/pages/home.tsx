import React from "react";
// import { useTranslation } from "react-i18next";
import { Footer } from "../components/Footer";
import Testimonials from "../components/Testimonials";
import PricingSection from "../components/PricingSection";
import languagesAvailableImg from "../assets/home/languages_available.png";
import weOfferImg from "../assets/home/we_offer.png";
import whyUsIMg from "../assets/home/why_us.png";

const COLORS = {
  primary: "rgb(64, 145, 108)",
  secondary: "#40916C",
  accent: "#F9C74F",
  background: "#F7FFF7",
  text: "#22223B",
};

const Home: React.FC = () => {
  // const { t } = useTranslation();
  const sections = [
    {
      title: "¡Aprende Español con Chinoles!",
      text: (
        <div>
          <p>
            Descubre el español de manera personalizada y profesional. Ya seas
            principiante o quieras perfeccionar tu nivel, ofrecemos clases
            adaptadas a tus objetivos, horario y ritmo de aprendizaje.
          </p>
          <div style={{ marginTop: "1.5em" }}>
            <a
              href="/contact"
              style={{
                background: COLORS.primary,
                color: "#fff",
                padding: "1em 2em",
                borderRadius: "8px",
                textDecoration: "none",
                marginRight: "1em",
                fontWeight: 600,
                fontSize: "1.1em",
                display: "inline-block",
                marginBottom: "0.5em",
              }}
            >
              🚀 Solicita Información Gratuita
            </a>
            <a
              href="/courses/spanish"
              style={{
                background: COLORS.accent,
                color: COLORS.text,
                padding: "1em 2em",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "1.1em",
                display: "inline-block",
              }}
            >
              📚 Ver Nuestros Cursos
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "¿Qué Ofrecemos?",
      text: (
        <ul style={{ margin: 0, paddingLeft: "1.2em" }}>
          <li>Clases 1-a-1 Online con profesores experimentados</li>
          <li>Práctica Interactiva con escenarios de la vida real</li>
          <li>Currículo Personalizado para todos los niveles y edades</li>
          <li>Preparación para Exámenes (DELE, SIELE, etc.)</li>
          <li>Horarios Flexibles - aprende cuando te convenga</li>
        </ul>
      ),
      img: weOfferImg,
    },
    {
      title: "Especialización en Español",
      text: (
        <ul style={{ margin: 0, paddingLeft: "1.2em" }}>
          <li>Español General (Conversación, Gramática, Vocabulario)</li>
          <li>Español de Negocios</li>
          <li>Español para Viajes y Turismo</li>
          <li>Preparación DELE/SIELE</li>
          <li>Español Médico y Técnico</li>
        </ul>
      ),
      img: languagesAvailableImg,
    },
    {
      title: "¿Por Qué Elegir Chinoles?",
      text: (
        <ul style={{ margin: 0, paddingLeft: "1.2em" }}>
          <li>Profesores nativos certificados y experimentados</li>
          <li>100% online, accesible desde cualquier lugar</li>
          <li>Seguimiento del progreso y feedback personalizado</li>
          <li>Planes accesibles para cada tipo de estudiante</li>
          <li>Metodología probada y resultados garantizados</li>
        </ul>
      ),
      img: whyUsIMg,
    },
  ];

  return (
    <div
      style={{
        background: "#fff",
        minHeight: "100vh",
        paddingTop: "6rem",
        paddingBottom: "2rem",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "80%",
          width: "100%",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "12px",
          padding: "0 1rem",
          color: COLORS.text,
        }}
      >
        {sections.map((section, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              alignItems: "center",
              gap: "3rem",
              paddingBottom: "5rem",
            }}
          >
            <div style={{ flex: 1 }}>
              <h2
                style={{
                  color: COLORS.primary,
                  fontWeight: 800,
                  marginBottom: "2rem",
                  fontSize: "2.2rem",
                }}
              >
                {section.title}
              </h2>
              <div
                style={{
                  color: COLORS.text,
                  fontSize: "1.35rem",
                  lineHeight: 2,
                }}
              >
                {section.text}
              </div>
            </div>
            {/* Only render image if present */}
            {section.img && (
              <div
                style={{ flex: 1, display: "flex", justifyContent: "center" }}
              >
                <img
                  src={section.img}
                  alt={section.title}
                  style={{
                    width: "100%",
                    maxWidth: 420,
                    borderRadius: "14px",
                    boxShadow: "0 2px 8px rgba(44, 62, 80, 0.02)",
                    objectFit: "cover",
                    background: "#eee",
                    minHeight: "220px",
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <section
        style={{
          width: "100%",
          background:
            "linear-gradient(135deg, rgb(64, 145, 108), rgb(52, 168, 83))",
          padding: "5rem 2rem",
          margin: "3rem 0",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2
            style={{
              color: "#fff",
              fontWeight: 800,
              fontSize: "2.5rem",
              marginBottom: "1.5rem",
            }}
          >
            ¡Tu Viaje al Español Empieza Hoy!
          </h2>
          <p
            style={{
              color: "#fff",
              fontSize: "1.3rem",
              marginBottom: "2.5rem",
              opacity: 0.95,
            }}
          >
            Únete a cientos de estudiantes que ya están hablando español con
            confianza. Obtén tu clase de prueba gratuita y descubre nuestro
            método personalizado.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/contact"
              style={{
                background: "#fff",
                color: COLORS.primary,
                padding: "1.2em 2.5em",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "1.2em",
                display: "inline-block",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              🎯 Clase Gratuita Ahora
            </a>
            <a
              href="/courses/spanish"
              style={{
                background: "transparent",
                color: "#fff",
                padding: "1.2em 2.5em",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "1.2em",
                display: "inline-block",
                border: "2px solid #fff",
              }}
            >
              Ver Planes y Precios
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials Section */}
      <Testimonials />

      <Footer />
    </div>
  );
};

export default Home;
