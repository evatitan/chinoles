import React from "react";
import { CourseItem } from "../components/CourseItem";
import type { Course } from "../types/types";
import { useCourses } from "../hooks/useAsync";
import { useDispatch } from "react-redux";
import { setCourses } from "../redux/slices/coursesSlice";
import type { AppDispatch } from "../redux/store";
const COLORS = {
  primary: "#2D6A4F",
  accent: "#F9C74F",
  text: "#22223B",
  tagBg: "#E6FAF1",
  tagText: "#40916C",
  cardBorder: "#E9ECEF",
};
const Courses: React.FC = () => {
  const { fetchData, response } = useCourses();
  const dispatch = useDispatch<AppDispatch>();
  const [category, setCategory] = React.useState<string>("all");

  React.useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data: Course[] = await fetchData();
        if (data) {
          dispatch(setCourses(data));
        }
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };

    fetchCourses();
  }, [fetchData, dispatch]);

  // Filtered courses by category
  const filteredCourses = React.useMemo(() => {
    if (!response) return [];
    if (category === "all") return response;
    return response.filter((course) => course.category === category);
  }, [response, category]);

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
      <div style={{ maxWidth: 1200, width: "100%", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "2.7rem",
            fontWeight: 800,
            color: COLORS.primary,
            marginBottom: "0.5rem",
          }}
        >
          Courses and Programs
        </h1>
        <p>You will find some of the courses that you like</p>
        {/* Category Filter */}
        <div style={{ margin: "1.5rem 0", display: "flex", gap: "1rem" }}>
          <button
            onClick={() => setCategory("all")}
            style={{
              background: category === "all" ? COLORS.primary : "#f3f3f3",
              color: category === "all" ? "#fff" : COLORS.text,
              border: "none",
              borderRadius: "6px",
              padding: "0.5em 1.2em",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: "1rem",
              transition: "background 0.2s",
            }}
          >
            All
          </button>
          <button
            onClick={() => setCategory("chinese")}
            style={{
              background: category === "chinese" ? COLORS.primary : "#f3f3f3",
              color: category === "chinese" ? "#fff" : COLORS.text,
              border: "none",
              borderRadius: "6px",
              padding: "0.5em 1.2em",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: "1rem",
              transition: "background 0.2s",
            }}
          >
            Chinese
          </button>
          <button
            onClick={() => setCategory("spanish")}
            style={{
              background: category === "spanish" ? COLORS.primary : "#f3f3f3",
              color: category === "spanish" ? "#fff" : COLORS.text,
              border: "none",
              borderRadius: "6px",
              padding: "0.5em 1.2em",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: "1rem",
              transition: "background 0.2s",
            }}
          >
            Spanish
          </button>
        </div>
        {/* Filtered Course List */}
        {filteredCourses.map((course) => (
          <CourseItem key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
