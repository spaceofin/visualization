// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Header from "./components/Header.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Recharts from "./pages/recharts/index.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/recharts" element={<Recharts />} />
    </Routes>
  </BrowserRouter>
  // </StrictMode>
);
