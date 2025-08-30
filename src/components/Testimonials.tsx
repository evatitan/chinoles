import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

const COLORS = {
  primary: "rgb(64, 145, 108)",
  text: "rgb(85, 85, 85)",
};

const Testimonials: React.FC = () => {
  const currentLang = useSelector((state: RootState) => state.lang.currentLang);

  if (!currentLang || !currentLang.testimonials) {
    return null;
  }

  return (
    <section
      style={{
        width: "100%",
        background: "#F7FFF7",
        padding: "4rem 2rem",
        margin: "0 auto",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            color: COLORS.primary,
            fontWeight: 800,
            fontSize: "2.5rem",
            marginBottom: "1rem",
          }}
        >
          {currentLang.testimonials.title}
        </h2>
        <p
          style={{
            color: COLORS.text,
            fontSize: "1.2rem",
            marginBottom: "3rem",
            opacity: 0.8,
          }}
        >
          {currentLang.testimonials.description}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            marginTop: "2rem",
          }}
        >
          {currentLang.testimonials.items.map((testimonial, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                padding: "2rem",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(64, 145, 108, 0.1)",
                border: "1px solid rgba(64, 145, 108, 0.1)",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  fontSize: "1.1rem",
                  lineHeight: 1.6,
                  color: COLORS.text,
                  marginBottom: "1.5rem",
                  fontStyle: "italic",
                }}
              >
                "{testimonial.text}"
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      color: COLORS.primary,
                      fontSize: "1.1rem",
                    }}
                  >
                    {testimonial.name}
                  </div>
                  <div
                    style={{
                      color: COLORS.text,
                      opacity: 0.7,
                      fontSize: "0.9rem",
                    }}
                  >
                    {testimonial.country}
                  </div>
                </div>

                <div
                  style={{
                    background: COLORS.primary,
                    color: "#fff",
                    padding: "0.5rem 1rem",
                    borderRadius: "20px",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                  }}
                >
                  {testimonial.level}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
