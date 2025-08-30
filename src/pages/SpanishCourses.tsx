import React from "react";
import "./SpanishCourses.css";

const COLORS = {
  primary: "#2D6A4F",
  accent: "#F9C74F",
  text: "#22223B",
  tagBg: "#E6FAF1",
  tagText: "#40916C",
  cardBorder: "#E9ECEF",
};

const courseCategories = [
  {
    title: "发音课程",
    description: "从基础音素到自然对话的完整发音训练",
    features: ["西班牙语音素系统", "重音和语调", "连音规则", "地区口音差异"],
    image: "/courses/pronunciation.jpg",
  },
  {
    title: "语法课程",
    description: "系统化的语法学习，打造坚实的语言基础",
    features: ["基础语法概念", "动词变位", "时态用法", "虚拟语气"],
    image: "/courses/grammar.jpg",
  },
  {
    title: "DELE考试课程",
    description: "针对性备考，提高通过率",
    features: [
      "模拟真题演练",
      "考试技巧指导",
      "听说读写全方位训练",
      "个性化学习计划",
    ],
    image: "/courses/dele.jpg",
  },
  {
    title: "时态专项课程",
    description: "掌握西班牙语最具挑战性的语法点",
    features: ["现在时态系统", "过去时态系统", "将来时态", "虚拟语气时态"],
    image: "/courses/tenses.jpg",
  },
];

const SpanishCourses: React.FC = () => {
  return (
    <div
      style={{
        background: "#fff",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* 推荐去专业网站部分 */}
      <section
        style={{
          width: "100%",
          padding: "4rem 2rem",
          background: COLORS.tagBg,
        }}
      >
        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            textAlign: "center",
            padding: "3rem",
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              color: COLORS.primary,
              marginBottom: "1rem",
            }}
          >
            探索更多学习资源
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: COLORS.text,
              marginBottom: "2rem",
              lineHeight: 1.6,
            }}
          >
            访问我们的专业西班牙语学习平台
            chinoles.com，获取更多精品课程、学习资源和互动社区。
          </p>
          <a
            href="https://chinoles.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            前往专业学习平台 →
          </a>
        </div>
      </section>
      {/* 课程列表部分 */}
      <section
        style={{
          width: "100%",
          padding: "6rem 2rem",
          background: "#fff",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "2.7rem",
              fontWeight: 800,
              color: COLORS.primary,
              marginBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            西班牙语精品课程
          </h1>
          <p
            style={{
              textAlign: "center",
              color: COLORS.text,
              fontSize: "1.2rem",
              marginBottom: "3rem",
            }}
          >
            为您提供全方位的西班牙语学习解决方案
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
              padding: "0 1rem",
            }}
          >
            {courseCategories.map((course, index) => (
              <div key={index} className="course-card">
                <div
                  style={{
                    height: "160px",
                    background: COLORS.primary,
                    borderRadius: "12px 12px 0 0",
                  }}
                />
                <div style={{ padding: "1.5rem" }}>
                  <h3
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      color: COLORS.primary,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {course.title}
                  </h3>
                  <p
                    style={{
                      color: COLORS.text,
                      marginBottom: "1rem",
                      fontSize: "1rem",
                    }}
                  >
                    {course.description}
                  </p>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: "0 0 1rem 0",
                    }}
                  >
                    {course.features.map((feature, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "0.5rem",
                          fontSize: "0.9rem",
                          color: COLORS.text,
                        }}
                      >
                        <span
                          style={{
                            color: COLORS.primary,
                            marginRight: "0.5rem",
                          }}
                        >
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpanishCourses;
