import React from "react";

export const Footer: React.FC = () => {
  return (
    <>
      <footer
        style={{
          width: "100%",
          background: "rgb(64, 145, 108)",
          color: "#fff",
          textAlign: "center",
          padding: "2rem 0 1rem 0",
          marginTop: "2rem",
          fontSize: "1.1rem",
          letterSpacing: "0.5px",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ marginBottom: "0.5rem", fontWeight: 600 }}>
            Chinoles 学院 © {new Date().getFullYear()}
          </div>
          <div>
            联系我们：{" "}
            <a
              href="mailto:info@chinoles.com"
              style={{ color: "#fff", textDecoration: "underline" }}
            >
              info@chinoles.com
            </a>
          </div>
          <div style={{ marginTop: "0.5rem", fontSize: "0.95rem" }}>
            关注我们的社交媒体
            <a
              href="#"
              style={{
                color: "#fff",
                margin: "0 0.5em",
                textDecoration: "underline",
              }}
            >
              推特
            </a>
            <a
              href="#"
              style={{
                color: "#fff",
                margin: "0 0.5em",
                textDecoration: "underline",
              }}
            >
              Instagram
            </a>
            <a
              href="#"
              style={{
                color: "#fff",
                margin: "0 0.5em",
                textDecoration: "underline",
              }}
            >
              脸书
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
