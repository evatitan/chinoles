import React from "react";

// Example blog data (replace with dynamic import of .md files as needed)
const blogPosts = [
  {
    date: "May 15, 2025",
    title: "Why Learning Chinese",
    summary: "Short summary...",
    tags: ["chinese", "Academy"],
    authors: [
      {
        name: "Author 1",
        avatar: "https://randomuser.me/api/portraits/woman/32.jpg",
      },
    ],
  },
  {
    date: "May 15, 2025",
    title: "Why Learning Chinese",
    summary: "Short summary...",
    tags: ["chinese", "Academy"],
    authors: [
      {
        name: "Author 1",
        avatar: "https://randomuser.me/api/portraits/woman/32.jpg",
      },
    ],
  },
  {
    date: "May 15, 2025",
    title: "Why Learning Chinese",
    summary: "Short summary...",
    tags: ["chinese", "Academy"],
    authors: [
      {
        name: "Author 1",
        avatar: "https://randomuser.me/api/portraits/woman/32.jpg",
      },
    ],
  },

  // ...add more posts as needed
];

const COLORS = {
  primary: "#2D6A4F",
  accent: "#F9C74F",
  text: "#22223B",
  tagBg: "#E6FAF1",
  tagText: "#40916C",
  cardBorder: "#E9ECEF",
};

const Blogs: React.FC = () => {
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
          Blog and Updates
        </h1>
        <p
          style={{
            color: "#555",
            fontSize: "1.15rem",
            marginBottom: "2.5rem",
          }}
        >
          You will find some of the latest updates
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2rem",
          }}
        >
          {blogPosts.map((post, idx) => (
            <div
              key={post.title}
              style={{
                background: "#fff",
                border: `1px solid ${COLORS.cardBorder}`,
                borderRadius: "12px",
                padding: "1.5rem 1.5rem 1.2rem 1.5rem",
                boxShadow: "0 2px 8px rgba(44, 62, 80, 0.04)",
                display: "flex",
                flexDirection: "column",
                minHeight: "180px",
                position: "relative",
              }}
            >
              <div
                style={{
                  color: "#888",
                  fontSize: "1rem",
                  marginBottom: "0.5rem",
                }}
              >
                {post.date}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "0.5rem",
                }}
              >
                <span
                  style={{
                    fontWeight: 500,
                    fontSize: "1.18rem",
                    color: COLORS.text,
                  }}
                >
                  {post.title}
                </span>
                <div
                  style={{
                    marginLeft: "auto",
                    display: "flex",
                  }}
                >
                  {/* {post.authors.map((author, i) => (
                    <img
                      key={author.name}
                      src={author.avatar}
                      alt={author.name}
                      title={author.name}
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        objectFit: "cover",
                        marginLeft: i > 0 ? "-10px" : 0,
                        border: "2px solid #fff",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                      }}
                    />
                  ))} */}
                </div>
              </div>
              <div
                style={{
                  color: "#444",
                  fontSize: "1.05rem",
                  marginBottom: "1.2rem",
                }}
              >
                {post.summary}
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  marginTop: "auto",
                }}
              >
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: COLORS.tagBg,
                      color: COLORS.tagText,
                      fontSize: "0.95rem",
                      padding: "0.25em 0.8em",
                      borderRadius: "6px",
                      fontWeight: 600,
                      letterSpacing: "0.02em",
                      textTransform: "lowercase",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
