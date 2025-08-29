import React from "react";
import PronounceCourses from "../components/PronounceCourses";
import GrammarCourses from "../components/GrammarCourses";
import type { Course } from "../types/types";
import { useCourses } from "../hooks/useAsync";
import { useDispatch } from "react-redux";
import { setCourses } from "../redux/slices/coursesSlice";
import type { AppDispatch } from "../redux/store";
import { useNavigate } from "react-router-dom";

const COLORS = {
  primary: "#2D6A4F",
  accent: "#F9C74F",
  text: "#22223B",
  tagBg: "#E6FAF1",
  tagText: "#40916C",
  cardBorder: "#E9ECEF",
};

const courseTabs = [
  { key: "pronounce", label: "Pronounce" },
  { key: "grammar", label: "Grammar" },
  { key: "tailor", label: "Tailor" },
];

// // Example data for Pronounce course
// const PronounceCourses = {
//   title: "Spanish Pronunciation Mastery",
//   price: 49.99,
//   duration: 12, // hours
//   content:
//     "Master Spanish pronunciation with step-by-step video lessons and practice exercises.",
//   chapters: [
//     { title: "Introduction to Spanish Sounds", preview: true },
//     { title: "Vowels and Diphthongs", preview: true },
//     { title: "Consonants and Stress", preview: false },
//     { title: "Intonation and Rhythm", preview: false },
//     { title: "Common Pronunciation Mistakes", preview: false },
//   ],
// };

const SpanishCourses: React.FC = () => {
  const { fetchData, response } = useCourses();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [category, setCategory] = React.useState<string>("all");
  const [tab, setTab] = React.useState<string>("pronounce");

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
          Spanish Courses
        </h1>
        <p>You will find some of the courses that you like</p>
        {/* Tabs for course types */}
        <div style={{ margin: "1.5rem 0", display: "flex", gap: "1rem" }}>
          {courseTabs.map((t) => (
            <button
              key={t.key}
              onClick={() => {
                if (t.key === "tailor") {
                  navigate("/contact");
                } else {
                  setTab(t.key);
                }
              }}
              style={{
                background: tab === t.key ? COLORS.primary : "#f3f3f3",
                color: tab === t.key ? "#fff" : COLORS.text,
                border: "none",
                borderRadius: "6px",
                padding: "0.5em 1.2em",
                fontWeight: 600,
                cursor: "pointer",
                fontSize: "1rem",
                transition: "background 0.2s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
        {/* Render course type component */}
        {tab === "pronounce" && <PronounceCourses />}
        {tab === "grammar" && <GrammarCourses />}
      </div>
    </div>
  );
};

export default SpanishCourses;
