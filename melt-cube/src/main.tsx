import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);