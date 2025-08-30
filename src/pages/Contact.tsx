import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import wechatQR from "../assets/contact/wechat_qr.png"; // Make sure this path is correct

const COLORS = {
  primary: "rgb(64, 145, 108)",
  text: "rgb(85, 85, 85)",
};

const Contact: React.FC = () => {
  const currentLang = useSelector((state: RootState) => state.lang.currentLang);

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
          maxWidth: 900,
          width: "100%",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 2px 12px rgba(44, 62, 80, 0.08)",
          padding: "2.5rem 2rem",
          color: COLORS.text,
          display: "flex",
          flexDirection: "row",
          gap: "2.5rem",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        {/* Left: Contact Form */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <h1
            style={{
              color: COLORS.primary,
              fontWeight: 800,
              fontSize: "2rem",
              marginBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            {currentLang.contact.title}
          </h1>
          <p style={{ marginBottom: "2rem", textAlign: "center" }}>
            {currentLang.contact.description}
          </p>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for contacting us!");
            }}
          >
            <div>
              <label style={{ color: COLORS.primary, fontWeight: 600 }}>
                {currentLang.contact.form.fullName}
              </label>
              <input
                type="text"
                required
                style={{
                  width: "100%",
                  padding: "0.7em",
                  borderRadius: "6px",
                  border: "1px solid #ddd",
                  marginTop: "0.3em",
                  color: COLORS.text,
                }}
                placeholder={currentLang.contact.form.fullName}
              />
            </div>
            <div>
              <label style={{ color: COLORS.primary, fontWeight: 600 }}>
                {currentLang.contact.form.email}
              </label>
              <input
                type="email"
                required
                style={{
                  width: "100%",
                  padding: "0.7em",
                  borderRadius: "6px",
                  border: "1px solid #ddd",
                  marginTop: "0.3em",
                  color: COLORS.text,
                }}
                placeholder={currentLang.contact.form.email}
              />
            </div>
            <div>
              <label style={{ color: COLORS.primary, fontWeight: 600 }}>
                {currentLang.contact.form.phone}
              </label>
              <input
                type="tel"
                style={{
                  width: "100%",
                  padding: "0.7em",
                  borderRadius: "6px",
                  border: "1px solid #ddd",
                  marginTop: "0.3em",
                  color: COLORS.text,
                }}
                placeholder={"+1234567890"}
              />
            </div>
            <div>
              <label style={{ color: COLORS.primary, fontWeight: 600 }}>
                {currentLang.contact.form.interests}
              </label>
              <textarea
                required
                rows={4}
                style={{
                  width: "100%",
                  padding: "0.7em",
                  borderRadius: "6px",
                  border: "1px solid #ddd",
                  marginTop: "0.3em",
                  color: COLORS.text,
                  resize: "vertical",
                }}
                placeholder={currentLang.contact.form.interests}
              />
            </div>
            <button
              type="submit"
              style={{
                background: COLORS.primary,
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                padding: "1em 0",
                fontWeight: 700,
                fontSize: "1.1rem",
                marginTop: "1rem",
                cursor: "pointer",
              }}
            >
              🚀 {currentLang.contact.form.submit}
            </button>
          </form>
        </div>
        {/* Right: WeChat QR */}
        <div
          style={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderLeft: "1px solid #eee",
            paddingLeft: "2rem",
          }}
        >
          <h2
            style={{
              color: COLORS.primary,
              fontWeight: 700,
              fontSize: "1.2rem",
              marginBottom: "1.2rem",
              textAlign: "center",
            }}
          >
            Or contact us via WeChat
          </h2>
          <img
            src={wechatQR}
            alt="WeChat QR"
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "10px",
              marginBottom: "1rem",
              border: "1px solid #ddd",
              objectFit: "cover",
              background: "#fafafa",
            }}
          />
          <div
            style={{
              color: COLORS.text,
              fontSize: "1rem",
              textAlign: "center",
            }}
          >
            Scan the QR code to connect with us on WeChat.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
