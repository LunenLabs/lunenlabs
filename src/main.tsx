import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Landing from "./pages/Landing";
import PetTracker from "./pages/PetTracker";
import Nightward from "./pages/Nightward";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import DangmasilPrivacy from "./pages/DangmasilPrivacy";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/pet" element={<PetTracker />} />
        <Route path="/nightward" element={<Nightward />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/dangmasil/privacy" element={<DangmasilPrivacy />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
