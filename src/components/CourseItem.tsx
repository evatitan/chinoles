import type { Course } from "../types/types";
import HSK1 from "../assets/courses/HSK1.png";

export const CourseItem: React.FC<{ course: Course & { img: string } }> = ({
  course,
}) => (
  <div
    style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      width: "60%",
      minHeight: "160px",
      padding: "1rem",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      background: "#fff",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "1.5rem",
      boxSizing: "border-box",
      margin: "0  auto 1rem auto",
      cursor: "pointer",
    }}
  >
    <img
      // src={`../assets/courses/${course.img}`}
      src={HSK1}
      alt={course.title}
      style={{
        width: "140px",
        height: "140px",
        objectFit: "cover",
        borderRadius: "4px",
        flexShrink: 0,
      }}
    />

    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <h1 style={{ margin: "0 0 0.5rem 0" }}>{course.title}</h1>
      <p style={{ fontSize: "0.95rem", color: "#555", margin: 0 }}>
        {course.description}
      </p>
      <div style={{ marginTop: "0.5rem" }}>
        <strong>Prices:</strong> ${Number(course.prices).toFixed(2)}
        <br />
        <strong>Category:</strong> {course.category}
        <br />
        <strong>Duration:</strong> {course.duration} hours
        <br />
        <strong>Model:</strong> {course.model}
      </div>
    </div>
  </div>
);
