import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./Router.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
 