import React from "react";
import { Footer } from "../components/Footer";

const COLORS = {
  primary: "rgb(64, 145, 108)",
  secondary: "#40916C",
  accent: "#F9C74F",
  background: "#F7FFF7",
  text: "#22223B",
};

const sections = [
  {
    title: "Welcome to Chinoles",
    text: (
      <div>
        <p>
          Unlock your language potential with personalized, professional
          instruction. Whether you're a beginner or looking to refine your
          skills, our academy offers customized lessons that fit your goals,
          schedule, and pace.
        </p>
        <div style={{ marginTop: "1em" }}>
          <a
            href="#"
            style={{
              background: COLORS.primary,
              color: "#fff",
              padding: "0.7em 1.5em",
              borderRadius: "6px",
              textDecoration: "none",
              marginRight: "1em",
              fontWeight: 600,
            }}
          >
            👉 Book Your Trial Now
          </a>
          <a
            href="#"
            style={{
              background: COLORS.accent,
              color: COLORS.text,
              padding: "0.7em 1.5em",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            👉 Explore Our Courses
          </a>
        </div>
      </div>
    ),
  },
  {
    title: "What We Offer",
    text: (
      <ul style={{ margin: 0, paddingLeft: "1.2em" }}>
        <li>1-on-1 Online Lessons with experienced tutors</li>
        <li>Interactive Practice with real-life scenarios</li>
        <li>Tailored Curriculum for all levels and ages</li>
        <li>Support for Exams (HSK, DELE etc.)</li>
        <li>Flexible Scheduling - learn when it suits you</li>
      </ul>
    ),
    img: "https://via.placeholder.com/350x200?text=What+We+Offer",
  },
  {
    title: "Languages Available",
    text: (
      <ul style={{ margin: 0, paddingLeft: "1.2em" }}>
        <li>Chinese</li>
        <li>English</li>
        <li>Spanish</li>
        <li>Correan</li>
        <li>More coming soon!</li>
      </ul>
    ),
    img: "https://via.placeholder.com/350x200?text=Languages",
  },
  {
    title: "Why Choose Chinoles?",
    text: (
      <ul style={{ margin: 0, paddingLeft: "1.2em" }}>
        <li>Certified native-speaking instructors</li>
        <li>100% online, accessible anywhere</li>
        <li>Progress tracking and personal feedback</li>
        <li>Affordable plans for every learner</li>
      </ul>
    ),
    img: "https://via.placeholder.com/350x200?text=Why+Choose+Us",
  },
  {
    title: "Start Today!",
    text: (
      <div>
        Book a free trial lesson and begin your journey toward fluency.
        <div style={{ marginTop: "1em" }}>
          <a
            href="#"
            style={{
              background: COLORS.primary,
              color: "#fff",
              padding: "0.7em 1.5em",
              borderRadius: "6px",
              textDecoration: "none",
              marginRight: "1em",
              fontWeight: 600,
            }}
          >
            👉 Book Your Trial Now
          </a>
          <a
            href="#"
            style={{
              background: COLORS.accent,
              color: COLORS.text,
              padding: "0.7em 1.5em",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            👉 Explore Our Courses
          </a>
        </div>
      </div>
    ),
  },
];

const Home: React.FC = () => {
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {sections.map((section, idx) => (
          <div
            key={section.title}
            style={{
              display: "flex",
              flexDirection: idx % 2 === 0 ? "row" : "row-reverse",
              alignItems: "center",
              background: "transparent",
              borderRadius: "0",
              boxShadow: "none",
              marginBottom: "4rem",
              padding: "4rem 0",
              gap: "3.5rem",
              minHeight: "350px",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <div style={{ flex: 1 }}>
              <h2
                style={{
                  color: COLORS.primary, // use principal color for headers
                  fontWeight: 700,
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
                    boxShadow: "0 2px 8px rgba(44, 62, 80, 0.08)",
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
      {/* Review Section */}
      <section
        style={{
          width: "100%",
          background: "#F7FFF7",
          padding: "4rem 0 3rem 0",
          margin: "0 auto",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2
            style={{
              color: COLORS.primary,
              fontWeight: 700,
              fontSize: "2rem",
              marginBottom: "2.5rem",
              textAlign: "center",
              letterSpacing: "1px",
            }}
          >
            What Our Students Say
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2.5rem",
              maxWidth: 900,
              margin: "0 auto",
            }}
          >
            <div
              style={{
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(44, 62, 80, 0.06)",
                padding: "2rem",
                fontSize: "1.15rem",
                color: COLORS.text,
                display: "flex",
                flexDirection: "column",
                gap: "1.2rem",
              }}
            >
              <div>
                <strong>J.W</strong>{" "}
                <span style={{ color: "#888", fontSize: "0.95rem" }}>
                  — Spain
                </span>
              </div>
              <div>
                “Chinoles Academy helped me pass my HSK exam! The teachers are
                patient and the lessons are fun and effective.”
              </div>
            </div>
            <div
              style={{
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(44, 62, 80, 0.06)",
                padding: "2rem",
                fontSize: "1.15rem",
                color: COLORS.text,
                display: "flex",
                flexDirection: "column",
                gap: "1.2rem",
              }}
            >
              <div>
                <strong>Gaby</strong>{" "}
                <span style={{ color: "#888", fontSize: "0.95rem" }}>
                  — China
                </span>
              </div>
              <div>
                “The flexible scheduling and personalized curriculum made it
                easy for me to learn Spanish while working full-time.”
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
