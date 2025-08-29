import React from "react";
const COLORS = {
  primary: "#2D6A4F",
  text: "#22223B",
};

const GrammarCourses: React.FC = () => (
  <div style={{ marginTop: "2rem", color: COLORS.text }}>
    <h2
      style={{
        color: COLORS.primary,
        fontWeight: 700,
        fontSize: "1.5rem",
      }}
    >
      Spanish Grammar Course
    </h2>
    <p>Coming soon...</p>
  </div>
);

export default GrammarCourses;
