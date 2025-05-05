// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Header from "./components/Header.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Recharts from "./pages/recharts";
import ReactChartjs2 from "./pages/react-chartjs-2";
import ReactApexcharts from "./pages/react-apexcharts";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/recharts" element={<Recharts />} />
      <Route path="/react-chartjs-2" element={<ReactChartjs2 />} />
      <Route path="/react-apexcharts" element={<ReactApexcharts />} />
    </Routes>
  </BrowserRouter>
  // </StrictMode>
);
