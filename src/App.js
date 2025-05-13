import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import FeaturesPage from "./components/FeaturesPage/FeaturesPage";
import DemoPage from "./components/DemoPage/DemoPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/demo" element={<DemoPage />} />
    </Routes>
  );
}

export default App;