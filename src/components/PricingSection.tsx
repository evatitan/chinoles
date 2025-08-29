import React from "react";

const COLORS = {
  primary: "rgb(64, 145, 108)",
  text: "rgb(85, 85, 85)",
  accent: "#F9C74F",
};

const plans = [
  {
    name: "Plan Básico",
    price: "$25",
    period: "/clase",
    features: [
      "Clases individuales 1-a-1",
      "45 minutos por clase",
      "Material didáctico incluido",
      "Horario flexible",
      "Feedback personalizado",
    ],
    recommended: false,
  },
  {
    name: "Plan Intensivo",
    price: "$20",
    period: "/clase",
    features: [
      "8 clases al mes (2x semana)",
      "45 minutos por clase",
      "Material didáctico premium",
      "Seguimiento del progreso",
      "Tareas y ejercicios extra",
      "Soporte por WhatsApp",
    ],
    recommended: true,
  },
  {
    name: "Plan Premium",
    price: "$18",
    period: "/clase",
    features: [
      "12 clases al mes (3x semana)",
      "45 minutos por clase",
      "Preparación para exámenes",
      "Conversación temática",
      "Clases de repaso incluidas",
      "Soporte 24/7",
      "Material extra descargable",
    ],
    recommended: false,
  },
];

const PricingSection: React.FC = () => {
  return (
    <section
      style={{
        width: "100%",
        background: "#F7FFF7",
        padding: "5rem 2rem",
        margin: "0 auto",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            color: COLORS.primary,
            fontWeight: 800,
            fontSize: "2.5rem",
            marginBottom: "1rem",
          }}
        >
          Planes Diseñados Para Tu Éxito
        </h2>
        <p
          style={{
            color: COLORS.text,
            fontSize: "1.2rem",
            marginBottom: "3rem",
            opacity: 0.8,
          }}
        >
          Elige el plan que mejor se adapte a tu ritmo de aprendizaje y
          objetivos
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            marginTop: "2rem",
          }}
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                padding: "2.5rem 2rem",
                borderRadius: "16px",
                boxShadow: plan.recommended
                  ? "0 8px 30px rgba(64, 145, 108, 0.15)"
                  : "0 4px 20px rgba(0, 0, 0, 0.05)",
                border: plan.recommended
                  ? `3px solid ${COLORS.primary}`
                  : "1px solid rgba(0, 0, 0, 0.1)",
                position: "relative",
                transform: plan.recommended ? "scale(1.05)" : "scale(1)",
                transition: "transform 0.3s ease",
              }}
            >
              {plan.recommended && (
                <div
                  style={{
                    position: "absolute",
                    top: "-15px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: COLORS.accent,
                    color: COLORS.text,
                    padding: "0.5rem 1.5rem",
                    borderRadius: "20px",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                  }}
                >
                  🌟 Más Popular
                </div>
              )}

              <h3
                style={{
                  color: COLORS.primary,
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  marginBottom: "1rem",
                }}
              >
                {plan.name}
              </h3>

              <div style={{ marginBottom: "2rem" }}>
                <span
                  style={{
                    fontSize: "3rem",
                    fontWeight: 800,
                    color: COLORS.primary,
                  }}
                >
                  {plan.price}
                </span>
                <span
                  style={{
                    fontSize: "1.2rem",
                    color: COLORS.text,
                    opacity: 0.7,
                  }}
                >
                  {plan.period}
                </span>
              </div>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 2rem 0",
                  textAlign: "left",
                }}
              >
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    style={{
                      padding: "0.5rem 0",
                      color: COLORS.text,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        color: COLORS.primary,
                        marginRight: "0.5rem",
                        fontWeight: "bold",
                      }}
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                style={{
                  display: "block",
                  background: plan.recommended ? COLORS.primary : "transparent",
                  color: plan.recommended ? "#fff" : COLORS.primary,
                  border: `2px solid ${COLORS.primary}`,
                  padding: "1rem 2rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                }}
              >
                {plan.recommended ? "🚀 Empezar Ahora" : "Elegir Plan"}
              </a>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "3rem",
            padding: "2rem",
            background: "#fff",
            borderRadius: "12px",
            border: `2px dashed ${COLORS.primary}`,
          }}
        >
          <h3
            style={{
              color: COLORS.primary,
              fontWeight: 700,
              fontSize: "1.3rem",
              marginBottom: "1rem",
            }}
          >
            🎁 ¡Oferta Especial!
          </h3>
          <p style={{ color: COLORS.text, fontSize: "1.1rem" }}>
            <strong>Primera clase completamente GRATIS</strong> para nuevos
            estudiantes. Sin compromiso. Prueba nuestro método y conoce a tu
            profesor ideal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
