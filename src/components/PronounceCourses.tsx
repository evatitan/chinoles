// ...filepath: /home/evatitan/src/projects/chinoles/src/components/EnteryCourses.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const COLORS = {
  primary: "#2D6A4F",
  cardBorder: "#E9ECEF",
  cardBg: "#F7FFF7",
  text: "#22223B",
};

const pronounceCourse = {
  title: "Spanish Pronunciation Mastery",
  price: 49.99,
  duration: 12,
  content:
    "Master Spanish pronunciation with step-by-step video lessons and practice exercises.",
  chapters: [
    { title: "Introduction to Spanish Sounds", preview: true },
    { title: "Vowels and Diphthongs", preview: true },
    { title: "Consonants and Stress", preview: false },
    { title: "Intonation and Rhythm", preview: false },
    { title: "Common Pronunciation Mistakes", preview: false },
  ],
};

const PronounceCourses: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Course Info */}
      <div
        style={{
          background: COLORS.cardBg,
          border: `1px solid ${COLORS.cardBorder}`,
          borderRadius: "10px",
          padding: "2rem",
          marginBottom: "2rem",
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          alignItems: "center",
          maxWidth: 700,
        }}
      >
        <div style={{ flex: 2 }}>
          <h2
            style={{
              color: COLORS.primary,
              fontWeight: 700,
              fontSize: "1.5rem",
            }}
          >
            {pronounceCourse.title}
          </h2>
          <div style={{ color: COLORS.text, margin: "1rem 0" }}>
            {pronounceCourse.content}
          </div>
          <div style={{ color: COLORS.text }}>
            <strong>Duration:</strong> {pronounceCourse.duration} hours
          </div>
        </div>
        <div style={{ flex: 1, textAlign: "right" }}>
          <div
            style={{
              fontSize: "1.3rem",
              color: COLORS.primary,
              fontWeight: 700,
            }}
          >
            ${pronounceCourse.price.toFixed(2)}
          </div>
          <button
            style={{
              marginTop: "1rem",
              background: COLORS.primary,
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              padding: "0.6em 1.5em",
              fontWeight: 600,
              fontSize: "1rem",
              cursor: "pointer",
            }}
            onClick={() => navigate("/cart")}
            title="Go to payment"
          >
            Buy Now
          </button>
        </div>
      </div>
      {/* Chapters List */}
      <div style={{ marginTop: "2rem" }}>
        <h3
          style={{
            color: COLORS.primary,
            fontWeight: 700,
            fontSize: "1.2rem",
            marginBottom: "1.2rem",
          }}
        >
          Course Chapters
        </h3>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          {pronounceCourse.chapters.map((chapter, idx) => (
            <div
              key={chapter.title}
              style={{
                background: "#fff",
                border: `1px solid ${COLORS.cardBorder}`,
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(44, 62, 80, 0.04)",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "1.5rem",
                opacity: chapter.preview ? 1 : 0.6,
              }}
            >
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: COLORS.text,
                  }}
                >
                  {idx + 1}. {chapter.title}
                </div>
                <div style={{ color: "#888", fontSize: "0.98rem" }}>
                  {chapter.preview
                    ? "Preview available"
                    : "Locked (Buy to unlock)"}
                </div>
              </div>
              <button
                style={{
                  background: chapter.preview ? COLORS.primary : "#ccc",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  padding: "0.5em 1.2em",
                  fontWeight: 600,
                  fontSize: "1rem",
                  cursor: chapter.preview ? "pointer" : "not-allowed",
                }}
                disabled={!chapter.preview}
              >
                {chapter.preview ? "View" : "Locked"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PronounceCourses;
