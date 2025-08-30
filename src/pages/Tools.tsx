import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
const COLORS = {
  primary: "#2D6A4F",
  accent: "#F9C74F",
  text: "#22223B",
  tagBg: "#E6FAF1",
  tagText: "#40916C",
  cardBorder: "#E9ECEF",
  cardBg: "#F7FFF7", // light background for cards
};

// Example tools data
const tools = [
  {
    name: "Rae API",
    url: "https://rae-api.com/",
    github: "https://github.com/rae-api-com",
  },
  {
    name: "Chinoles Sayings",
    url: "https://chinoles-sayings.vercel.app",
    github: "",
  },
];

const Tools: React.FC = () => {
  const currentLang = useSelector((state: RootState) => state.lang.currentLang);

  return (
    <>
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
              marginBottom: "2rem",
            }}
          >
            {currentLang.tools.title}
          </h1>
          <p>{currentLang.tools.description}</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "2rem",
              marginTop: "2rem",
            }}
          >
            {tools.map((tool) => (
              <div
                key={tool.name}
                style={{
                  background: COLORS.cardBg, // light color for card
                  border: `1px solid ${COLORS.cardBorder}`,
                  borderRadius: "12px",
                  padding: "2rem 1.5rem",
                  boxShadow: "0 2px 8px rgba(44, 62, 80, 0.04)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "120px",
                }}
              >
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    color: COLORS.text,
                    marginBottom: "0.7rem",
                  }}
                >
                  {tool.name}
                </span>
                {tool.developer && (
                  <span
                    style={{
                      fontSize: "0.98rem",
                      color: "#888",
                      marginBottom: "1.2rem",
                    }}
                  >
                    {tool.developer}
                  </span>
                )}
                <div
                  style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}
                >
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: COLORS.primary,
                      color: "#fff",
                      padding: "0.6em 1.5em",
                      borderRadius: "6px",
                      textDecoration: "none",
                      fontWeight: 600,
                      fontSize: "1rem",
                      transition: "background 0.2s",
                    }}
                  >
                    Open Tool
                  </a>
                  {tool.github && (
                    <a
                      href={tool.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: "#22223B",
                        color: "#fff",
                        padding: "0.6em 1.2em",
                        borderRadius: "6px",
                        textDecoration: "none",
                        fontWeight: 600,
                        fontSize: "1rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5em",
                        transition: "background 0.2s",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        style={{ marginRight: "0.3em" }}
                      >
                        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;
