import React from "react";

const COLORS = {
  primary: "#2D6A4F",
  text: "#22223B",
  cardBorder: "#E9ECEF",
  cardBg: "#F7FFF7",
};

const Cart: React.FC = () => {
  // Example order data (replace with real data as needed)
  const order = {
    items: [{ name: "Spanish Pronunciation Mastery", price: 49.99 }],
    total: 49.99,
  };

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
          display: "flex",
          gap: "2.5rem",
          alignItems: "flex-start",
        }}
      >
        {/* Order and Pay Section */}
        <div
          style={{
            flex: 1,
            background: COLORS.cardBg,
            border: `1px solid ${COLORS.cardBorder}`,
            borderRadius: "10px",
            padding: "2rem",
          }}
        >
          <h2
            style={{
              color: COLORS.primary,
              fontWeight: 700,
              fontSize: "1.3rem",
              marginBottom: "1.2rem",
            }}
          >
            Order Summary
          </h2>
          <ul style={{ listStyle: "none", padding: 0, marginBottom: "1.2rem" }}>
            {order.items.map((item) => (
              <li key={item.name} style={{ marginBottom: "0.7rem" }}>
                <span style={{ fontWeight: 600 }}>{item.name}</span>
                <span style={{ float: "right" }}>${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div
            style={{
              borderTop: "1px solid #ddd",
              paddingTop: "1rem",
              fontWeight: 700,
            }}
          >
            Total:{" "}
            <span style={{ float: "right" }}>${order.total.toFixed(2)}</span>
          </div>
          <button
            style={{
              marginTop: "2rem",
              background: COLORS.primary,
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              padding: "0.8em 0",
              fontWeight: 700,
              fontSize: "1.1rem",
              width: "100%",
              cursor: "pointer",
            }}
            disabled
            title="Payment not implemented"
          >
            Pay Now
          </button>
        </div>
        {/* User Info Section */}
        <div
          style={{
            flex: 1,
            background: "#fff",
            border: `1px solid ${COLORS.cardBorder}`,
            borderRadius: "10px",
            padding: "2rem",
          }}
        >
          <h2
            style={{
              color: COLORS.primary,
              fontWeight: 700,
              fontSize: "1.3rem",
              marginBottom: "1.2rem",
            }}
          >
            Your Information
          </h2>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
          >
            <div>
              <label style={{ color: COLORS.primary, fontWeight: 600 }}>
                Email
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
                placeholder="Your email"
              />
            </div>
            <div>
              <label style={{ color: COLORS.primary, fontWeight: 600 }}>
                First Name
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
                placeholder="First name"
              />
            </div>
            <div>
              <label style={{ color: COLORS.primary, fontWeight: 600 }}>
                Last Name
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
                placeholder="Last name"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cart;
