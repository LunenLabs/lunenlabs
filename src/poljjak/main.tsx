import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import "../index.css";
import Landing from "./Landing";
import Privacy from "./Privacy";

// Served only on poljjak.lunenlabs.com (vercel.json host rewrite).
// Vercel Web Analytics: page views counted without cookies (page, referrer, country, device and OS),
// so the launch can see where visitors come from and how many are on Android. Privacy section 10.
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
    <Analytics />
  </React.StrictMode>
);
