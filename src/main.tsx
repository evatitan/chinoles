import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "./redux/store.tsx";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
