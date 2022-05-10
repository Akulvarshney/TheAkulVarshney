import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Marketing from "./components/Experience/Marketing";
import Technical from "./components/Experience/Technical";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/marketing" element={<Marketing />} />
      <Route exact path="/technical" element={<Technical />} />
    </Routes>
  </BrowserRouter>
);
