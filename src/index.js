import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import "./assets/css/style.css"; // ✅ Correct CSS path

const root = createRoot(document.getElementById("root"));

root.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
